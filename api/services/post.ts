import database from "../db/sequelize";
import {IAddPostModel, IPostModel} from "../models/post";

export default class PostService {
    static async postList(): Promise<IPostModel[]> {
        return database.Post.findAll();
    }

    static async createPost(post: IAddPostModel): Promise<any> {
        return database.Post.create(post);
    }

}