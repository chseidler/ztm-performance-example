const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();

    while(Date.now() - startTime < duration) {

    }
}

app.get('/', (req, res) => {
    res.send('Performance example');
});

app.get('/timer', (req, res) => {
    delay(9000);
    res.send('Ding Ding ding!');
});

app.listen(3000);