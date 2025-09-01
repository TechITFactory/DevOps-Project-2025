import os

PORT = int(os.getenv("PORT", 4005))
MODEL_NAME = os.getenv("MODEL_NAME", "distilbert-base-uncased-distilled-squad")
