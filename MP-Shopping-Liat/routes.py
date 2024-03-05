# routes.py
from fastapi import APIRouter, HTTPException
from models import Item, RemoveItem

router = APIRouter()

shopping_list = []

@router.post("/add_item")
async def add_item(item: Item):
    shopping_list.append({"item": item.item, "quantity": item.quantity})
    return {"message": f"Item '{item.item}' added with quantity {item.quantity}."}

@router.get("/get_shopping_list")
async def get_shopping_list():
    return {"shopping_list": shopping_list}

@router.delete("/remove_item")
async def remove_item(item: RemoveItem):
    global shopping_list
    shopping_list = [i for i in shopping_list if i["item"] != item.item]
    return {"message": f"Item '{item.item}' removed."}

@router.put("/recalculate_total")
async def recalculate_total():
    total_quantity = sum(item['quantity'] for item in shopping_list)
    return {"total_quantity": total_quantity}
# 

@router.put("/update_item")
async def update_item(item: Item):
    global shopping_list
    for i in range(len(shopping_list)):
        if shopping_list[i]["item"] == item.item:
            shopping_list[i]["quantity"] = item.quantity
            return {"message": f"Item '{item.item}' updated with quantity {item.quantity}."}
    raise HTTPException(status_code=404, detail="Item not found")

#
