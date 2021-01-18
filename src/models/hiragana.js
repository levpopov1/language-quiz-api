const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var HiraganaSchema = new Schema({
    jp: {
        type: String,
        required: true
    },
    en: {
        type: String,
        required: true
    },
    words:{
        jp: [String],
        en: [String]
    },
    type:{
        type: String,
        enum: ['consonant', 'vowel', 'monograph', 'diacritic', 'diagraph', 'diagraph with diacritic']
    }
});


module.exports = mongoose.model('Hiragana', HiraganaSchema, 'hiragana');