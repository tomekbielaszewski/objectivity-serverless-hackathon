'use strict'
var awsServerlessExpress = require('aws-serverless-express');
var app = require('./index');
var server = awsServerlessExpress.createServer(app);

exports.handler = function (event, context) {
    awsServerlessExpress.proxy(server, event, context)
};