import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

class SimpleRecommender:
    def __init__(self):
        # For demo, we simulate product features
        self.products = pd.DataFrame([
            {"id": 1, "name": "Laptop", "category": "Electronics"},
            {"id": 2, "name": "Headphones", "category": "Electronics"},
            {"id": 3, "name": "Shoes", "category": "Fashion"},
            {"id": 4, "name": "Watch", "category": "Fashion"},
        ])

    def recommend(self, product_id, top_n=2):
        # Very simple: recommend other products from the same category
        product = self.products[self.products["id"] == product_id]
        if product.empty:
            return []
        category = product.iloc[0]["category"]
        recs = self.products[(self.products["category"] == category) & (self.products["id"] != product_id)]
        return recs.to_dict(orient="records")
