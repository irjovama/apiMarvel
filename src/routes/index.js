const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');



///Characters
router.get('/:endpoint', controller.getData);
router.get('/:endpoint/:id', controller.getDataById);
router.get('/:endpoint/:id/:item', controller.getItems);



module.exports = router;
