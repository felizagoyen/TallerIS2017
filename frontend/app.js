const express = require('express')
const request = require('request');
const app = express()
const endpoint = process.env.ENDPOINT

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/convert', function (req, res) {
  var currencyFrom = req.query.currencyFrom;
  var currencyTo = req.query.currencyTo;
  var value = req.query.value;
  if (currencyFrom != undefined && currencyTo != undefined && !isNaN(value)) {
    var path = endpoint + "/convert/" + currencyFrom + "/" + currencyTo + "/" + value;
    request
      .get(path, {timeout: 1500})
      .on('error', function(err) {
        console.log(err);
        res.end("Ha ocurrido un error inesperado. Por favor intente de nuevo mas tarde");
      })
      .on('response', function(response) {
        response.on('data', function(data) {
          res.end(data);
        });
      });
  } else {
    res.end("Solicitud Inválida");
  }
})

app.get('/conversion', function (req, res) {
  res.render('conversion');
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
