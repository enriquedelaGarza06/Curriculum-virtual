const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

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
    
    console.log(`📝 Nuevo mensaje recibido:`);
    console.log(`Nombre: ${nombre}`);
    console.log(`Email: ${email}`);
    console.log(`Mensaje: ${mensaje}`);

    res.send(`
        <h1>Thank you, ${nombre}!</h1>
        <p>I have received your message. I will contact you at ${email} soon.</p>
        <a href="/">Go back home</a>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});