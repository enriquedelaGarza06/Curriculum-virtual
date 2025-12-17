const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const projectsData = require('./data/projects.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sobre_mi', (req, res) => {
    res.sendFile(path.join(__dirname, 'sobre_mi.html'));
});

app.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log(`📝 Mensaje de: ${nombre} (${email})`);
    res.send(`<h1>Thanks ${nombre}! Message received.</h1><a href="/">Go back</a>`);
});

app.get('/api/projects', (req, res) => {
    res.json(projectsData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});