module.exports = function(Model){
    return function(req, res, next){
        Model.find({}, function(err, items){
            if(err){
                res.json(err);
            }
            else{
                req.items = items;
                next();
            }
        });
    };
};
