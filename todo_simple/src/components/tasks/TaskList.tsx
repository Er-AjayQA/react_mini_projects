// components/TaskList.tsx
import { useTasks } from "../../context/tasksContext";

export const TaskList = () => {
  const { tasks, deleteTask } = useTasks();

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks yet. Create your first task above!
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
        >
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-800">
                {task.title}
              </h3>
              <p className="text-gray-600 mt-2 whitespace-pre-wrap">
                {task.description}
              </p>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
