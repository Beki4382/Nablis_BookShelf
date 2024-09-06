import { BookService } from "../service/book";
import { Request, Response } from 'express';

export class BookController{

    static async createBook(req: Request, res: Response) {
        try {
            const book = req.body;
            const newBook = await BookService.createBook(book);
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ message: (error as any).message });
        }
    }
    static async getAllBooks(req: Request, res: Response){
        try {
            const books = await BookService.getAllBooks();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({message: (error as any).message

    })};

    };

    static async getBook(req: Request, res: Response){
        try {
            const id = req.params.id;
            const book = await BookService.getBookById(id);
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({message: (error as any).message});
        }
    } ;  
    static async updateBook(req: Request, res: Response){
        try{
            const id = req.params.id;
            const book = req.body;
            const updatedBook = await BookService.updateBook(id, book);
            res.status(200).json(updatedBook);
        } catch (error) {
            res.status(500).json({message: (error as any).message});
        }

    };
    static async deleteBook(req: Request, res: Response){
        try {
            const id = req.params.id;
            const deletedBook = await BookService.deleteBook(id);
            res.status(200).json(deletedBook);
        } catch (error) {
            res.status(500).json({message: (error as any).message});
    };

    }};