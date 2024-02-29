# main.py
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

# Import routes from routes.py
from routes import router as shopping_router

app = FastAPI()

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# STATIC FILES
app.mount("/static", StaticFiles(directory="static"), name="static")

# Include router from routes.py
app.include_router(shopping_router)

@app.get("/")
def read_index():
    return FileResponse("index.html", media_type="text/html")
