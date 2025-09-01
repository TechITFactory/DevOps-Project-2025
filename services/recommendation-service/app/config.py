import os

PORT = int(os.getenv("PORT", 4003))
USER_SERVICE_URL = os.getenv("USER_SERVICE_URL", "http://localhost:4000")
PRODUCT_SERVICE_URL = os.getenv("PRODUCT_SERVICE_URL", "http://localhost:4001")
