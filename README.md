# Note Taker

![Code badge](https://img.shields.io/github/languages/top/warrenp11/note-taker) 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
* [Description](#description)
* [Deployed Application](#deployed-application)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Project Insight](#project-insight)
* [Questions](#questions)
* [License](#license)

## Description
This application was designed as a homework assignment for Rutgers Coding Boot Camp. We were challenged to create an application which uses an Express.js back end that can be used to write and save notes. 

Some starter code was provided for this assignment.

        User Story
        I WANT to be able to write and save notes
        SO THAT I can organize my thoughts and keep track of tasks I need to complete

        Acceptance Criteria
        GIVEN a note-taking application
        WHEN I open the Note Taker
        THEN I am presented with a landing page with a link to a notes page
        WHEN I click on the link to the notes page
        THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
        WHEN I enter a new note title and the note’s text
        THEN a Save icon appears in the navigation at the top of the page
        WHEN I click on the Save icon
        THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
        WHEN I click on an existing note in the list in the left-hand column
        THEN that note appears in the right-hand column
        WHEN I click on the Write icon in the navigation at the top of the page
        THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Deployed Application
[Click Here](https://secret-mesa-01249.herokuapp.com/) to launch the application via Heroku

## Installation
No installation required

## Usage
[Click Here](https://watch.screencastify.com/v/PSOpXBqXO6PDhHURD2lU) to see a video demonstation of the application in use

## Credits
[Node.js](https://nodejs.org/en/docs/)

[Express.js](https://www.npmjs.com/package/express)

[Nano ID](https://www.npmjs.com/package/nanoid)

[Heroku](https://www.heroku.com)

## Project Insight
The project build flowed pretty well from the beginning, however I hit a major roadblock near the end of the build. As I pushed the app to Heroku I was noticing that none of the provided front-end JavaScript logic was functioning. It took me serveral days to finally figure out was happening (with the help of several of my just as confused instructors). There was an issue to how I was calling the notes.html page in my api call; due to this the JavaScript logic wasn't uploading. As mentioned I was able to finally correct the bug in my api call to have the application perform as expected.

I still haven't added a delete route. I intend to do so in the near future time permitting.

## Questions
If you have any questions about this project contact me directly at warrenp11@gmail.com
  
Visit this project's repository at https://www.github.com/warrenp11/note-taker

View more of my projects at https://www.github.com/warrenp11

## License
Licensed under the [MIT](./license.txt/) license