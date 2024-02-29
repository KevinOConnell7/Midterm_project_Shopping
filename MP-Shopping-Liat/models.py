# models.py
from pydantic import BaseModel

class Item(BaseModel):
    item: str
    quantity: int

class RemoveItem(BaseModel):
    item: str
