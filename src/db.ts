import {createConnection} from "typeorm";
import {User} from "./entities/user";

export const connectDB = async () => {
    await createConnection({
        type: 'mysql',
        username: 'dbmanager',
        password: 'password',
        port: 3306,
        host: 'localhost',
        database: 'USER',
        entities: [User],
        synchronize: false,
        ssl: false
    });
};