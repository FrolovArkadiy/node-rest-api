import Sequelize from "sequelize";
import { IDBInterface } from "./index";

export interface IAddPostModel {
  title: string;
  text: string;
  date: Date;
}

export interface IPostModel extends Sequelize.Model<IPostModel, IAddPostModel> {
  readonly id: number;
  title?: string;
  text: string;
  date: Date;
}

export type PostModelStatic = typeof Sequelize.Model & {
  associate: (models: IDBInterface) => void;
} & (new (values?: {}, options?: Sequelize.BuildOptions) => IPostModel);

export const PostFactory = (
  sequelize: Sequelize.Sequelize
): PostModelStatic => {
  const Post = sequelize.define("posts", {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    text: Sequelize.STRING,
  }) as PostModelStatic;

  return Post;
};
