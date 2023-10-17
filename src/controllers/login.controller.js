import { getConnection } from "./../db/db";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Function to handle user login
const login = async (req, res) => {
    try {
        // Extract email and password from the request body
        const { email, password } = req.body;
        const login = { email, password }

        // Check if email or password are missing
        if (email === undefined || password === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
        };

        // Establish a database connection
        const connect = await getConnection();

        // Query the database for a user with the provided email
        const result = await connect.query(`SELECT * FROM staff WHERE email = ?`, [email]);

        // Check if a user with the provided email exists
        if (result.length > 0) {
            // Retrieve the password hash from the database
            const passwordFromDatabase = result[0].pass;

            // Compare the provided password with the stored hash
            bcrypt.compare(password, passwordFromDatabase, (err, passwordMatch) => {
                if (err) {
                    return res.status(500).json({ errors: "True", message: err.message });
                }

                // If the passwords match, generate a JSON Web Token (JWT)
                if (passwordMatch) {
                    const token = jwt.sign({
                        email: email
                    }, process.env.SECRET_KEY || 'luis123');

                    // Send the token as a response
                    res.json({ errors: "False", token: token });
                } else {
                    // If passwords do not match, send an error response
                    res.json({ errors: "True", message: "Invalid password" });
                }
            });
        } else {
            // If the user with the provided email is not found, send an error response
            res.json({ errors: "True", message: "User not found" });
        }
    }
    catch (error) {
        // Handle any unexpected errors
        res.status(500).json({ errors: "True", message: error.message });
    }
};

// Export the login method as part of the 'methods' object
export const methods = {
    login
};
