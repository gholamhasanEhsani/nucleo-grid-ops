from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# اجازه CORS برای frontend localhost
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check
@app.get("/health")
def health():
    return {"status": "ok"}

# نمونه endpoint نیروگاه
@app.get("/plants")
def get_plants():
    return [
        {"id":1, "type":"nuclear", "power":1000, "core_temp":320},
        {"id":2, "type":"coal", "power":500, "efficiency":0.85}
    ]
