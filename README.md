# Movies API

## Workflow

1. Fork and clone this repo.
1. Run `npm install`.
1. Write your code in `src/server.js`. You can split code into separate files if needed.
1. In `package.json` already exists `start` script to run your server.

## Task

Use data from `data.json` to create express server with next endpoints:

1. Create a GET API on `/movies` that returns all movies, ordered by the release year, as JSON.

1. Create a GET API on `/movies/<id>` that retrieves the single movie corresponding to the movie with the provided ID. If there is no such movie, return 404.

1. Create a GET API on `/movies/titles` that returns the titles of all the movies, ordered alphabetically, as plain text (titles to be separated with a linebreak).

1. Create a GET API on `/movies/titles?year=<year>` that returns the titles of all the movies released in the given year, ordered alphabetically, as plain text (separating titles with a linebreak).

## Extra task
(Require file system opperations and body parsing)

1. Create a POST API on `/movies` that inserts a new movie with the provided title and release year into the `data.json` and return created movie (with id) as JSON. Request should contains body with movie object(`{ "title": "Title", "year": 1984 }`). Use [uuid](https://www.npmjs.com/package/uuid) library to create new ID\`s(`const uuid = require('uuid/v4'); const id = uuid()`)

1. Create a PUT API on `/movies/<id>` that updates the given movie in `data.json` by id with the provided title and year. For the response, return the updated movie (with id) as JSON. Request should contains body with movie object(`{ "title": "Title", "year": 1984 }`).

1. Create a DELETE API on `/movies/<id>` that removes the specified movie from the `data.json`. Response without content with 204 status code.

1. Make sure your server is fault-tolerant and will continue to serve clients even after receiving an invalid request. For instance, if the string "im-a-text-not-a-number" is passed as a release year for a movie, the server shouldn’t crash.
