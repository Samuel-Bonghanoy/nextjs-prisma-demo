import React from "react";
import { TaskType } from "@/types/task";

interface TaskProps {
  Task: TaskType;
}

export default function Task({ Task }: TaskProps) {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">Total Page Views</div>
        <div className="stat-value">89,400</div>
        <div className="stat-desc">21% more than last month</div>
      </div>
    </div>
  );
}
