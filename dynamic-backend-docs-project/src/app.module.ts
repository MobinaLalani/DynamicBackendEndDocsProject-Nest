import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PagesModule } from './modules/pages/pages.module';
import { AppService } from './app.service';

@Module({
  imports: [PagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
