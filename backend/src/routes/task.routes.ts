import { Router } from "express";
import {
  getTasks,
  createTask,getTaskById, updateTask,deleteTask
} from "../controllers/task.controller";
import { validate } from "../middleware/validate.middleware";
import { createTaskSchema,updateTaskSchema} from "../validators/task.validator";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);


router.post(
  "/",
  validate(createTaskSchema),
  createTask
);

router.put(
  "/:id",
  validate(updateTaskSchema),
  updateTask
);

router.delete("/:id", deleteTask);

export default router;