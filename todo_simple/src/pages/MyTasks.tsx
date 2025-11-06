import { TaskForm } from "@/components/tasks/TaskForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const MyTasks = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <h3>All Tasks</h3>

        {/* Task Form */}
        <Dialog>
          <DialogTrigger className="bg-black text-white py-2 px-4 rounded-sm cursor-pointer">
            Create Task
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-3">Add New Task</DialogTitle>
              <TaskForm />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="p-2">
        <p>Task Listing</p>
      </div>
    </div>
  );
};
