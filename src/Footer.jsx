import { useState } from "react";

export default function Footer() {
  const [filter, setFilter] = useState("all");
  console.log("filter");

  return (
    <div className={`footer ${filter}`}>
      <span>{length} items left</span>
      <div className="filter">
        <span
          id="all"
          onClick={() => {
            setFilter("all");
          }}
        >
          All
        </span>
        <span id="active" onClick={() => setFilter("active")}>
          Active
        </span>
        <span id="completed" onClick={() => setFilter("completed")}>
          Completed
        </span>
      </div>
      <span className="clear-btn">Clear Completed</span>
    </div>
  );
}
