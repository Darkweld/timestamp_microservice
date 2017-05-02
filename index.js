var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/:value', function(req, res) {
  var str = req.params.value;
  var date;
  var d = new Date(str);
  if (isNaN(Number(str)) === false) {
    date = new Date(Number(str));
    res.end("Unixtime:" + date.toString() 
    + "<br> Natural language format date:" 
    + date.toDateString());
  } else if (isNaN(d.getTime()) === false) {
    date = new Date(d.getTime());
    res.end("Unixtime:" + d.getTime().toString() 
    + "<br> Natural language format date:" 
    + date.toDateString());
  }

    res.end("Unixtime:" + null + "<br> Natural language format date:" + null);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


