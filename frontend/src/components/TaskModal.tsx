import type { ReactNode } from "react";

interface TaskModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const TaskModal = ({
  isOpen,
  title,
  onClose,
  children,
}: TaskModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl font-bold text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">
          {title}
        </h2>

        {children}

      </div>
    </div>
  );
};

export default TaskModal;