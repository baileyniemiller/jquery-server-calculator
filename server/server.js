const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const PORT = 5000;

// Must be added before GET and POST routes.
app.use(bodyParser.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//////////////////////////////////////////////////

let numbersOutput = [];
// let numbersHistory = [];


//add a POST route to allow new numbers to be calculated
// this is an HTTP handler for POST /calculate
app.post('/calculate', function(req, res) {
    // req: express built this based on what the browser or postman sent us!
    // res: express built this, our job is to send something back using res.send();
    // req: short for "http request" (from client)
    // res: short for "http response" (to the client)
    /*  req.body:
        {
            number1: 10, (could be "10")
            number2: 20, (could be "20")
            operator: "+"
        }
    */
    const obj = req.body;
    // obj is just an object {bread: 'bagel'}

    console.log(obj);


    let operator = obj.operator
    let result = 0;
    let number1 = Number(obj.number1);
    let number2 = Number(obj.number2);
    console.log('Calculating...calculating...');
    console.log(obj);
    if (operator === '+') {
        result = number1 + number2;
        
    }
    else if (operator === '-') {
        result = number1 - number2;
    }
    else if (operator === '*') {
        result = number1 * number2;
    }
    else if (operator === '/') {
        result = number1 / number2;
        // numbersOutput.unshift(`${number1} / ${number2} = ${result}`);
    }
     else {
         console.log('Error');
        // res.sendStatus(400);
    }
    obj.result = result;
    numbersOutput.unshift(obj);
    res.send({firstNumber: number1, secondNumber: number2, total: result});
}); 

//add a GET route to get back the result
app.get('/result', function(req, res) {
    console.log('Getting the result!');
    res.send(numbersOutput);
});

//add another GET route to get the history of calculations
app.get('/history', function(req, res) {
    console.log('We\'d like to see a history array.');
    res.send(numbersOutput);
})

// how to DELETE /history
// app.delete('/history', function (req, res) {
//     history = [];
//     res.sendStatus(202); // 202: accepted 
// })


// run on the environment variable PORT (like heroku gives us)
// otherwise just run on port 5000
const port = provess.env.PORT || 5000;
app.listen(port, function() {
    console.log('Server is running on port', PORT)
});