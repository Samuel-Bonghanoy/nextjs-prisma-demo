import React from "react";
import { TaskType } from "@/types/task";

interface TaskProps {
  Task: TaskType;
}

export default function Task({ Task }: TaskProps) {
  console.log(Task);

  return (
    <div className="stats shadow bg-slate-500 text-black">
      <div className="stat">
        <div className="stat-title text-black">{Task.title}</div>
        <div className="stat-desc text-black">{Task.content}</div>
      </div>
    </div>
  );
}
