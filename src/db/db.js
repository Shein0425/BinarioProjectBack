import mysql from "promise-mysql";
import config from "./../config";

// Create a connection pool with the configuration from the 'config' module
const connect = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password

});


// Get a connection from the connect
const getConnection = () => {
    return connect;
};

module.exports = {
    getConnection
}