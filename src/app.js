import express from "express";
import morgan from "morgan";
import users from "./routes/users.routes";
import login from "./routes/login.routes";
const cors = require('cors');
const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", users);
app.use("/api/login", login);

export default app;