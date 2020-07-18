const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var HangulSchema = new Schema({
    kr: {
        type: String,
        required: true
    },
    en: {
        type: String,
        required: true
    },
    words:{
        kr: [String],
        en: [String]
    },
    type:{
        type: String,
        enum: ['consonant', 'vowel', 'double-consonant', 'double-vowel']
    }
});


module.exports = mongoose.model('Hangul', HangulSchema, 'hangul');