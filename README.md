# Midterm_project_Shopping

By: Kevin O'Connell

03/03/2024

CS:3980:0001

Code is in the MP-Shopping-Liat please put virtual enviroment in it

## What is the Application?

The application that I made is a shopping list. This shopping list allows you to keep a list of items and quantity of the item that you would want to buy from your grocery store. You can add items to the list, remove items from the list, and update items quanitity when they are on the list. I am someone who oftens goes to the grocery store without a list and this would be very helpful for me to use. Some features that I would like to add in the future would be a another category that groups each grocery but what type store you would like to purchase the item at. I also think a interesting feature to add would be a google maps API to show you where the store are on a map. The final feature I would add would be a log in system so that people could log in and multiple people would be able to make a shopping list and aswell make it so that grocery stores could log in and tell the user if the item that they would want to purchase is in stock. 

## How to run Application?

To run this application there are multiple ways to do it 

Create Virtual Enviroment

`python -m venv venv`


Activating virtual enviroment

for mac

`source venv/bin/activate`

for windows

`.\venv\Scripts\activate`

when in virtual enviroment install the requirements

`pip install -r requirements.txt`

Install FastAPI

`pip install fastapi`

Install Uvicorn

`pip install fastapi uvicorn`

To start the website once you have installed all the necessary extensions.

`uvicorn main:app --reload`

## FrontEnd

### app.js

Here is my app.js file that is in plain javascript but I plan to use another front end framework for the final project. 

<img width="1166" alt="Screen Shot 2024-03-06 at 11 23 13 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/7d00ec0c-741c-4641-8221-87e2c8a8d810">

<img width="1167" alt="Screen Shot 2024-03-06 at 11 23 30 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/35ccac43-740f-4422-8ed7-d2250bf2afaf">

<img width="1165" alt="Screen Shot 2024-03-06 at 11 23 55 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/1df045fe-9e60-48c5-bd7b-51987e12d350">


### style.css

Below you will see a couple screenshots of my css file. This file is used to design my website and add color to my website.

<img width="1167" alt="Screen Shot 2024-03-06 at 11 21 44 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/7be59086-0912-4b33-a48e-412128aea8a8">

<img width="1166" alt="Screen Shot 2024-03-06 at 11 22 08 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/96fb5cea-4909-4a2e-9f9f-4b53fbb2b091">

<img width="1165" alt="Screen Shot 2024-03-06 at 11 22 23 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/69bb80d9-138f-43b7-9a71-9c30fa7801e6">


### favicon.ico

In the screen shot below you can seethe favicon logo that I used for my website. This was implemented in my index.html file. 

<img width="1161" alt="Screen Shot 2024-03-06 at 9 55 51 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/1683345c-7d92-4eb6-9450-5740be8aa0a3">

### index.html

<img width="1165" alt="Screen Shot 2024-03-06 at 9 55 30 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/62dd350d-528f-4af2-aa36-8422d11542b3">

## Backend

### main.py

<img width="1168" alt="Screen Shot 2024-03-06 at 11 19 16 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/57e9686f-e497-4dcb-b293-4bfb2a303ea9">

### models.py

<img width="1165" alt="Screen Shot 2024-03-06 at 9 56 13 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/09e24761-d51c-4d25-a3b3-5c29cb2425b9">

### routes.py

<img width="1167" alt="Screen Shot 2024-03-06 at 11 19 46 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/93912d62-db0d-4165-9baa-4fb2010f0cb7">

## Picture of files in Visual Studio

<img width="255" alt="Screen Shot 2024-03-06 at 12 23 16 PM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/3ae351d5-8bf8-4d2c-9829-22d994b17b86">

## Snap shot from website

The screen shot below is what the website looks like when you first run it and open the website. 

<img width="1431" alt="Screen Shot 2024-03-06 at 9 37 54 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/e1431e23-8067-4deb-8966-be98d4b7cbd9">

The next screen shot that I show you is with a couple items added to the list with diffrent quantities. As you can see below the quanity at the top of the screen is growing.

<img width="1426" alt="Screen Shot 2024-03-06 at 9 42 20 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/37cb8375-ed9f-4235-984c-9d3f9ef9c20a">

In the next screen shot that you will see below I will remove some items from the list above.

<img width="1429" alt="Screen Shot 2024-03-06 at 9 45 29 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/6ee4ef75-16ad-4cc0-99e7-c32ce73786ef">

Next I will show you 2 screen shots of the update button. One screenshot will be the prompt that pops up and the next will be the updated item quantity in the list. 

<img width="1431" alt="Screen Shot 2024-03-06 at 9 48 17 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/f7e6fa3a-4fb3-4329-bc76-680c8cf95f9f">

<img width="1431" alt="Screen Shot 2024-03-06 at 9 48 58 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/90a1f87e-a601-4e26-9a26-ccc786890b49">


## Video of Application running


## Conclusion


