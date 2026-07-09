import { Request, Response, NextFunction } from "express";
import * as taskService from "../services/task.service";

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    try {       
  const {
    status,
    priority,
    sortBy,
    order,
  } = req.query;

  const tasks = await taskService.getAllTasks(
    status as string | undefined,
    priority as string | undefined,
    sortBy as string | undefined,
    order as "asc" | "desc" | undefined
  );

  res.json(tasks);
    } catch (error) {
        next(error); 
    }
};

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const task = await taskService.createTask(req.body);

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    try {
  const { id } = req.params;

  const task = await taskService.getTaskById(id);

  if (!task) {
    res.status(404).json({
      success: false,
      message: "Task not found",
    });
    return;
  }

  res.json(task);
    } catch (error) {
        next(error);
    }
};


export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    try {
  const { id } = req.params;

  const existingTask = await taskService.getTaskById(id);

  if (!existingTask) {
    res.status(404).json({
      success: false,
      message: "Task not found",
    });
    return;
  }

  const updatedTask = await taskService.updateTask(id, req.body);

  res.json(updatedTask);
    } catch (error) {
        next(error);
    }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    try {
  const { id } = req.params;

  const existingTask = await taskService.getTaskById(id);

  if (!existingTask) {
    res.status(404).json({
      success: false,
      message: "Task not found",
    });
    return;
  }

  await taskService.deleteTask(id);

  res.status(204).send();
    } catch (error) {
        next(error);
    }
};