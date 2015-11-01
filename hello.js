var polet = require('../main');

var app = new polet.App({
	lookup: [__dirname + "/features"],
	features: [
		"hello"
	]
});

app.start();