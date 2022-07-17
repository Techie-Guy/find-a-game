const prompt = require("prompt-sync")({ sigint: true });
const fs = require('fs');

const name = prompt("Name of the game: ");
const id = prompt("URL Id of the game: ");
const price = prompt("Price of the game: ");
const where_to_get = prompt("From where to get the game(Seperate with comma): ").split(',');
const age_rating = prompt("Age Rating of the game: ");

const game = {
    "name": name,
    "id": id,
    "price": Number(price),
    "where_to_get": Array.from(where_to_get),
    "age_rating": age_rating
};

fs.readFile('./games.json', 'utf8', (err, data) => {
    if (err) throw err;
    let json = JSON.parse(data);
    json.push(game);
    json = JSON.stringify(json);
    fs.writeFile('./games.json', json, 'utf8', () => {
        console.log("Added data successfully");
    });
});