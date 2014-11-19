define(['nougat', 'jquery', 'BaseView'], function(nougat, $, BaseView) {

	'use strict';

	var AppView = BaseView.extend({

		initialize: function() {
			/*global console:true */
			if (console && console.log) {
				console.log('initialized');
			}
			/*global console:false */
		}

	});

	$(function() {
		var app = new AppView();
	});

});
