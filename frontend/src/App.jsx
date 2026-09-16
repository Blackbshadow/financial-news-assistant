import React, { useState } from "react";
import "../styles.css";
import { explainNews } from "./api";
import NewsInput from "./components/NewsInput";
import ResultBox from "./components/ResultBox";
import ImpactBadge from "./components/ImpactBadge";
import SentimentBadge from "./components/SentimentBadge";

function App() {
  const [newsText, setNewsText] = useState("");
  const [explanation, setExplanation] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [impactLevel, setImpactLevel] = useState("");
  const [sentiment, setSentiment] = useState("");

  const handleExplain = async () => {
    if (!newsText.trim()) return;

    setLoading(true);
    setStatus("Explaining the news...");
    setExplanation("");
    setImpactLevel("");
    setSentiment("");

    try {
      const result = await explainNews(newsText);
      setExplanation(typeof result === "object" ? result.explanation : result);
      if (result && result.sentiment) {
        setSentiment(result.sentiment);
      }

      const len = newsText.length;
      if (len < 400) setImpactLevel("low");
      else if (len < 1500) setImpactLevel("medium");
      else setImpactLevel("high");

      setStatus("");
    } catch (err) {
      console.error(err);
      setStatus("Error talking to assistant.");
      setExplanation(err.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Finance News Assistant</h1>
        <p>Paste financial news and get a simple explanation.</p>
      </header>

      <NewsInput
        value={newsText}
        onChange={setNewsText}
        onSubmit={handleExplain}
        loading={loading}
      />

      {status && <div className="status-text">{status}</div>}

      <div className="badges-container">
        <ImpactBadge level={impactLevel} />
        <SentimentBadge sentiment={sentiment} />
      </div>

      <ResultBox explanation={explanation} />
    </div>
  );
}

export default App;
