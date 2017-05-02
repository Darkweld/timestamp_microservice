var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/:value', function(req, res) {
  var date;
  if (isNaN(req.params.value) === true) {
    date = Date(req.params.value.toString());
    res.end(date);
    }
    date = Date(req.params.value);
  res.end(date);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


