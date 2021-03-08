const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const hiraganaController = require('../controllers/hiraganaController');
const Hiragana = mongoose.model('Hiragana');

const findByID = require('../middleware/findById');
const findAll = require('../middleware/findAll');
const countAll = require('../middleware/countAll');

router.get('/', findAll(Hiragana), hiraganaController.getAll);
router.get('/random', hiraganaController.getRandom);
router.get('/:id', findByID(Hiragana), hiraganaController.getOne);


// router.post('/', hiraganaController.post);


module.exports = router;