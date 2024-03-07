# Midterm_project_Shopping

By: Kevin O'Connell

03/03/2024

CS:3980:0001

Code is in the MP-Shopping-Liat

---

## What is the Application?

I've developed a shopping list application designed to improve your time grocery shopping. This app allows you to maintain a comprehensive list of items, including the quantity you intend to purchase, ensuring you never miss a thing at the grocery store. Some features include the ability to add, remove, and adjust the quantities of items on your list. There is also a quantity tracker at the top of the screen that updates constantly and allows you to see the total quantity of items in your shopping list. As someone who frequently forgets to bring a list to the grocery store, I find this tool very helpful for organizing my shopping list and being able to access it at any time. 

Looking ahead, I would improve the app with several features. One such addition is the integration of categories that not only organize items but also suggest where to buy them, this would keep your list more organized and easier to read for the users. I'm also considering incorporating a Google Maps API to display the locations of these stores, this would allow users who are new to areas to remember the locations of the grocery stores that they would want to visit. Lastly, a login system would be helpful, this feature would help multiple users create and manage their shopping lists. This feature could also allow grocery stores to participate, providing real-time updates on stock availability directly to the user through our shopping list app. These future updates aim to make the grocery store trip much simpler and quicker for our users.

---

## How to run Application?

The code is in the file named MP-Shopping-Liat please make sure when you install the virtual enviroment it is in this folder with the rest of the files and code. 

To run this application Please Create a virtual enviroment with the code below. Please note if you are using a mac or windows computer.

#### Create Virtual Enviroment

`python -m venv venv`

#### Activating virtual enviroment

for mac

`source venv/bin/activate`

for windows

`.\venv\Scripts\activate`

When the virtual enviroment is installed and activated please install the requirements with the code below.

#### Requirements code

`pip install -r requirements.txt`

After the requirements are installed use this code to load the website if there are still errors I include some code below that could help. 

#### Code to run program

`uvicorn main:app --reload`

---

### Extra Code that could be helpful if having trouble running

#### To verify if the pip is installed run this code in your terminal

`python -m pip list`

#### Install FastAPI or Check if FastAPI is installed

`pip install fastapi`

#### Install Uvicorn or Check if Uvicorn is installed

`pip install fastapi uvicorn`

---

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

---

## Backend

### main.py

<img width="1168" alt="Screen Shot 2024-03-06 at 11 19 16 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/57e9686f-e497-4dcb-b293-4bfb2a303ea9">

### models.py

<img width="1165" alt="Screen Shot 2024-03-06 at 9 56 13 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/09e24761-d51c-4d25-a3b3-5c29cb2425b9">

### routes.py

<img width="1167" alt="Screen Shot 2024-03-06 at 11 19 46 AM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/93912d62-db0d-4165-9baa-4fb2010f0cb7">

## Picture of files in Visual Studio

<img width="255" alt="Screen Shot 2024-03-06 at 12 23 16 PM" src="https://github.com/KevinOConnell7/Midterm_project_Shopping/assets/45603150/3ae351d5-8bf8-4d2c-9829-22d994b17b86">

---

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

---

## Conclusion


