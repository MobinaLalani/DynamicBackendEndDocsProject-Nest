import { Controller, Get, Param } from '@nestjs/common';
import { PagesService } from './page.service';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Get()
  getPages() {
    return this.pagesService.getPages();
  }

  @Get(':slug')
  getPageBySlug(@Param('slug') slug: string) {
    return this.pagesService.getPageBySlug(slug);
  }
}