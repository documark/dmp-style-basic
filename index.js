var resolve = require('path').resolve;
var file    = resolve(__dirname, 'assets', 'style.css');

module.exports = function dmpStyleBasic ($, document, done) {
	$.root().append('<link rel="stylesheet" type="text/css" href="file://' + file + '"/>');

	done();
};
