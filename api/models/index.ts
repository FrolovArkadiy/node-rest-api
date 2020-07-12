import { Sequelize } from 'sequelize';
import {UserFactory, UserModelStatic} from "./user";
import {PostFactory, PostModelStatic} from "./post";

export interface IDBInterface {
    sequelize: Sequelize,
    User: UserModelStatic,
    Post: PostModelStatic,
}
const createModels = (): IDBInterface => {
    const database = 'testing';
    const user = 'admin123';
    const pass = 'admin123';
    const host = 'localhost';
    const port = 15432;
    const sequelize = new Sequelize(database, user, pass, {
        define: {
            charset: 'utf8'
        },
        dialect: "postgres",
        logging: false,
        host,
        port
    })

    sequelize
        .authenticate()
        .then(() => {
            console.info('DB. Connection has been established successfully.')
        })
        .catch((err: any) => {
            console.error('DB. Unable to connect to the database:', err)
        })
    const dbFactory: IDBInterface = {
        User: UserFactory(sequelize),
        Post: PostFactory(sequelize),
        sequelize
    };

    Object.keys(dbFactory).forEach((modelName) => {
        // @ts-ignore
        const model = dbFactory[modelName];

        if (model.associate) {
            model.associate(dbFactory)
        }

        if (model.hooks) {
            model.hooks(dbFactory)
        }
    });

    return dbFactory;
}

export default createModels