import * as dotenv from 'dotenv';
import * as Joi from 'joi';

import configSchema from './schemas/config.schema';
import { EnvConfig } from './interfaces/env-config.interface';

export class ConfigService {
  private readonly envConfig: EnvConfig;
  constructor() {
    const config = dotenv.config({ path: process.env.ENV_FILE_PATH || '.env' });
    const combinedEnvVars = {
      ...config.parsed,
      ...process.env,
    };
    this.envConfig = this.validateInput(combinedEnvVars);
  }
  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      configSchema,
    );

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }

    return validatedEnvConfig;
  }
  get databaseConnection(): string {
    return this.envConfig.TYPEORM_CONNECTION;
  }

  get databaseHost(): string {
    return this.envConfig.TYPEORM_HOST;
  }

  get databasePort(): number {
    return Number(this.envConfig.TYPEORM_PORT);
  }

  get databaseName(): string {
    return this.envConfig.TYPEORM_DATABASE;
  }

  get databaseUsername(): string {
    return this.envConfig.TYPEORM_USERNAME;
  }

  get databasePassword(): string {
    return this.envConfig.TYPEORM_PASSWORD;
  }

  get env(): string {
    return this.envConfig.NODE_ENV;
  }

  get host(): string {
    return this.envConfig.HOST;
  }

  get port(): number {
    return +this.envConfig.PORT;
  }

  get databaseSynchronize(): boolean {
    return Boolean(this.envConfig.TYPEORM_SYNCHRONIZE);
  }

  get databaseLogging(): boolean {
    return Boolean(this.envConfig.TYPEORM_LOGGING);
  }

  get databaseEntities(): string {
    return this.envConfig.TYPEORM_ENTITIES;
  }

  get databaseMigrations(): string {
    return this.envConfig.TYPEORM_MIGRATIONS;
  }

  get swaggerPath(): string {
    return this.envConfig.SWAGGER_PATH;
  }

  get inProduction(): boolean {
    return this.envConfig.NODE_ENV === 'production';
  }

  get inLocal(): boolean {
    return this.envConfig.NODE_ENV === 'local';
  }
}
