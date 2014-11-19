/*
 * NOTE: DO NOT DELETE
 * This file is required by both requireJs and r.js to properly manage
 * packaging and loading dependencies. If you would like to add a convenience
 * alias, include it in the 'paths' object below.
 *
 * Your application's main entry point must follow the convention of being named
 * 'app.js' to take advantage of this behavior.
 *
 * {@see http://requirejs.org/docs/api.html#config}
 */
(function(module) {
	"use strict";

	var config = module.exports = {
		// baseUrl: "",
		paths: {
			"jquery": "lib/jquery-1.8.0",
			"json": (typeof JSON === "undefined") ? "lib/json2" : "empty:",
			"underscore": "lib/underscore-1.3.3",
			"backbone": "lib/backbone-0.9.2",
			"dust": "lib/dust-core-1.0.0",
			"nougat": "core/nougat",
			"BaseView": "core/baseView",
			"dust-helpers" : "lib/dust-helpers",
		},
		useStrict: true,
		shim: {
			"dust": {
				// Add any dust extensions as dependencies. Extensions should
				// expose a single function that accepts the `dust` object as an
				// argument. Extensions can modify the `dust` object as they
				// wish.
				//
				// IMPORTANT: Ensure the list of dependencies stays in sync with
				//            those in index.js.
				//
				// deps: ['path/to/my-dust-extension'],

				exports: function () {
					var extensions = Array.prototype.slice.call(arguments),
					    i   = 0,
					    len = extensions.length;

					for ( ; i < len; ++i) {
						extensions[i](window.dust);
					}

					// TODO: Unfortunately, dust requires it be in the global
					// scope. This sucks, but until we can build a fork with AMD
					// support we have to use it as-is.
					return window.dust;
				}
			},
			"underscore": {
				exports: function() {
					return window._.noConflict();
				}
			},
			"backbone": {
				deps: ["underscore", "jquery"],
				exports: function() {
					Backbone.setDomLibrary(window.jQuery.noConflict());
					return window.Backbone.noConflict();
				}
			}
		}
	};

	if (typeof window !== "undefined" && navigator && document) {
		// Configure requires and bootstap app, conditionally loading JSON support
		require.config(config);
		if (config.paths.json !== "empty:") {
			require(["json"], function() {
				require(["app"]);
			});
		} else {
			require(["app"]);
		}
	}

/*global module:true*/
}(typeof module === "undefined" ? {} : module));
/*global module:false*/
