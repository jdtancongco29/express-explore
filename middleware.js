import { HttpStatusCode } from "axios";

export const errorHandler = (err, req, res, next) => {
    let errorMessage = err.message;

    console.error("Error: ", errorMessage);
    try {
        errorMessage = JSON.parse(errorMessage);
    } catch { }
    if (typeof errorMessage == "object") {
        return res
            .status(errorMessage.code)
            .json({ message: errorMessage.message });
    }
    return res.status(HttpStatusCode.InternalServerError).json({
        message: "Something Went Wrong!!",
    });
};

export const validateCategory = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(HttpStatusCode.NotFound).json({ message: "Invalid name" });
    }

    next();
};