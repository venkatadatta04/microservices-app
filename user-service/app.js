const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("User Service Running");
});

app.get('/users', (req, res) => {
    res.json([{ id: 1, name: "Venkat" }]);
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
