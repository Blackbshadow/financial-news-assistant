import re
from llm_client import ask_llm

def clean_news_text(raw_text: str) -> str:
    text = raw_text.strip()
    return " ".join(text.split())

SENTIMENT_SYSTEM_PROMPT = (
    "You are a financial sentiment analyzer. "
    "Analyze the financial news and classify its market sentiment as strictly one of: "
    "Positive, Neutral, or Negative. "
    "Respond with only the single sentiment word: Positive, Neutral, or Negative."
)

def build_sentiment_prompt(news_text: str) -> str:
    return (
        "Analyze the market sentiment of the following financial news text:\n\n"
        f"{news_text}\n\n"
        "Determine if the overall sentiment is Positive, Neutral, or Negative.\n"
        "Respond with only one word: Positive, Neutral, or Negative."
    )

def parse_sentiment(response: str) -> str:
    cleaned = response.strip()
    match = re.search(r"\b(positive|neutral|negative)\b", cleaned, re.IGNORECASE)
    if match:
        word = match.group(1).lower()
        if word == "positive":
            return "Positive"
        elif word == "negative":
            return "Negative"
        elif word == "neutral":
            return "Neutral"
    return "Neutral"

def analyze_sentiment(raw_text: str) -> str:
    cleaned = clean_news_text(raw_text)
    prompt = build_sentiment_prompt(cleaned)
    response = ask_llm(SENTIMENT_SYSTEM_PROMPT, prompt)
    return parse_sentiment(response)
