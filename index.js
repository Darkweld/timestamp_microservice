var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render("pages/index");
});
app.get('/:value', function(req, res) {
  var str = req.params.value;
  var date;
  var d = new Date(str);
  var obj = {unixtime: null, natural: null};
  if (isNaN(Number(str)) === false) {
    date = new Date(Number(str));
    obj.unixtime = date.getTime();
    obj.natural = date.toDateString();
  } else if (isNaN(d.getTime()) === false) {
    date = new Date(d.getTime());
    obj.unixtime = d.getTime();
    obj.natural = date.toDateString();
  }
    
    res.render("pages/data", {obj:obj});
    res.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


