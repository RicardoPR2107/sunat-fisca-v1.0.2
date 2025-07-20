const loginValidation = {
    body: {
        code: {
            notEmpty: {
                errorMessage: 'El código es requerido'
            },
            trim: true
        },
        password: {
            notEmpty: {
                errorMessage: 'La contraseña es requerida'
            },
            trim: true
        }
    }
};

const validate = (req, res, next) => {
    const { errors } = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(400).json({
        success: false,
        message: errorMessages[0]
    });
};

module.exports = {
    loginValidation,
    validate
};
