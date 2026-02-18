from llm_client import ask_llm
from news_processor import clean_news_text

SYSTEM_PROMPT = (
    "You are a helpful financial news tutor. "
    "Explain news in simple English and briefly define financial terms."
)

def build_user_prompt(news_text: str) -> str:
    return (
        "Here is a financial news text:\n\n"
        f"{news_text}\n\n"
        "Tasks:\n"
        "1) Give a short summary (3-4 sentences) in simple English.\n"
        "2) Explain it like I am 15 years old.\n"
        "3) List 3-7 important financial terms from this news and explain each in one line.\n"
        "Use clear headings for each part."
    )

def explain_news(raw_text: str) -> str:
    cleaned = clean_news_text(raw_text)
    prompt = build_user_prompt(cleaned)
    return ask_llm(SYSTEM_PROMPT, prompt)