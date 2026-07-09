import { useEffect, useState } from "react";
import { deleteTask, getTasks } from "../api/taskApi";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import TaskModal from "../components/TaskModal";
import FilterBar from "../components/FilterBar";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import type { Task } from "../types/task";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Filter states
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const data = await getTasks({
        status,
        priority,
        sortBy,
        order,
      });

      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [status, priority, sortBy, order]);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
  const result = await Swal.fire({
    title: "Delete Task?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#2563eb",
    cancelButtonColor: "#ef4444",
    confirmButtonText: "Yes, delete it",
    cancelButtonText: "Cancel",
  });

  if (!result.isConfirmed) return;

  try {
    await deleteTask(id);

    toast.success("Task deleted successfully!");

    fetchTasks();
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete task.");
  }
};

  if (loading) {
    return (
      <div className="p-8 text-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Task Management
          </h1>

          <p className="text-gray-500">
            Total Tasks: {tasks.length}
          </p>
        </div>

        <button
          onClick={() => {
            setEditingTask(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          + Create Task
        </button>
      </div>

      <FilterBar
        status={status}
        priority={priority}
        sortBy={sortBy}
        order={order}
        onStatusChange={setStatus}
        onPriorityChange={setPriority}
        onSortByChange={setSortBy}
        onOrderChange={(value) => setOrder(value as "asc" | "desc")}
      />

      <TaskModal
        isOpen={isModalOpen}
        title={editingTask ? "Edit Task" : "Create Task"}
        onClose={() => {
          setEditingTask(null);
          setIsModalOpen(false);
        }}
      >
        <TaskForm
          taskToEdit={editingTask}
          onTaskCreated={fetchTasks}
          onClose={() => {
            setEditingTask(null);
            setIsModalOpen(false);
          }}
        />
      </TaskModal>

      <TaskList
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;