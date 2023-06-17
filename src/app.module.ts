import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { HealthModule } from './health/health.module'
import { LoggerModule } from 'nestjs-pino'
@Module({
  imports: [ConfigModule.forRoot(), LoggerModule.forRoot(), HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
