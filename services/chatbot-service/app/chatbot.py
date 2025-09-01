from transformers import pipeline
from app import config

class Chatbot:
    def __init__(self):
        # Using a small QA model for demo purposes
        self.qa_pipeline = pipeline("question-answering", model=config.MODEL_NAME)

    def ask(self, context: str, question: str):
        result = self.qa_pipeline(question=question, context=context)
        return result["answer"]

chatbot = Chatbot()
