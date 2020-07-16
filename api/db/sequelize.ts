import createModels from "../models";

const database = createModels();

database.sequelize.sync();

export default database;