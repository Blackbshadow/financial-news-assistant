import React from "react";

function NewsInput({ value, onChange, onSubmit, loading }) {
  return (
    <div>
      <textarea
        rows={10}
        placeholder="Paste the financial news here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <br />
      <button onClick={onSubmit} disabled={loading || !value.trim()}>
        {loading ? "Explaining..." : "Explain"}
      </button>
    </div>
  );
}

export default NewsInput;
