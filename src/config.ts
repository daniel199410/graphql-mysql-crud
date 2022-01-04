import {config} from "dotenv";

config()

export const DB_USER_NAME = process.env.DB_USER_NAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_NAME = process.env.DB_NAME;
export const PORT = process.env.PORT || 3000;