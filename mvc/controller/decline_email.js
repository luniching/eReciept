var middleware = require('../../lib/middleware');
var modelNormalizer = require('../../lib/modelNormalizer');
module.exports = function(server) {
	'use strict';

	server.get('/decline_email', modelNormalizer, middleware.content, middleware.xhr, function(req, res) {
		res.render(req.model.viewName, req.model);
	});
};