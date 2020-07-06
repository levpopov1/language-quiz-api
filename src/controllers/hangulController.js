const Hangul = require('../models/hangul');

function getAll(req, res){
    res.status(200).json(req.items);
}

function getOne(req, res){
    res.status(200).json(req.items);
}

async function getRandom(req, res, next){
    let rnd = Math.floor(Math.random() * req.params.count);
    try {
        let randomItem = await Hangul.findOne().skip(rnd);
        res.status(200).json(randomItem);
    } catch (error) {
        console.log("item:" , error);
        next(error);
    }   
}

async function post(req, res, next){
    try {
        const letter = await Hangul.create(req.body);
        return res.status(200).json(letter);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    getRandom,
    post
}