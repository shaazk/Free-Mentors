import Joi from "@hapi/joi";
import Schemas from "../helpers/validation.helper";

export const validate = (req, res, next) => {
    // enabled HTTP methods for request data validation
    const _supportedMethods = ['post', 'put', 'patch'];
    const path = req.route.path;
    const method = req.method.toLowerCase();

    if (_supportedMethods.includes(method) && Schemas[path] != undefined) {
        // get schema for the current route
        const schema = Schemas[path];

        // Validate req.body using the schema and validation options
        return Joi.validate(req.body, schema, (error, data) => {
            if (error) {
                return res.status(400).send({'status' : 400,'error' : error.details[0].message});
            } else {
                // Replace req.body with the data after Joi validation
                //req.body = data;
                next();
            }
        });
    }
};