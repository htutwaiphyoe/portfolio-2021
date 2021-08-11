import AppError from "@/utils/appError";

const handleDevError = (err, res) => {
    res.status(err.statusCode).json({
        status: err.statusText,
        name: err.name,
        message: err.message,
        error: err,
        stack: err.stack,
    });
};

const handleProdError = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.statusText,
            message: err.message,
        });
    } else {
        res.status(500).json({
            status: "error",
            message: "Oops! Something went very wrong.",
        });
    }
};

const handleValidationError = (err) => {
    const message = Object.values(err.errors)
        .map((key) => key.message)
        .join(". ");

    return new AppError(message, 400);
};
export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.statusText = err.statusText || "error";
    if (process.env.NODE_ENV === "development") {
        // if (err.name === "ValidationError") {
        //     handleProdError(handleValidationError(err), res);
        // }
        handleDevError(err, res);
    } else {
        if (err.name === "ValidationError") {
            handleProdError(handleValidationError(err), res);
        } else {
            handleProdError(err, res);
        }
    }
};
