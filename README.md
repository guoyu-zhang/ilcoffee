# ILCoffee :coffee:
ILCoffee is an application showcasing independent coffee shops in Edinburgh.

**Motivation**

* Edinburgh has the most coffee shops per 100,000 people in Europe. [source](https://www.publicsectorcatering.co.uk/news/research-reveals-edinburgh-coffee-capital-europe)
* The city is also the biggest supporter of independently-owned coffee shops. [source](https://www.edinburghlive.co.uk/best-in-edinburgh/spilling-beans-edinburgh-named-uks-16211163). 

ILCoffee aims to take advantage of this popularity by first providing a platform for coffee enthusiasts to discover city favourites and hidden gems. Next stages for this application will aim to incorporate a method for user and cafe engagment and a potential coffee subscription plan with select cafes.

**Technologies Used**
* Built using React, Redux, Node, Express and MongoDB. 
* Google Maps API is used
to build a pipeline for processing up to date data for coffee shops. 
* Deployed with Heroku and Netlify, the application can be accessed at [ilcoffee.xyz](https://ilcoffee.xyz).


## Installation and Setup
Clone this repository. You will need node and npm installed globally on your machine.

**Credentials**

As the credentials directory has been ignored when pushing to Github, you will need to create a directory and file as such: /credentials/credentials.js within the server directory. This file should look like the following, changing appropriate fields for your credentials.
```
export const MAP_API_KEY = "YOUR API KEY";
export const MONGODB_USERNAME = "YOUR MONGODB USERNAME";
export const MONGODB_PASSWORD = "YOUR MONGODB PASSWORD";
```

**To start up server:**

 First cd into /server then
```bash
npm install
npm start
```
**To start up client:**

First cd into /client then
```bash
npm install --force
npm start
```

**Potential Error**

Please make sure ports 3000 and 5000 are both free, port 3000 is used to host client and port 5000 is used to host server.

If you are on macOS Monterey, port 5000 may be taken up by AirPlay. Find out how to resolve this issue [here](https://medium.com/pythonistas/port-5000-already-in-use-macos-monterey-issue-d86b02edd36c).


## Screenshots

![Hero Mockup](/mockups/mockUpMain.png?raw=true "Hero Mockup")
![Cards Mockup](/mockups/mockUpCards.png?raw=true "Cards Mockup")

## Features coming soon


* Menu for each cafe.
* Map for all cafes.

**Long Term Goals**
* Real-time deals for cafe items.
* User profiles for engagment.
* Popular today (tracks how many coffees bought at a shop today).
* Perhaps a way to have a monthly coffee subscription with coffe shops.


