import {config} from "dotenv";

config();

export default{
    host: process.env.host,
    database: process.env.db,
    user: process.env.user,
    password: process.env.pass
};