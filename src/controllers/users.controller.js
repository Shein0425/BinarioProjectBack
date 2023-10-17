import { getConnection } from "./../db/db";

// Get the list of users and send them to the routes
const getUserList = async (req, res) => {
    try {
        const connect = await getConnection();
        const result = await connect.query("SELECT idusers, fname, lname, email FROM users");
        res.json({ errors: "False", result: result });
    } catch (error) {
        res.status(500).json({ errors: "True", message: error.message });
    }
};

// Get the list of users and send them to the routes
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const connect = await getConnection();
        const result = await connect.query("SELECT idusers, fname, lname, email FROM users WHERE idusers = ?", id);
        res.json({ errors: "False", result: result });
    } catch (error) {
        res.status(500).json({ errors: "True", message: error.message });
    }

};

// Get a specific user by ID and send them to the routes
const newUser = async (req, res) => {
    try {
        const { fname, lname, email } = req.body;
        const user = { fname, lname, email }
        if (fname === undefined || lname === undefined || email === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
        };
        const connect = await getConnection();
        await connect.query("INSERT INTO users SET ?", user);
        res.json({ errors: "False", message: "User created successfully!" });
    }
    catch (error) {
        res.status(500).json({ errors: "True", message: error.message });
    }
};

// Create a new user and send them to the routes
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { fname, lname, email } = req.body;
        const user = { fname, lname, email }
        if (id === undefined || fname === undefined || lname === undefined || email === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
        };
        const connect = await getConnection();
        await connect.query("UPDATE users SET ? WHERE idusers = ?", [user, id]);
        res.json({ errors: "False", message: "User update successfully!" });
    } catch (error) {
        res.status(500).json({ errors: "True", message: error.message });
    }

};

// Delete users and send the result to the routes
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const connect = await getConnection();
        await connect.query("DELETE FROM users WHERE idusers = ?", id);
        res.json({ errors: "False", message: "User delete successfully!" });
    } catch (error) {
        res.status(500).json({ errors: "True", message: error.message });
    }

};

export const methods = {
    getUserList,
    getUser,
    newUser,
    updateUser,
    deleteUser
};