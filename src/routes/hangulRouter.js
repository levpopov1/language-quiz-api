const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const hangulController = require('../controllers/hangulController');
const Hangul = mongoose.model('Hangul');

const findByID = require('../middleware/findById');
const findAll = require('../middleware/findAll');
const countAll = require('../middleware/countAll');

router.get('/', findAll(Hangul), hangulController.getAll);
router.get('/random', hangulController.getRandom);
router.get('/:id', findByID(Hangul), hangulController.getOne);


router.post('/', hangulController.post);


module.exports = router;