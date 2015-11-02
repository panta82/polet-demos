var polet = require('../main');

var app = new polet.App({
	lookup: [__dirname + "/features"]
});

app.init('arguments.help');
app.init('arguments.setup');
app.init('arguments.setup');
