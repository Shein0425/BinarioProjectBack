import { getConnection } from "./../db/db";
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const login = { email, password }
        if (email === undefined || password === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
        };
        const connect = await getConnection();
        const result = await connect.query(`SELECT * FROM staff WHERE email = ?`, [email]);
        if (result.length > 0) {
            const passwordFromDatabase = result[0].pass;
            bcrypt.compare(password, passwordFromDatabase, (err, passwordMatch) => {
                if (err) {
                    return res.status(500).json({ errors: "True", message: err.message });
                }
                if (passwordMatch) {
                    res.json({ errors: "False", message: "Login successful" });
                } else {
                    res.json({ errors: "True", message: "Invalid password" });
                }
            });
        } else {
            res.json({ errors: "True", message: "User not found" });
        }
    }
    catch (error) {
        res.status(500).json({ errors: "True", message: error.message });
    }
};

export const methods = {
    login
};