import express from "express";
import morgan from "morgan";
import users from "./routes/users.routes";
const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", users);

export default app;