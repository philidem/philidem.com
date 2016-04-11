Error.stackTraceLimit = Infinity;

require('app-module-path').addPath(__dirname);

require('./lasso-project').server()
	.start(function(err, server) {
		if (err) {
			throw err;
		}
	});
