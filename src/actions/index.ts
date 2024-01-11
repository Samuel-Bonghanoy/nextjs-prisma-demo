"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function createTask(title: string, content: string) {
  "use server";
  const task = await db.task.create({
    data: {
      title,
      content,
    },
  });
  console.log(task);
}

export async function deleteTask(id: number) {
  const task = await db.task.delete({
    where: {
      id,
    },
  });
}
