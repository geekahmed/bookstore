const Joi = require('@hapi/joi');

const registerValidation =  (data) => {
    const schema = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required()
    });

    return  schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    return schema.validate(data);
}

const bookValidation = data => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string(),
        author: Joi.string().required(),
        isbn: Joi.string().required()
    });

    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.bookValidation = bookValidation;