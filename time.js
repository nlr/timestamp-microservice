var moment = require('moment');

module.exports = function(dateString) {
	var formats = [
    'MMMM D, YYYY',
    'MMMM D YYYY',
    'MMM D, YYYY',
    'MMM D YYYY',
		'X',
		'x',
	]

	var time = moment(dateString, formats, true);

	if(!time.isValid()) {
		return { unix: null, natural: null };
	}

	return { unix: time.format('X'), natural: time.format('MMMM D, YYYY') };
};