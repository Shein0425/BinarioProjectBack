import { listen } from "express/lib/application";
import app from "./app"

/**
 * A function to start the Express.js server.
 * It listens on the port specified in the application configuration.
 */
const startServer = () => {
  app.listen(app.get("port"));
  console.log(`Server is running on port: ${app.get("port")}`);
};

// Start the server
startServer();
