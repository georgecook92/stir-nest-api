import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { ConfigModule } from './modules/config/config.module';
import { ConfigService } from './modules/config/config.service';
import { AccountAppModule } from './modules/account/account.app.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: config.databaseConnection,
          host: config.databaseHost,
          port: config.databasePort,
          username: config.databaseUsername,
          password: config.databasePassword,
          database: config.databaseName,
          entities: [config.databaseEntities],
          migrations: [config.databaseMigrations],
          synchronize: config.databaseSynchronize,
          logging: config.databaseLogging,
        } as PostgresConnectionOptions;
      },
    }),
    AccountAppModule,
  ],
})
export class AppModule {}
