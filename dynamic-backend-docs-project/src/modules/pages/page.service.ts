import { Injectable } from '@nestjs/common';

@Injectable()
export class PagesService {

  getPages() {
    return [
      {
        id: 1,
        slug: 'users',
        title: 'Users API',
      },
      {
        id: 2,
        slug: 'auth',
        title: 'Auth API',
      },
    ];
  }

  getPageBySlug(slug: string) {
    return {
      id: 1,
      slug,
      title: 'Users API',
      components: [
        {
          type: 'heading',
          text: 'Users List',
        },
        {
          type: 'table',
          columns: [
            {
              title: 'Id',
              field: 'id',
            },
            {
              title: 'Name',
              field: 'name',
            },
          ],
        },
      ],
    };
  }
}