import prisma from "../config/prisma";
import { Prisma } from "@prisma/client";


export const getAllTasks = async (
  status?: string,
  priority?: string,
  sortBy?: string,
  order: "asc" | "desc" = "desc"
) => {
  const where: Prisma.TaskWhereInput = {};

  if (status) {
    where.status = status as Prisma.TaskStatus;
  }

  if (priority) {
    where.priority = priority as Prisma.TaskPriority;
  }

   const query: Prisma.TaskFindManyArgs = {
  where,
  orderBy: sortBy
    ? { [sortBy]: order }
    : { createdAt: "desc" },
};
 return prisma.task.findMany(query);
};

export const createTask = async (data: Prisma.TaskCreateInput) => {
  return prisma.task.create({
    data,
  });
};

export const getTaskById = async (id: string) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const updateTask = async (
  id: string,
  data: Prisma.TaskUpdateInput
) => {
  return prisma.task.update({
    where: { id },
    data,
  });
};

export const deleteTask = async (id: string) => {
  return prisma.task.delete({
    where: {
      id,
    },
  });
};