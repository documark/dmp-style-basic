var file = require('path').resolve(__dirname, 'assets', 'style.css');

module.exports = function dmpStyleBasic ($, document, done) {
	$('head').prepend('<link rel="stylesheet" type="text/css" href="file://' + file + '"/>');

	done();
};
