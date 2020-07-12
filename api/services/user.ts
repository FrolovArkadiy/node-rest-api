import database from "../db/sequelize";
import {IAddUserModel, IUserModel} from "../models/user";

export default class UserService {
    static async userList(): Promise<IUserModel[]> {
        return database.User.findAll()
    }

    static async createUser(user: IAddUserModel): Promise<any> {
        return database.User.create(user);
    }
}