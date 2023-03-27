const express = require('express');
const cluster = require('cluster');
const os = require('os');

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

if (cluster.isMaster) {
    console.log('Master');
    const NUM_WORKERS = os.cpus().length;

    console.log(NUM_WORKERS);
    for (let i = 0; i < NUM_WORKERS; i++) {
        cluster.fork();
    }
} else {
    console.log('not master');
    app.listen(5000);
}