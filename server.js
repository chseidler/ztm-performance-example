const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();

    while(Date.now() - startTime < duration) {

    }
}

app.get('/', (req, res) => {
    res.send(`Performance example:  ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`Ding Ding ding! ${process.pid}`);
});

console.log('server.js running');
    console.log('not master');
    app.listen(5000);
