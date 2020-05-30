const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// Must be added before GET and POST routes.
app.use(bodyParser.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
});

//////////////////////////////////////////////////


let numbersInput = [
    {
        number1: 0,
        number2: 0,
        result: 0,
    }
]

let numbersOutput = [];

let numbersHistory = [];

//add a POST route to allow new numbers to be calculated
app.post('/calculate', (req, res) => {
    console.log('Calculating...calculating...');
    res.send(numbersInput);
});

//add a GET route to get back the result
app.get('/result', (req, res) => {
    console.log('Getting the result!');
    res.send(numbersOutput);
});

//add another GET route to get the history of calculations
app.get('/history', (req, res) => {
    console.log('We\'d like to see a history array.');
    res.send(numbersHistory);
})
