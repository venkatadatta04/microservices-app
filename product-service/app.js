const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
    res.send("Product Service Running");
});

app.get('/products', (req, res) => {
    res.json([{ id: 101, name: "Laptop", price: 50000 }]);
});

app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});
