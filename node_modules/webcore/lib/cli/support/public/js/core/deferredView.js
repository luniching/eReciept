/**
 * Abstract view which can be attached to a link and replaces it's contents with the
 * page content from the link's href. Note, this is only for GET requests.
 */
define([
	'jquery',
	'BaseView',
	'backbone'
],
function ($, BaseView, Backbone) {

	'use strict';


	var DeferredView = BaseView.extend({

		/**
		 * Default styles used
		 */
		styles: {
			loading: 'loading'
		},


		/**
		 * Runs when the view is created
		 */
		initialize: function () {
			this.model = new Backbone.Model();
			this._loadContent();
		},


		/**
		 * Asynchronously replaces an element with the results of it's action
		 */
		_loadContent: function () {
			var el = this.$el;

			el.addClass(this.styles.loading);

			$.get(el.attr('href'))
				.done(this._doReplace.bind(this))
				.fail(this.replaceError.bind(this));
		},


		/**
		 * Preps work for doing the replace
		 * @param json {object}
		 */
		_doReplace: function (json) {
			this.template = json.viewName;
			this.model.set(json);

			this.render();
		},


		/**
		 * The error handler for replacing
		 * @param err {Error}
		 */
		replaceError: function (err) {},


		/**
		 * The actual render method which updates the content
		 * @override BaseView#_doRender
		 */
		_doRender: function(content, template) {
			this.$el.replaceWith(content);
		}

	});


	return DeferredView;
});
