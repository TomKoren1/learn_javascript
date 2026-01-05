import * as BookController from './bookController.js';
import express from 'express';

const app = express();
const PORT = 3000;
app.use(express.json());


app.get('/', BookController.defaultWebsite);
app.get('/books' , BookController.getAllBooks);
app.get('/books/:id' , BookController.getBookById);
app.post('/books', BookController.createNewBook);
app.put('/books/:id', BookController.updateBook);
app.delete('/books/:id', BookController.deleteBook);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});