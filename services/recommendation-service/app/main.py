from fastapi import FastAPI
from app.recommender import SimpleRecommender
from app import config

app = FastAPI(title="Recommendation Service")
recommender = SimpleRecommender()

@app.get("/recommend/{product_id}")
def recommend(product_id: int):
    recs = recommender.recommend(product_id)
    return {"recommendations": recs}
