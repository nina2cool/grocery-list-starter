const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('express-method-override')

app.use(express.static('assets'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))



mongoose.connect('mongodb://localhost/grocery-list');


// routes
const ItemRoutes = require('./routes/ItemRoutes');

// Set our routes
app.use('/items', ItemRoutes);

//left off here - trying to figure out how to edit/delete with form
// app.use('/:*/itemEdit', ItemEditRoutes);

app.use('/*', function(req, res, next) {
  res.redirect('/items');
});


const port = 3003;
app.listen(port, () => console.log(`Listening on ${port}`));
