import { Module } from '@nestjs/common';
import { AppConfigModule } from './modules/config/config.module';
import { DatabaseModule } from './modules/database/database.module';
import { ControllersModule } from './modules/controller/controller.module';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    ControllersModule
  ],
  exports:[],
  controllers: [], 
  providers: [],
})
export class AppModule {}
