const express = require('express');
const router = express.Router();
const controller = require('../controllers/characters.controller');



///Characters
router.get('/', controller.getCharacters);
router.get('/:id', controller.getCharById);
router.get('/:id/:item', controller.getItems);



module.exports = router;
