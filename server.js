const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/totalprice', (req, res) => {
    const { products } = req.body;

    if (!products || !Array.isArray(products)) {
        return res.status(400).json({ error: "products are not list" });
    }


    let total = 0;
    for (let i = 0; i < products.length; i++) {
        const { price, quantity } = products[i];
        total += price * quantity;
    }


    res.json({ total });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
