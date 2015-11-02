var _ = require('lodash'),
	fs = require('fs'),

	polet = require('../../main');

var DEFAULT_OPTIONS = {
	targetKey: 'VERSION'
};

function FeatureVersion(options) {
	options = _.merge(DEFAULT_OPTIONS, options);

	this.init = function (app, done) {

	};

	this.init = polet.step(function (app, done) {

	});
}
module.exports = FeatureVersion;

module.exports = polet.feature({
	name: 'version'
});