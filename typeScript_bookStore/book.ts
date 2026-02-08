import { BookData } from "./types";

export default class Book implements BookData {
    constructor(
        public id: string,
        public title: string,
        public author: string,
        public publicationYear: string,
        public price: number
    ) {}

    static fromJSON(json: any): Book {
        return new Book(
            json.id,
            json.Title,
            json.Author,
            json.Publication_Year,
            parseFloat(json.Price)
        );
    }
}