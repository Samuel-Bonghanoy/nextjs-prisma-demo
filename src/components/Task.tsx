"use client";

import React from "react";
import { TaskType } from "@/types/task";
import { db } from "@/db";

interface TaskProps {
  Task: TaskType;
}

export default function Task({ Task }: TaskProps) {
  return (
    <div className="stats shadow bg-slate-500 text-black flex items-center px-3">
      <button className="btn btn-primary">Mark as done</button>
      <div className="stat">
        <div className="stat-title text-black">{Task.title}</div>
        <div className="stat-desc text-black">{Task.content}</div>
      </div>
    </div>
  );
}
