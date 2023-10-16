import mysql from "promise-mysql";
import config from "./../config";

const connect = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password

});

const getConnection = () => {
    return connect;
};

module.exports = {
    getConnection
}