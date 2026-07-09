import type { Task } from "../types/task";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const TaskList = ({
  tasks,
  onEdit,
  onDelete,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No tasks found.
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;