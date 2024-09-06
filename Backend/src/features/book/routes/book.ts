import { Router } from "express";
const router = Router()
import { BookController } from "../controller/book";


router.get('/', BookController.getAllBooks);
router.post('/', BookController.createBook);
router.get('/:id', BookController.getBook);
router.patch('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

export default router;