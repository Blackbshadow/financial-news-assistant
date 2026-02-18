# Finance News Assistant

Finance News Assistant is a full‑stack web app that helps users understand confusing financial news.  
Paste any finance article or paragraph, and the assistant returns a clear explanation in simple language along with an estimate of its market impact.


## Features

1. Paste any financial news text into the app.
2. Clean, concise summary in plain English.
3. “Explain like I’m 15” section for easy understanding.
4. Key financial terms highlighted and explained in one line each.
5. Impact badge (Low / Medium / High) to indicate potential market impact.
6. Frontend–backend separation:
  - React + Vite frontend.
  - FastAPI backend calling a local LLM (Ollama).

---

## Tech Stack

**Frontend**

- React (with Vite)
- CSS (custom styles, no UI framework)

**Backend**

- FastAPI (Python)
- Pydantic for request/response models
- Ollama (local LLM) or OpenAI‑compatible API (optional)

---

## Project Structure

```text
financial-news-assistant/
├─ backend/
│  ├─ main.py            
│  ├─ explanations.py    
│  ├─ news_processor.py   
│  ├─ llm_client.py       
│  ├─ config.py           
│  ├─ requirements.txt    
│  └─ .env                
└─ frontend/
   ├─ index.html
   ├─ src/
   │   ├─ components/
   │   │   ├─ NewsInput.jsx
   │   │   ├─ ResultBox.jsx
   │   │   └─ ImpactBadge.jsx
   │   ├─ api.js
   │   ├─ App.jsx
   │   └─ main.jsx
   ├─ styles.css
   └─ package.json
```

#### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/financial-news-assistant.git
cd financial-news-assistant
```

#### 2. Backend setup (FastAPI)
--
Create and activate virtual environment:

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate  # Windows
# source .venv/bin/activate  # macOS/Linux
```
Install dependencies:

```bash
pip install -r requirements.txt
```
Configure LLM:

Using Ollama (recommended, local and free):

  Install Ollama from https://ollama.com.

  Pull a small model, for example:
  ```bash
  ollama pull llama3
  In llm_client.py, set MODEL_NAME = "llama3".
  ```

(Optional) Using OpenAI‑compatible API instead:

Put your API key in backend/.env:

```text
OPENAI_API_KEY=sk-...
```
Adjust llm_client.py and config.py to use the OpenAI client.

Run the backend:

```bash
uvicorn main:app --reload
The backend will start on http://127.0.0.1:8000.
```

You can test it at:
```
http://127.0.0.1:8000/health – health check.
http://127.0.0.1:8000/docs – interactive API docs (Swagger UI).
```

#### 3. Frontend setup (React + Vite)
Open a new terminal, then:

```bash
cd frontend
npm install
```
Start the dev server:

```bash
npm run dev
```
Open the URL shown in the terminal, usually:

```text
http://localhost:5173/
```
Usage
Open the frontend in your browser.

Paste any financial news article or paragraph into the text area.

Click “Explain”.

The app will show:

A simple summary.

An “Explain like I’m 15” version.

Key financial terms with one‑line definitions.

An impact badge indicating estimated market impact.

Environment Variables
Backend (backend/.env):

```text
# If using OpenAI or any compatible API
OPENAI_API_KEY=your_api_key_here
Ollama runs locally and does not require an API key.
```

### Future Improvements:
Detect companies and stock tickers mentioned in the news.

Show sentiment (positive / neutral / negative) for the news.

Add a history panel of recently explained articles.

Export explanation as PDF or Markdown.

License
This project is built for learning and portfolio purposes.
You can use or adapt it for your own projects; add your preferred license here (e.g., MIT).
