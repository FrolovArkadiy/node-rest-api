import Sequelize from "sequelize";
import { IDBInterface } from "./index";

export interface IAddBookModel {
  title: string;
  info: string;
  authorId: number;
}

export interface IBookModel extends Sequelize.Model<IBookModel, IAddBookModel> {
  readonly id: number;
  title?: string;
  info: string;
  authorId: number;
}

export type BookModelStatic = typeof Sequelize.Model & {
  associate: (models: IDBInterface) => void;
} & (new (values?: {}, options?: Sequelize.BuildOptions) => IBookModel);

export const BookFactory = (
  sequelize: Sequelize.Sequelize
): BookModelStatic => {
  const Book = sequelize.define("books", {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    info: Sequelize.STRING,
    authorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'authors',
        key: 'id'
      }
    }
  }) as BookModelStatic;

  Book.associate = models => {
    Book.belongsTo(models.Author, { foreignKey: 'authorId', as: 'author' })
  }

  return Book;
};
