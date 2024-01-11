import Task from "@/components/Task";
import Image from "next/image";
import { db } from "@/db";
import { TaskType } from "@/types/task";

export default async function Home() {
  const tasks = await db.task.findMany();

  return (
    <div className="flex flex-col gap-5 mx-auto w-full h-full items-center justify-center">
      {tasks.map((task) => (
        <Task Task={task as TaskType} key={task.id} />
      ))}
    </div>
  );
}
