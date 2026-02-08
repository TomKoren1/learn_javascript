export default class Book {
    constructor(id, title, author, publicationYear, price){
        this.id=id;
        this.title=title;
        this.author=author;
        this.publicationYear=publicationYear;
        this.price=price;
    }
    static fromJSON(json){
        return new Book(json.id,json.Title,json.Author,json.Publication_Year,Number(json.Price));
    }
    toJSON(){
        return {
            "id": this.id,
            "Title": this.title,
            "Author": this.author,
            "Publication_Year": this.publicationYear,
            "Price": Number(this.price)
        };
    }
   
    toString(){
        return `id: ${this.id} | Title: ${this.title} | Author: ${this.author} |publicationYear: ${this.publicationYear} | Price: ${this.price}`;
    }
}