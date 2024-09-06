import Book from "../model/book";

export class BookRepository{
    static async getAllBooks(){
        return await Book.find({});
    }
    static async getBookById(id: string){
        return await Book.findById(id);
    }
    static async createBook(book: any){
        return await Book.create(book);
    }
    static async updateBook(id: string, book: any){
        return  await Book.findByIdAndUpdate(id, book, {new: true});
}
    static async deleteBook(id: string){
        return await Book.findByIdAndDelete(id);
    }
}
