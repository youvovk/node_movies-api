// Write your code here
const express = require('express');
const uuid = require('uuid/v1');
const fs = require('fs');

const app = express();
const port = 5000;

let movies = JSON.parse(fs.readFileSync('data.json', 'utf8'));

app.get('/movies', (req, res) => {
    const allMovies = [...movies].sort((a, b) => Number(b.year) - Number(a.year));

    res.json(allMovies);
});

app.get('/movies/titles', (req, res) => {
    let titles = [...movies];

    if (req.query.year) {
        titles = titles.filter(({ year }) => year === req.query.year);

        if (!titles.length) {
            res.status(404).send("Movie title is not found");
        }
    }


    titles = titles.map(({ title }) => title).sort().reduce((acum, title) => acum + ` <h2>${title}</h2>`, '');

    res.send(titles);
});

app.get('/movies/:id', (req, res) => {
    const foundMoviesId = movies.find(({ id }) => id === req.params.id);

    if (foundMoviesId) {
        return res.json(foundMoviesId);
    } else {
        res.status(404).send("Oops, something went wrong");
    }
});

app.use(express.static('build'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
console.log('Listening...')