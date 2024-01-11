import Task from "@/components/Task";
import Image from "next/image";
import { db } from "@/db";
import { TaskType } from "@/types/task";
import { redirect } from "next/navigation";

export default async function Home() {
  const tasks = await db.task.findMany();

  async function createTask(formData: FormData) {
    // This needs to be a server action!
    "use server";

    // Check the user's inputs and make sure they're valid
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    // Create a new record in the database
    const snippet = await db.task.create({
      data: {
        title,
        content,
      },
    });

    // Redirect the user back to the root route
    redirect("/");
  }

  return (
    <>
      <form action={createTask} className="w-1/2 mx-auto mt-6">
        <h3 className="font-bold m-3">Create a Task</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border rounded p-2 w-full"
              id="title"
            />
          </div>

          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <textarea
              name="content"
              className="border rounded p-2 w-full"
              id="code"
            />
          </div>

          <button type="submit" className="rounded p-2 bg-blue-200">
            Create
          </button>
        </div>
      </form>
      );
      <div className="flex flex-col gap-5 mx-auto w-full h-full items-center ">
        {tasks.map((task) => (
          <Task Task={task as TaskType} key={task.id} />
        ))}
      </div>
    </>
  );
}
