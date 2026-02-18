import React from "react";

function ResultBox({ explanation }) {
  if (!explanation) return null;
  return <div className="result-box">{explanation}</div>;
}

export default ResultBox;
