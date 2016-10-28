const ItemModel = require('../models/ItemModel.js');

module.exports = {

    list: function(req, res, next) {
        ItemModel.find((err, items) => {
            res.render('index', {
                items: items
            });
            // return res.json(items);

        })
    },

    show: function(req, res, next) {
        var id = req.params.id;

        ItemModel.findOne({
            _id: id
        }, function(err, item) {
            return res.json(item);
        });

        // ItemModel.find((err, item) => {
        // res.render('index', {
        //     item: item
        // });
    },


    create: function(req, res, next) {
        var item = new ItemModel({
            text: req.body.text,
            quantity: req.body.quantity
        });

        item.save((err, item) => {
            // return res.json(item);

            res.redirect('/items');

        });
    },

    update: function(req, res) {
        console.log('update');
        var id = req.params.id;

        ItemModel.findOne({
                _id: id
            },
            function(err, item) {
                item.text = req.body.text;
                item.quantity = req.body.quantity;

                item.save(function(err, item) {
                    // return res.json(item);
                  res.redirect('/items');
                });
            });

    },


    remove: function(req, res) {
        console.log('delete');
        var id = req.params.id;
        ItemModel.findByIdAndRemove(id, function(err, item) {

              res.redirect('/items');
        });

    },

    //create a form, set values, edit and save
    edit: function(req, res, next) {

        var id = req.params.id;

        ItemModel.findOne({
                _id: id
            },
            function(err, item) {
                var text = req.body.text;
                var quantity = req.body.quantity;

                res.render('edit', {
                    item: item,
                    quantity: quantity

                });



            });
    }


};
