const Katakana = require('../models/katakana');
const _shuffle = require('lodash/shuffle');

function getAll(req, res){
    res.status(200).json(req.items);
}

function getOne(req, res){
    res.status(200).json(req.item);
}

async function getRandom(req, res, next){
    let limit = parseInt(req.query.limit);
    let results = [];
    let all = [];

    try {
        if(limit){
            results = await Katakana.aggregate().sample(limit);
            let numCompleteFills = Math.floor(limit / results.length);
            let numPartialFills = limit % results.length;
            for(let i=0; i<numCompleteFills; i++){
                all = all.concat(results);
            }
            all = all.concat(results.slice(0, numPartialFills));
            all = _shuffle(all);
        }
        else{
            all = await Katakana.aggregate().sample(1);
        }
        res.status(200).json(all);
    } catch (error) {
        console.log("item:" , error);
        next(error);
    }   
}

async function post(req, res, next){
    try {
        const letter = await Katakana.create(req.body);
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