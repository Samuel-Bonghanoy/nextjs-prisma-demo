import Task from "@/components/Task";
import Image from "next/image";
import { db } from "@/db";
import { TaskType } from "@/types/task";

export default function Home() {
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

  const tasks = db.task.findFirst;

  return (
    <div>
      <Task Task={tasks} />
    </div>
  );
}
