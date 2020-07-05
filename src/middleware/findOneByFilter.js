module.exports = function(Model, filter = []){
    return function(req, res, next){
        // maps filter array to object with array items as keys and request.body items with same name as values
        var searchFilter = filter.reduce(function(accumulator, currentValue){
            return accumulator[currentValue]=req.body[currentValue], accumulator;
        }, {});
        // searches the model for matching records and puts them onto the request object
        Model.findOne(searchFilter, function(err, item){
            if(err){
                res.json(err);
            }
            else{
                req.item = item;
                console.log(item);
                next();
            }
        });
    };
};
