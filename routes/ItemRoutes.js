const express = require('express');
const router = express.Router();
var ItemController = require('../controllers/ItemController.js')

router.get('/', ItemController.list);

router.get('/:id', ItemController.show);

router.post('/:id', ItemController.create);

router.put('/:id', ItemController.update);

router.delete('/:id', ItemController.remove);

router.get('/:id/edit', ItemController.edit);


module.exports = router;
