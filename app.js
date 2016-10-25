const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');


app.use(express.static('assets'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect('mongodb://localhost/grocery-list');

const ItemModel = require('./models/ItemModel.js');

/* GET home page. */
app.get('/', (req, res, next) => {
    // Here we are asking mongoose to find TaskModels,
    // we are not passing any specifice attributes, such
    // as an id, so mongoose will find all tasks.
  ItemModel.find((err, items) => {
    // Queries are run asynchronously.
        // So we have to pass in a callback to be ran when the db query is finished
    res.render('index', {
      items: items
    });
  });
});

/* POST Create a task. */
app.post('/items', (req, res, next) => {
  var item = new ItemModel({
        text : req.body.text,
        quantity : req.body.quantity
  });

  item.save((err, item) => {
        // Inserts are run asynchronously.
        // So we have to pass in a callback to be ran when the insert is finished
    res.redirect('/');
  });
});

const port = 3003;
app.listen(port, () => console.log(`Listening on ${port}`));
