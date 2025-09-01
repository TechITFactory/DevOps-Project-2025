from app.recommender import SimpleRecommender

def test_recommend():
    rec = SimpleRecommender()
    results = rec.recommend(1)
    assert isinstance(results, list)
    assert all("id" in r for r in results)
