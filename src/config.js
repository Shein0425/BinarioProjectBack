import { config } from "dotenv";

// Load environment variables from a .env file into process.env
config();

export default {
    // Configuration object for the database connection.
    host: process.env.host,        // The host where the database is located.
    database: process.env.db,      // The name of the database to connect to.
    user: process.env.user,        // The username for authenticating with the database.
    password: process.env.pass     // The password for authenticating with the database.
};
