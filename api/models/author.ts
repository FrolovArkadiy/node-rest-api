import Sequelize from "sequelize";
import { IDBInterface } from "./index";

export interface IAddAuthorModel {
    firstName: string;
    lastName: string;
    info: string;
    birthday: Date
}

export interface IAuthorModel extends Sequelize.Model<IAuthorModel, IAddAuthorModel> {
    readonly id: number;
    firstName: string;
    lastName: string;
    info: string;
    birthday: Date
    bookIds?: Array<{id: number}>
}

export type AuthorModelStatic = typeof Sequelize.Model & {
    associate: (models: IDBInterface) => void;
} & (new (values?: {}, options?: Sequelize.BuildOptions) => IAuthorModel);

export const AuthorFactory = (
    sequelize: Sequelize.Sequelize
): AuthorModelStatic => {
    const Author = sequelize.define('authors', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        info: Sequelize.STRING,
        birthday: Sequelize.DATE
    }) as AuthorModelStatic;

    Author.associate = (models: IDBInterface) => {
        Author.hasMany(models.Book);
    }

    return Author;
}