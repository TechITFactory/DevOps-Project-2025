from fastapi import FastAPI
from pydantic import BaseModel
from app.fraud_model import fraud_model
from app import config

app = FastAPI(title="Fraud Detection Service")

class Transaction(BaseModel):
    amount: float
    items: int

@app.post("/fraud/check")
def check_fraud(tx: Transaction):
    features = [tx.amount, tx.items]
    result = fraud_model.predict(features)
    return {"status": result}
