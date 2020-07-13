import Sequelize from "sequelize";
import { IDBInterface } from "./index";

export interface IAddUserModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface IUserModel extends Sequelize.Model<IUserModel, IAddUserModel> {
  readonly id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postId?: number[];
}

export type UserModelStatic = typeof Sequelize.Model & {
  associate: (models: IDBInterface) => void;
} & (new (values?: {}, options?: Sequelize.BuildOptions) => IUserModel);

export const UserFactory = (
  sequelize: Sequelize.Sequelize
): UserModelStatic => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    phone: Sequelize.STRING,
  }) as UserModelStatic;

  User.associate = (models) => {
    User.hasMany(models.Post);
  };

  return User;
};
