const express = require('express');
const router = express.Router();
const { genericErrorHandler } = require('../middleware/errorHandlers');
// route handlers for separate endpoints
const hagulRouter = require('./hangulRouter');
const hiraganaRouter = require('./hiraganaRouter');
const katakanaRouter = require('./katakanaRouter');

router.use('/hangul', hagulRouter);
router.use('/hiragana', hiraganaRouter);
router.use('/katakana', katakanaRouter);

// if none of the above routes handle the request if will error out here
router.use(genericErrorHandler);

module.exports = router;