import "dotenv/config";
import express from "express";
import { logger } from "./src/middleware/loggerMiddleware";

import { getAllMovies, getMovie, postMovie } from "./src/controller/movies";

const app = express();
const port = process.env.PORT || 3030;

// Middleware stack
app.use(logger);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/movies", getAllMovies);
app.get("/novies/:id", getMovie);
app.post("/movies", postMovie);

const startServer = async (): Promise<void> => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

const shutdown = async (signal: string): Promise<void> => {
  console.log(`${signal} received, shutting down gracefully...`);
  try {
    process.exit(0);
  } catch (error) {
    console.error("Error during shutdown:", error);
    process.exit(1);
  }
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

startServer();
