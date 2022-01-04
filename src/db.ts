import {createConnection} from "typeorm";
import {User} from "./entities/user";
import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER_NAME} from "./config";

export const connectDB = async () => {
    await createConnection({
        type: 'mysql',
        username: DB_USER_NAME,
        password: DB_PASSWORD,
        port: Number(DB_PORT),
        host: DB_HOST,
        database: DB_NAME,
        entities: [User],
        synchronize: false,
        ssl: false
    });
};