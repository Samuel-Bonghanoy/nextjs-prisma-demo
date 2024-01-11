"use client";

import React from "react";
import * as actions from "@/actions";
import { TaskType } from "@/types/task";
import { redirect } from "next/navigation";

interface TaskProps {
  Task: TaskType;
}

export default function Task({ Task }: TaskProps) {
  const { title, content, id } = Task;

  const deleteTask = () => actions.deleteTask(id);

  return (
    <div className="stats shadow bg-slate-500 text-black flex items-center px-3">
      <form>
        <button onClick={deleteTask} className="btn btn-primary">
          Mark as done
        </button>
      </form>
      <div className="stat">
        <div className="stat-title text-black">{title}</div>
        <div className="stat-desc text-black">{content}</div>
      </div>
    </div>
  );
}
