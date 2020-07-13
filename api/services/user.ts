import database from "../db/sequelize";
import {IAddUserModel, IUserModel} from "../models/user";

export interface IUserListWithCount {
    count: number,
    rows: IUserModel[]
}

export default class UserService {
    static async userList(): Promise<IUserListWithCount> {
        return database.User.findAndCountAll({
            include: [{
                model: database.Post,
                attributes: ['id']
            }],
            distinct: true
        })
    }

    static async createUser(user: IAddUserModel): Promise<any> {
        return database.User.create(user);
    }
}