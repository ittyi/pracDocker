const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/api', async (req, res) => {
    console.log("testtests")
    try {
        const response = await axios.get('http://api:4000');
        res.send(response.data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});