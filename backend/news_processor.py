def clean_news_text(raw_text: str) -> str:
    text = raw_text.strip()
    return " ".join(text.split())
