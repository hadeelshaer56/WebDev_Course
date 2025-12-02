const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// static Folder is client folder
app.use(express.static(path.join(__dirname, "client")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "client/home.html"));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "client/home.html"));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, "client/home.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.get("/api/songs:id", (req, res) => {
    const id = parseInt(req.params.id) ;
    const song = songs.find(s => s.id === id);
    if (!song) {
        res.status(404).send("Song not found");
    } else {
        res.json(song);
    }
});


let songs = [
    { id: 1, title: "Halo", artist: "Beyoncé" },
    { id: 2, title: "Shape of You", artist: "Ed Sheeran" },
    { id: 3, title: "Blinding Lights", artist: "The Weeknd" }
];

app.get("/api/songs", (req, res) => {
    res.json(songs);
}); 