import {createConnection} from "typeorm";

export const connectDB = async () => {
    await createConnection({
        type: 'mysql',
        username: 'dbmanager',
        password: 'password',
        port: 3306,
        host: 'localhost',
        database: 'USER',
        entities: [],
        synchronize: false,
        ssl: false
    });
};