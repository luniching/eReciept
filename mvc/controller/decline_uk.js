var middleware = require('../../lib/middleware'),
  setFlow = middleware.setFlow,
	registerTemplates = middleware.registerTemplates,
  modelNormalizer = require('../../lib/modelNormalizer');
	
module.exports = function(server) {
	'use strict';

	server.get('/decline_uk', setFlow, registerTemplates, modelNormalizer, middleware.content, middleware.xhr, function(req, res) {
		res.render(req.model.viewName, req.model);
	});
};