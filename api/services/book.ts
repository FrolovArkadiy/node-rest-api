import database from "../db/sequelize";
import {IAddBookModel, IBookModel} from "../models/book";

export default class BookService {
    static async bookList(): Promise<IBookModel[]> {
        return database.Book.findAll();
    }

    static async createBook(book: IAddBookModel): Promise<any> {
        return database.Book.create(book);
    }

    static async getBookById(id: number): Promise<IBookModel> {
        return database.Book.findByPk(id);
    }

    static async updateBook(id: number, book: IBookModel): Promise<any> {
        return database.Book.update(book, { where: { id } })
            .then(() => BookService.getBookById(id))
    }
}