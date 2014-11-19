
/*global exports:true, require:true, module:true */

'use strict';

var contentLoader = require('./contentloader'),
  fs = require("fs"),
path = require("path"),
config = require('webcore').config,
objutil = require("objutil");

exports = module.exports = {

/**
* @param {Object} request
* @param {Object} response
* @param {Function} next
*/
xhr : function(request, response, next) {
if (request.xhr && request.accepts('application/json')) {
response.json(request.model);
return;
}
next();
},

/**
* @param {Object} request
* @param {Object} response
* @param {Function} next
*/
validate : function(request, response, next) {

var fieldErrors = request.validationErrors(true),
viewModel;

var pageErrors = {
errors : request.pageErrors(),
/* TODO: Add setter for page error header in validation utils */
header : ''
};

if (fieldErrors) {
if (request.xhr && request.accepts('application/json')) {
viewModel = {
data: {
errors: fieldErrors,
pageErrors : pageErrors
}
};

response.json(viewModel);
return;
} else {
// when .proceed isn't there...
request.session.errors = fieldErrors;
request.session.pageErrors = pageErrors;
response.redirect(request.url);
return;
}
}
next();
},

/**
* Aggregates and adds content to the request context/model.
* @param {Object} request [description]
* @param {Object} response [description]
* @param {Function} next [description]
*/
content : function (request, response, next) {
var model = request.model;

function onContent(err, content) {
model.content = content;
next(err);
}

function onRender(err, data, metadata) {
contentLoader.loadContent(metadata.bundles, onContent);
}

// Pre-render to calculate necessary content
response.render(model.viewName, model, onRender);
},
/**
* Sets current flow
* @param {Object} request
* @param {Object} response
* @param {Function} next
*/
setFlow: function(req, res, next) {
var flowSuffix;

req.session.flow = req.query.flow || req.session.flow || config.get("defaultFlow");

flowSuffix = (req.session.flow && req.session.flow !== "default") ? "-" + req.session.flow : "";

// set flow to data model
req.model = req.model || {};
req.model.flow = req.session.flow = req.session.flow;

// set master template if we have one
if (fs.existsSync(path.resolve("public/templates/inc/master" + flowSuffix + ".dust"))) {
req.model.master = "inc/master" + flowSuffix;
}

next();
},
/**
* Adds template registry to context object
* @param {Object} request
* @param {Object} response
* @param {Function} next
*/
registerTemplates: function(req, res, next) {
req.model = req.model || {};

  // invalidate cache
delete require.cache[path.resolve("templates.json")];

// reload template registry data from file to get a fresh object
req.model.templates = require(path.resolve("templates.json"));

next();
}

};