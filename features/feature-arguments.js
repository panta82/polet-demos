var _ = require('lodash'),
	ArgumentParser = require('argparse').ArgumentParser,

	polet = require('../../main');

var DEFAULT_OPTIONS = {
	description: 'My app'
};





function FeatureArguments(options) {
	options = _.merge(DEFAULT_OPTIONS, options);

	var parser = new ArgumentParser({
		version: '',
		addHelp: false
	});
}

var Arguments = polet.feature('arguments', DEFAULT_OPTIONS);
Arguments.step(['version'], function (options, app, done) {

});

module.exports = polet
	.feature('arguments', DEFAULT_OPTIONS)
	.step('start', function (opts, app) {
		app.argumentOptions = {
			version: '0.0.0'
		};
		app.arguments = [];
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