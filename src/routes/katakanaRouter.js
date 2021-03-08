const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const katakanaController = require('../controllers/katakanaController');
const Katakana = mongoose.model('Katakana');

const findByID = require('../middleware/findById');
const findAll = require('../middleware/findAll');
const countAll = require('../middleware/countAll');

router.get('/', findAll(Katakana), katakanaController.getAll);
router.get('/random', katakanaController.getRandom);
router.get('/:id', findByID(Katakana), katakanaController.getOne);


// router.post('/', katakanaController.post);


module.exports = router;