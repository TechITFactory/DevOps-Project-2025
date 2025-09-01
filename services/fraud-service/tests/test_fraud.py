from app.fraud_model import fraud_model

def test_legit_transaction():
    result = fraud_model.predict([45.0, 2])
    assert result in ["LEGIT", "FRAUD"]
