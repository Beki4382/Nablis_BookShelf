import {BookRepository} from '../repository/book';
export class BookService {

  static async getAllBooks(){
    return await BookRepository.getAllBooks();
  }

  static async getBookById(id: string) {
    return await BookRepository.getBookById(id);

  }
static async createBook(book: any) {
    return await BookRepository.createBook(book);
  }
static async updateBook(id: string, book: any) {
    return await BookRepository.updateBook(id, book);
  }
static async deleteBook(id: string) {
    return await BookRepository.deleteBook(id);
  }
}