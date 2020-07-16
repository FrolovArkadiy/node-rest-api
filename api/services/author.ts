import database from "../db/sequelize";
import { IAuthorModel, IAddAuthorModel } from '../models/author';

export default class AuthorService {
    static async authorList(): Promise<IAuthorModel[]> {
        return database.Author.findAll({
            include: [{
                model: database.Book,
                attributes: ['id']
            }]
        })
    }

    static async createAuthor(author: IAddAuthorModel): Promise<any> {
        return database.Author.create(author)
    }

    static async getAuthorById(id: number): Promise<IAuthorModel> {
        return database.Author.findByPk(id, {
            include: [{
                model: database.Book,
                attributes: ['id']
            }]
        })
    }
}