import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, updateTask } from "../api/taskApi";
import type { Task } from "../types/task";

interface TaskFormProps {
  onTaskCreated: () => void;
  onClose: () => void;
  taskToEdit?: Task | null;
}

interface FormData {
  title: string;
  description: string;
  status: "TODO" | "IN_PROGRESS" | "DONE";
  priority: "LOW" | "MEDIUM" | "HIGH";
  dueDate: string;
}

const TaskForm = ({
  onTaskCreated,
  onClose,
  taskToEdit,
}: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
      status: "TODO",
      priority: "MEDIUM",
      dueDate: "",
    },
  });

  useEffect(() => {
    if (taskToEdit) {
      reset({
        title: taskToEdit.title,
        description: taskToEdit.description || "",
        status: taskToEdit.status,
        priority: taskToEdit.priority,
        dueDate: taskToEdit.dueDate
          ? taskToEdit.dueDate.split("T")[0]
          : "",
      });
    } else {
      reset({
        title: "",
        description: "",
        status: "TODO",
        priority: "MEDIUM",
        dueDate: "",
      });
    }
  }, [taskToEdit, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        ...data,
        dueDate: data.dueDate
          ? new Date(data.dueDate).toISOString()
          : undefined,
      };

      if (taskToEdit) {
        await updateTask(taskToEdit.id, payload);
      } else {
        await createTask(payload);
      }

      reset();
      onTaskCreated();
      onClose();
    } catch (error) {
      console.error("Failed to save task:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <h2 className="text-xl font-bold">
        {taskToEdit ? "Edit Task" : "Create New Task"}
      </h2>

      <div>
        <input
          {...register("title", {
            required: "Title is required",
          })}
          placeholder="Task title"
          className="w-full border rounded p-2"
        />

        {errors.title && (
          <p className="text-red-500 text-sm">
            {errors.title.message}
          </p>
        )}
      </div>

      <textarea
        {...register("description")}
        placeholder="Description"
        className="w-full border rounded p-2"
      />

      <div className="grid grid-cols-3 gap-4">
        <select
          {...register("status")}
          className="border rounded p-2"
        >
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN PROGRESS</option>
          <option value="DONE">DONE</option>
        </select>

        <select
          {...register("priority")}
          className="border rounded p-2"
        >
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>

        <input
          type="date"
          {...register("dueDate")}
          className="border rounded p-2"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        {isSubmitting
          ? taskToEdit
            ? "Updating..."
            : "Creating..."
          : taskToEdit
          ? "Update Task"
          : "Create Task"}
      </button>
    </form>
  );
};

export default TaskForm;