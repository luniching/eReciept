var Person = require('../model/personModel');

module.exports = function (server) {
    'use strict';

    /**
     * The default route for this application: /
     * @param {Object} req the HTTP request object
     * @param {Object} res the HTTP response object
     */
    server.get('/', function (req, res) {
        var model = {title: 'Hello, world'};
        model.recipient = Person.create('world');
        res.render('index', model);
    });
};
