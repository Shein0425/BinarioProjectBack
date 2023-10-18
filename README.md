# Node.js and Express Backend for User Management

This is a Node.js and Express backend project for managing user data in a MySQL database. It provides a set of API endpoints for creating, retrieving, updating, and deleting user information. Additionally, it includes an authentication mechanism for user login using JSON Web Tokens (JWT).

## API Endpoints

### Get All Users

- **URL**: `GET /api/users`
- **Description**: Retrieve all users from the database.
- **Example Response**:

```json
{
    "errors": "False",
    "result": [
        {
            "idusers": 3,
            "fname": "Alice",
            "lname": "Johnson",
            "email": "alice.johnson@example.com"
        },
        {
            "idusers": 4,
            "fname": "Bob",
            "lname": "Smith",
            "email": "bob.smith@example.com"
        }
    ]
}
```

### Get a Single User

- **URL**: `GET /api/users/:iduser`
- **Description**: Retrieve a single user by their ID.
- **Example Response**:

```json
{
    "errors": "False",
    "result": {
        "idusers": 3,
        "fname": "Alice",
        "lname": "Johnson",
        "email": "alice.johnson@example.com"
    }
}
```

### Add User

- **URL**: `POST /api/users`
- **Description**: Add a new user to the database.
- **Example Request Body**:

```json
{
    "fname": "FirstName",
    "lname": "LastName",
    "email": "user@example.com"
}
```

### Edit User

- **URL**: `PUT /api/users/:iduser`
- **Description**: Update an existing user's information by their ID.
- **Example Request Body**:

```json
{
    "fname": "UpdatedFirstName",
    "lname": "UpdatedLastName",
    "email": "updateduser@example.com"
}
```

### Delete User

- **URL**: `DELETE /api/users/:iduser`
- **Description**: Delete a user from the database by their ID.

### User Login

- **URL**: `POST /api/login`
- **Description**: Authenticate a user's login using email and password. Returns a JWT token upon successful authentication.
- **Example Request Body**:

```json
{
    "email": "user@example.com",
    "password": "password123"
}
```

- **Example Responses**:

1. Success:

```json
{
    "errors": "False",
    "token": "your-jwt-token-here"
}
```

2. Incorrect Password:

```json
{
    "errors": "True",
    "message": "Invalid password"
}
```

3. User Not Found:

```json
{
    "errors": "True",
    "message": "User not found"
}
```

## Getting Started

To set up and run this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Shein0425/BinarioProjectBack.git
   ```

2. Navigate to the project directory:

   ```bash
   cd backend-project
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Configure the database connection in a `.env` file.

5. Start the server:

   ```bash
   npm run start
   ```
# .env File
# Database configuration

# MySQL host address (e.g., localhost)
DB_HOST=localhost

# Name of the MySQL database (e.g., binario_users)
DB_NAME=binario_users

# MySQL user (e.g., root)
DB_USER=root

# MySQL password (leave blank for no password)
DB_PASSWORD=

# Please upload the database to your MySQL server and configure the variables
# in this file to match your development environment.


## Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push your changes to your fork: `git push origin feature/your-feature`.
5. Create a Pull Request (PR) to merge your changes into the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need further assistance, please contact [luisqui300@gmail.com].
