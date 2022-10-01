# ILCoffee :coffee:
ILCoffee is an application showcasing independent coffee shops in Edinburgh. 

* Built using React, Redux, Node, Express and MongoDB. 
* Google Maps API is used
to build a pipeline for processing up to date data for coffee shops. 
* Deployed with Heroku and Netlify, the application can be accessed at [ilcoffee.xyz](ilcoffee.xyz).


## Installation and Setup
Clone this repository. You will need node and npm installed globally on your machine.

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

## Future Improvements


* Menu for each cafe.
* Map for all cafes.
* Real-time deals for cafe items.

