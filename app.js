const express = require('express');
const app = express();
const models = require('./models');
const bodyParser = require('body-parser');

var mustacheExpress = require('mustache-express');

let createCheckbox = document.getElementById('checkbox')

app.use(bodyParser.urlencoded({extended:false}));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');



app.get('/create', function (req, res) {
  models.inventory.findAll().then(function(inventories){
    res.render('create', {'inventory':inventories})
  })
});

app.get('/create', function (req, res) {
  res.render('create')
});

app.post('/create', function (req,res) {
  models.inventory.create({
    item:req.body.item,
    category:req.body.category
  }).then(function() {
    res.redirect('/create')
  })
});

app.listen(3000, () => console.log('Listening on port 3000!'))

createCheckbox.addEventListener('click', function(){
  console.log('checked')
})
