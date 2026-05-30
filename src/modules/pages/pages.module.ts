import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { PagesService } from './page.service';

@Module({
  controllers: [PagesController],
  providers: [PagesService],
})
export class PagesModule {}