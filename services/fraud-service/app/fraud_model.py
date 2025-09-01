import numpy as np
from sklearn.ensemble import IsolationForest
import joblib

class FraudModel:
    def __init__(self):
        # Train a dummy model on startup
        data = np.random.normal(50, 10, size=(100, 2))  # normal transactions
        model = IsolationForest(contamination=0.1, random_state=42)
        model.fit(data)
        self.model = model

    def predict(self, features):
        result = self.model.predict([features])
        return "FRAUD" if result[0] == -1 else "LEGIT"

# Singleton model instance
fraud_model = FraudModel()
