import Task from "@/components/Task";
import Image from "next/image";
import { db } from "@/db";
import { TaskType } from "@/types/task";

export default async function Home() {
  async function createTask() {
    "use server";
    const task = await db.task.create({
      data: {
        title: "Do this shit",
        content: "Do that shit",
      },
    });
    console.log(task);
  }

  const task = await db.task.findFirst();
  console.log(task);

  return (
    <div className="flex mx-auto w-full h-full items-center justify-center">
      <Task Task={task as TaskType} />
    </div>
  );
}
