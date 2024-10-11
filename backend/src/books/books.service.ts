import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  private books: Book[] = [{
    title: 'Book 1',
    author: 'Author 1'
  },
  {
    title: 'Book 2',
    author: 'Author 2'
  },
  {
    title: 'Book 3',
    author: 'Author 3'
  }];

  async findAll() {
    return await this.books;
  }
}
