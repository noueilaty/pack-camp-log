const express = require('express');
const app = express();
const models = require('./models');

var mustacheExpress = require('mustache-express');


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');


app.get('/', function (req, res) {
  models.inventory.findAll().then(function(inventories){
    res.render('index', {'inventory':inventories})
  })
})

app.listen(3000, () => console.log('Listening on port 3000!'))
