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
                model: database.Book,
                attributes: ['id']
            }],
            distinct: true
        })
    }

    static async createUser(user: IAddUserModel): Promise<any> {
        return database.User.create(user);
    }

    static async getUserById(id: number): Promise<IUserModel> {
        return database.User.findByPk(id, {
            include: [{
                model: database.Book,
                attributes: ['id']
            }]
        });
    }

    static async updateUser(id: number, user: IAddUserModel): Promise<IUserModel> {
        return database.User.update(user, { where: { id } })
            .then(() => UserService.getUserById(id))
    }
}