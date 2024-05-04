
const { constants } = require("./utils/constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack })
            // only show stacktrace in dev
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized", message: err.message, stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack })
            break;
        case constants.FORBIDDERN:
            res.json({ title: "Forbidden", message: err.message, stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack })
            break;
        case constants.FORBIDDERN:
            res.json({ title: "Server Error", message: err.message, stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack })
            break;
        default:
            console.log("No Error, All good!")
    }
}

module.exports = errorHandler;