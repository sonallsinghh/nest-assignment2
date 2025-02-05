import { Module } from '@nestjs/common';
import { AppController } from '../Auth/auth.controller';
import { AppService } from '../Auth/auth.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
