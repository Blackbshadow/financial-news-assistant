import React from "react";

function ImpactBadge({ level }) {
  if (!level) return null;

  let text = "";
  let className = "badge ";

  if (level === "low") {
    text = "Low Market Impact";
    className += "badge-low";
  } else if (level === "medium") {
    text = "Medium Market Impact";
    className += "badge-medium";
  } else if (level === "high") {
    text = "High Market Impact";
    className += "badge-high";
  }

  return (
    <div className="badge-container">
      <span className={className}>{text}</span>
    </div>
  );
}

<button onClick={onSubmit} disabled={loading || !value.trim()}>
  {loading ? "Explaining..." : "Explain"}
</button>


export default ImpactBadge;
