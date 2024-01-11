import Task from "@/components/Task";
import Image from "next/image";
import { db } from "@/db";
import { TaskType } from "@/types/task";
import { createTask } from "@/actions";

export default async function Home() {
  const tasks = await db.task.findMany();
  // createTask("hi", "hello");

  return (
    <div className="flex flex-col gap-5 mx-auto w-full h-full items-center justify-center">
      {tasks.map((task) => (
        <Task Task={task as TaskType} key={task.id} />
      ))}
    </div>
  );
}
