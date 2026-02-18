import ollama

MODEL_NAME = "llama3.2"  

def ask_llm(system_prompt: str, user_prompt: str) -> str:
    """
    Call a local Ollama model and return its response text.
    """
    prompt = f"{system_prompt}\n\n{user_prompt}"

    response = ollama.generate(
        model=MODEL_NAME,
        prompt=prompt,
    )

    # Ollama returns a dict; 'response' field holds the text
    return response["response"].strip()
