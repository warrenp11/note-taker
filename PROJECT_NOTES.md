# Project Notes

## Getting Started
* The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.

* The following HTML routes should be created:
    * `GET /notes` should return the notes.html file. :heavy_check_mark:
    * `GET */` should return the index.html file. :heavy_check_mark:

* The following API routes should be created:
    * `GET /api/notes` should read the db.json file and return all saved notes as JSON. :heavy_check_mark:
    * `POST /api/notes` should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you). 

## Bonus
You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.


## Grading Requirements
* Application front end must connect to an Express.js back end.
* Application back end must store notes with unique IDs in a JSON file.
* Application must be deployed to Heroku.