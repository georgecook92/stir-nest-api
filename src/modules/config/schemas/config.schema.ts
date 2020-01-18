import * as Joi from 'joi';

const configSchema: Joi.ObjectSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(['development', 'production', 'test', 'provision', 'local'])
    .required(),
  HOST: Joi.string().required(),
  PORT: Joi.number().required(),
  TYPEORM_CONNECTION: Joi.string().required(),
  TYPEORM_ENTITIES: Joi.string().required(),
  TYPEORM_LOGGING: Joi.boolean().required(),
  TYPEORM_MIGRATIONS: Joi.string().required(),
  TYPEORM_SYNCHRONIZE: Joi.boolean().required(),
  TYPEORM_HOST: Joi.string().required(),
  TYPEORM_PORT: Joi.number().required(),
  TYPEORM_DATABASE: Joi.string().required(),
  TYPEORM_USERNAME: Joi.string()
    .allow('')
    .optional(),
  TYPEORM_PASSWORD: Joi.string()
    .allow('')
    .optional(),
  SWAGGER_PATH: Joi.string().required(),
}).unknown(true);

export default configSchema;
