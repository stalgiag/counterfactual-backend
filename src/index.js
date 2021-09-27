const express = require('express')
const fs = require('fs');
const synaptic = require('synaptic')
const app = express()
const port = 3000

// provide optional config object, defaults shown.
const config = {
    inputSize: 20,
    inputRange: 20,
    hiddenLayers: [20, 20],
    outputSize: 20,
    learningRate: 0.01,
    decayRate: 0.999,
    binaryThresh: 0.5,
    hiddenLayers: [3], 
    activation: 'sigmoid'
};
  
  
const net = new synaptic.Architect.LSTM(10, 6, 1);

let humanOutputStream = fs.createWriteStream('./data/human.json', { flags: 'a' });
let botOutputStream = fs.createWriteStream('./data/bot.json', { flags: 'a' });

app.get('/submit', function (req, res) {
    console.log(req.query.array);
    humanOutputStream.write(req.query.array)
    res.send(200);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

function train() {
    
}