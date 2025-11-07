// components/TaskForm.tsx
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useTasks } from "../../context/tasksContext";

interface FormData {
  title: string;
  description: string;
}

export const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { addTask } = useTasks();

  const onSubmit = (formData: FormData) => {
    addTask(formData.title, formData.description);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          id="title"
          placeholder="Task title..."
          autoFocus
          className={`bg-gray-100 py-2 px-1 w-full border-none focus-within:outline-none rounded ${
            errors.title && "placeholder:text-red-500"
          }`}
          {...register("title", {
            required: "Title is required",
          })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        <textarea
          id="description"
          placeholder="Task description..."
          rows={5}
          className={`bg-gray-100 py-2 px-1 w-full border-none focus-within:outline-none rounded ${
            errors.description && "placeholder:text-red-500"
          }`}
          {...register("description", {
            required: "Description is required",
          })}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}

        <Button type="submit" className="cursor-pointer mt-5">
          Create Task
        </Button>
      </div>
    </form>
  );
};
