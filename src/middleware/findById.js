module.exports = function(Model){
    return function(req, res, next){
        Model.findById(req.params.id, function(err, item){
            if(err){
                res.json(err);
            }
            else{
                req.item = item;
                next();
            }
        });
    };
};
