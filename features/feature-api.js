var _ = require('lodash'),

	polet = require('../../main');

var DEFAULT_OPTIONS = {
	port: 1234,
	host: '127.0.0.1'
};

module.exports = polet
	.feature('api', DEFAULT_OPTIONS)
	.step('start', function (opts, app) {
		opts.api = {};
		app.api = {
			get: function () {},
			put: function () {},
			post: function () {},
			delete: function () {}
		};
	})
	.step('arguments', ['arguments:start'], function (opts, app) {
		app.arguments.push({
			flags: ['-p', '--port'],
			description: 'API port'
		});
		app.arguments.push({
			flags: ['-h', '--host'],
			description: 'API host'
		});
	});