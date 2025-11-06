/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [tasks, setTasks] = useState([]);
  const [getTasks, setGetTasks] = useState(
    localStorage.getItem("user_tasks") || null
  );

  // Fetch Tasks From Local Storage
  const fetchLocalStorageTasks = () => {
    const task = localStorage.setItem("user_tasks", JSON.stringify(tasks));
    setGetTasks(task);
  };

  // Set Tasks To Local Storage
  const setLocalStorageTasks = () => {
    localStorage.setItem("user_tasks", JSON.stringify(tasks));
  };

  // Add Task and Set to local Storage
  const addTask = async (formData) => {
    try {
      const payload = { id: "", title: "", description: "" };
      setTasks((prev) => [...prev, payload]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLocalStorageTasks();
  }, [tasks.length]);

  useEffect(() => {
    setLocalStorageTasks();
    console.log(getTasks);
  }, [tasks.length]);

  return (
    <form onSubmit={handleSubmit(addTask)}>
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

        <textarea
          id="description"
          placeholder="Task description..."
          autoFocus
          rows={5}
          className={`bg-gray-100 py-2 px-1 w-full border-none focus-within:outline-none rounded ${
            errors.description && "placeholder:text-red-500"
          }`}
          {...register("description", {
            required: "Description is required",
          })}
        ></textarea>

        <Button className="cursor-pointer mt-5">Create Task</Button>
      </div>
    </form>
  );
};
