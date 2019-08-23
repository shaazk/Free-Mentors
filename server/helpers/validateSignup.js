import joi from '@hapi/joi';

const validateSignup = {
     validation (newUser) {
        const schema = {
            firstName: joi.string().regex(/^\S[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).required(),
            lastName: joi.string().regex(/^\S[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).required(),
            email: joi.string().regex(/[^@]+@[^\.]+\..+/).required(),
            password: joi.string().regex(/^[a-zA-Z]\w{3,14}$/).required(),
            address: joi.string().regex(/^\S[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).required(),
            bio: joi.string().regex(/^\S[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).required(),
            occupation: joi.string().regex(/^\S[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).required(),
            expertise: joi.string().regex(/^\S[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).required()
        };
        return joi.validate(newUser, schema);
    },
}
export default validateSignup;