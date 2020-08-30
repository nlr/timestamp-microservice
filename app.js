var express = require('express');
var time = require('./time');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/:date', function(req, res) {
  res.json(time(req.params.date));
});

app.listen(port, function() {
	console.log(`timestamp app listening on port ${ port }`);
});
