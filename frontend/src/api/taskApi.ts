import api from "./axios";
import type { Task } from "../types/task";

export interface CreateTaskData {
  title: string;
  description?: string;
  status?: "TODO" | "IN_PROGRESS" | "DONE";
  priority?: "LOW" | "MEDIUM" | "HIGH";
  dueDate?: string;
}

export interface TaskFilters {
  status?: string;
  priority?: string;
  sortBy?: string;
  order?: "asc" | "desc";
}

export const getTasks = async (filters: TaskFilters): Promise<Task[]> => {
  const response = await api.get("/tasks", { params: Object.fromEntries(
  Object.entries(filters ?? {}).filter(
    ([, value]) => value !== ""
  )
),});
  return response.data;
};

export const createTask = async (
  task: CreateTaskData
): Promise<Task> => {
  const response = await api.post("/tasks", task);
  return response.data;
};

export const updateTask = async (
  id: string,
  task: Partial<CreateTaskData>
): Promise<Task> => {
  const response = await api.put(`/tasks/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};