import React from "react";

function SentimentBadge({ sentiment }) {
  if (!sentiment) return null;

  let text = "";
  let className = "badge ";

  const normalized = sentiment.toLowerCase();
  if (normalized === "positive") {
    text = "Positive Sentiment";
    className += "badge-positive";
  } else if (normalized === "neutral") {
    text = "Neutral Sentiment";
    className += "badge-neutral";
  } else if (normalized === "negative") {
    text = "Negative Sentiment";
    className += "badge-negative";
  } else {
    return null;
  }

  return (
    <div className="badge-container">
      <span className={className}>{text}</span>
    </div>
  );
}

export default SentimentBadge;
