var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// GET /flights (index functionality)
router.get('/', flightsCtrl.index);

// GET /flight/new (new functionality)
router.get('/new', flightsCtrl.new);

// POST /flights  (create functionality)
router.post('/', flightsCtrl.create);

// GET /flights/:id (show functionality)
router.get('/:id', flightsCtrl.show);

module.exports = router;
