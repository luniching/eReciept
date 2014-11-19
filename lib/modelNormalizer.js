var objutil = require("objutil");

module.exports = function process(request, response, next) {

  // delete require cache to prevent bad data on page refresh
  delete require.cache[require.resolve('../mvc/model' + request.url.split("?")[0])];

  // load unmodified model dumped from sparta from models folder
request.model = objutil.merge(require('../mvc/model' + request.url.split("?")[0]), request.model || {});

// this hack normalizes the master and viewName for dust rendering
request.model.viewName = request.model.viewName;
request.model.master = 'inc/master';

// this hack replaces the sparta pathing in the data model with node-appropriate pathing for statics
request.model.data.links = {
    cssBaseUrl: '/css',
    jsBaseUrl: '/js',
    templateBaseUrl: '/templates',
    imgBaseUrl: '/img',
    icoBaseUrl: '/ico'
};

// ok now we're done hacking around our stupid environment issues :)
next();
};