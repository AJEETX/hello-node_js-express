var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.links({ENDPOINTS: ['/swagger']});
  res.send('hello, readify');
});

app.listen(process.env.PORT || 3000);
