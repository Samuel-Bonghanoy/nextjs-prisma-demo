"use client";

import React from "react";
import * as actions from "@/actions";
import { TaskType } from "@/types/task";
import { db } from "@/db";

interface TaskProps {
  Task: TaskType;
}

export default function Task({ Task }: TaskProps) {
  const { title, content, id } = Task;
  const deleteTask = () => actions.deleteTask(id);

  return (
    <div className="stats shadow bg-slate-500 text-black flex items-center px-3">
      <button onClick={deleteTask} className="btn btn-primary">
        Mark as done
      </button>
      <div className="stat">
        <div className="stat-title text-black">{title}</div>
        <div className="stat-desc text-black">{content}</div>
      </div>
    </div>
  );
}
