import express from "express";
import cors from "cors";
import morgan from "morgan";

import taskRoutes from "./routes/task.routes";
import { notFoundHandler } from "./middleware/notFound.middleware";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Task Management API is running 🚀",
  });
});



app.use("/api/tasks", taskRoutes);

// 404 handler
app.use(notFoundHandler);

// Global error handler 
app.use(errorHandler);

export default app;