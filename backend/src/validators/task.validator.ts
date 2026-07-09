import { z } from "zod";

const statusEnum = z.enum(["TODO", "IN_PROGRESS", "DONE"]);
const priorityEnum = z.enum(["LOW", "MEDIUM", "HIGH"]);

export const createTaskSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  status: statusEnum.optional(),
  priority: priorityEnum.optional(),
  dueDate: z.string().datetime().optional(),
});

export const updateTaskSchema = createTaskSchema.partial();