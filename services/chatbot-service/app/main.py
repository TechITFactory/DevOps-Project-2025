from fastapi import FastAPI
from pydantic import BaseModel
from app.chatbot import chatbot
from app import config

app = FastAPI(title="Customer Support Chatbot Service")

class Query(BaseModel):
    context: str
    question: str

@app.post("/chat")
def chat(query: Query):
    answer = chatbot.ask(query.context, query.question)
    return {"answer": answer}
