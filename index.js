const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080;

app.set('json spaces', 2);

fs.readFile('./games.json', 'utf8', (error, data) => {
    if (error) throw error;
    console.log("Loaded games.json");

    const games = JSON.parse(data);

    app.get('/', (req, res) => {
        res.status(200)
            .json({msg: 'The Home Page. Use /games/all for all games or /games/:id for a specific game.'});
    });

    app.get('/games/all', (req, res) => {
        res.status(200).json(games);
    });

    app.get('/games/:id', (req, res) => {
        let game = games.find(game => game.id === req.params.id);
        if(game === undefined || game === null)
        {
            res.status(404).json({msg: `Error! Game named "${req.params.id}" not found.`});
            return;
        }
        
        res.status(200).json(game);
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port localhost:${PORT}`);
});
