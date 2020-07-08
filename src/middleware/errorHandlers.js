function notFound(req, res, next){
    res.status(404).json({
        statusCode: 404,
        message: "Not found"
    });
}

function genericErrorHandler(err, req, res, next) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        statusCode: statusCode,
        message: `${err}`,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

module.exports = {
    notFound,
    genericErrorHandler,
};