import Book from './book.js';

const books = [
    new Book("1", "The Great Gatsby", "F. Scott Fitzgerald", "1925", 10.99),
    new Book("2", "1984", "George Orwell", "1949", 8.99),
];


export const getAllBooks = (req, res) => {
    console.log("Fetching all books");
    res.json(books);
};

export const getBookById = (req,res) => {
    const book_id = req.params.id;
    const foundBook = books.find(book => book.id === book_id);

    if (foundBook) {
        console.log("book found");
        res.json(foundBook); 
    } else {
        console.log("book id not found");
        res.status(404).send("Book not found"); 
    }
};

export const defaultWebsite = (req, res) => {
    console.log("books!");
    res.send('books!');
};

export const createNewBook = (req, res) => {
    const newBook = Book.fromJSON(req.body);
    if (newBook.id && newBook.title && newBook.author && newBook.price && newBook.publicationYear){

        books.push(newBook);
        console.log("New book added:", newBook.title);
        res.status(201).json(newBook);
    }
    else{
        console.log("missing some params or diffrent naming convesions");
        res.status(400).send("missing some params or diffrent naming convesions");
    }  
};

export const updateBook = (req,res) => {
    const bookId=req.params.id;
    const newBook=Book.fromJSON(req.body);
    const foundBook = books.find(book => book.id === bookId);

    if (foundBook){
        foundBook.title = newBook.title ?? foundBook.title;
        foundBook.author = newBook.author ?? foundBook.author;
        foundBook.price = newBook.price ?? foundBook.price;
        foundBook.publicationYear = newBook.publicationYear ?? foundBook.publicationYear;
        console.log(`Book id ${foundBook.id} updated successfully`);
        res.json({
            message: "Book updated successfully",
            data: foundBook
            });    
        }
    else{
        console.log("could'n find the book");
        res.status(404).send("could'n find the book");
    }
};

export const deleteBook = (req,res) => {
    const book_index=books.findIndex(book => book.id === req.params.id);
    if (book_index !== -1){
        books.splice(book_index,1);
        console.log("deleted the book");
        res.send('deleted the book');
    }
    else{
        console.log("could'n find the book");
        res.status(404).send('couldnt find the book');
    }
};

