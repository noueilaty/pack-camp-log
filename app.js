const express = require('express');
const app = express();
const models = require('./models');

var mustacheExpress = require('mustache-express');


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');



// Fetch:
// models.inventory.findOne({
//   where: {
//     category: 'Essentials'
//   }
// }).then(function(inventory){
//   console.log(inventory)
// })

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))
