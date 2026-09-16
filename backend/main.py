from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from explanations import explain_news  # no dot here
from news_processor import analyze_sentiment

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class NewsRequest(BaseModel):
    text: str

class ExplanationResponse(BaseModel):
    explanation: str
    sentiment: str = "Neutral"

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/api/explain", response_model=ExplanationResponse)
def explain_endpoint(payload: NewsRequest):
    try:
        if not payload.text.strip():
            return {"explanation": "No news text provided.", "sentiment": "Neutral"}
        result = explain_news(payload.text)
        sentiment = analyze_sentiment(payload.text)
        return {"explanation": result, "sentiment": sentiment}
    except Exception as e:
        print("ERROR in /api/explain:", repr(e))
        raise HTTPException(status_code=500, detail=str(e))
