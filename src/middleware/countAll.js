module.exports = function(Model){
    return async function(req, res, next){
        try {
            req.params.count = await Model.countDocuments({});
            next();
        } catch (error) {
            next(error);
        }
    };
};
