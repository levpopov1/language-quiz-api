module.exports = function(Model, options){
    return async function(req, res, next){
        try {
            req.params.count = await Model.countDocuments(options);
            next();
        } catch (error) {
            next(error);
        }
    };
};
