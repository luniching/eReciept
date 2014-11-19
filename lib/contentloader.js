'use strict';


var config = require('webcore').config,
	tater  = require('tater'),
	path   = require('path'),
	async  = require('async'),
	slice  = Array.prototype.slice;


tater.registerSerializer('v4', require('v4serializer'));

/**
 * Combines objects in reverse order of provided arguments. The right-most
 * object's properties are copied to the left, and so on.
 * @param  {Object} dest the destination object
 * @return {Object}      the destination object
 */
function mixin(dest) {

	slice.call(arguments, 1).forEach(function mergeObject(src) {

		Object.keys(src).forEach(function copyProperty(prop) {
			// Get the descriptor and value
			var descriptor = Object.getOwnPropertyDescriptor(src, prop),
				value = descriptor.value;

			// If dest has the same property and the value is a proper object,
			// recurse and merge the two.
			if (dest.hasOwnProperty(prop) && typeof value === 'object' && !Array.isArray(value)) {
				mixin(dest[prop], value);
			} else {
				Object.defineProperty(dest, prop, descriptor);
			}
		});

	});

	return dest;
}



module.exports = {

	/**
	 * Load the provided bundles and return the content in a namespaced object. A
	 * bundle name should consist of an appName/bundleName pair, e.g.
	 * {appName}.{bundleName}, or 'myapp.landing'.
	 * @param  {Array}   bundles   an array of bundles to be loaded
	 * @param  {Function} callback the callback to invoke when load is complete
	 */
	loadContent: function (bundles, callback) {
		var basePath = [config.get('paths:localeRoot'), 'en-US'];

		function iter(namespace, next) {
			var bundle = namespace.split('.'),
				filePath;

			// Assume the last element is the filename and ensure
			// it has the correct extension
			bundle[bundle.length - 1] += '.4cb';
			// Get the full file path
			filePath = path.join.apply(null, basePath.concat(bundle));
			// Operate on the file
			tater.deserialize(filePath, 'v4', next);
		}

		function complete(err, results) {
			callback(err, mixin.apply(null, results));
		}

		async.map(bundles, iter, complete);
	}
};
