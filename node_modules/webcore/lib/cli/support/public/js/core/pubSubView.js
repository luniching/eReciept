/**
 * Abstract view that's tied to a JSON data source. The view will automatically
 * publish global nougat events when it's data is updated and subscribes to 
 * events from others to update.
 *
 * @param dataProperty {string} The key of the JSON model to watch for changes
 */
define([
	'nougat',
	'jquery',
	'BaseView',
	'backbone'
],
function (nougat, $, BaseView, Backbone) {

	'use strict';


	var PubSubModel = Backbone.Model.extend({
		parse: function (response) {
			// We only care about the inner bits of the data
			// so that we can observe the individual keys
			return response.data;
		}
	});


	var PubSubView = BaseView.extend({


		/**
		 * Runs when the view is created
		 */
		initialize: function (options) {
			var model = this.model = new PubSubModel();

			// Listen for changes to the model
			model.on('change:' + this.dataProperty, this.render, this);

			// Listen for broadcast changes and update
			nougat.on('data:' + this.dataProperty, model.set, model);
		},


		/**
		 * Manually forces an update on the view's model
		 */
		updateData: function (data) {
			this.model.set(this.model.parse(data));
		},


		/**
		 * Interally our model may not have a "data" property, but let's not show that
		 *
		 * @override BaseView#serialize
		 */
		serialize: function() {
			var data = this.model;

			if (data && data.toJSON) {
				return {
					data: data.toJSON()
				};
			}

			return {};
		},


		/**
		 * Broadcast the data update event to others who may need it
		 *
		 * @override BaseView#serialize
		 */
		afterRender: function () {
			nougat.trigger('data:' + this.dataProperty, this.model.toJSON());
		}
	});


	return PubSubView;
});
