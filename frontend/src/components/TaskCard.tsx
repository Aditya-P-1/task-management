import type { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const statusColors = {
  TODO: "bg-yellow-100 text-yellow-800",
  IN_PROGRESS: "bg-blue-100 text-blue-800",
  DONE: "bg-green-100 text-green-800",
};

const priorityColors = {
  LOW: "bg-gray-100 text-gray-800",
  MEDIUM: "bg-orange-100 text-orange-800",
  HIGH: "bg-red-100 text-red-800",
};

const TaskCard = ({ task, onEdit, onDelete }: TaskCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 transition hover:shadow-lg">

      <div className="flex justify-between items-start mb-3">
        <h2 className="text-lg font-bold">
          {task.title}
        </h2>

        <div className="flex gap-2">

          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[task.status]}`}
          >
            {task.status}
          </span>

          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${priorityColors[task.priority]}`}
          >
            {task.priority}
          </span>

        </div>
      </div>

      <p className="text-gray-600 mb-5 min-h-[60px]">
        {task.description || "No description"}
      </p>

      <div className="flex justify-between items-center text-sm text-gray-500 mb-5">

        <span>
          📅{" "}
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No Due Date"}
        </span>

      </div>

      <div className="flex gap-3">

        <button
          onClick={() => onEdit(task)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg py-2"
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default TaskCard;