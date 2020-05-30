$(document).ready(readyNow);

function readyNow(){
    console.log('JQ is working!');
    $('.equals').on('click', startCalculation);
    $('.clear').on('click', clearInputs);
}


function clearInputs() {
    $('#number1In').val('');
    $('#number2In').val('');
}

// const add = $('#add');
// const subtract = $('#subtract');
// const multiply = $('#multiply');
// const divide = $('#divide');
// const total = $('#total');

function startCalculation(event) {
    const number1In = $('#number1In').val();
    const number2In = $('#number2In').val();
    const numbersIn = {
        number1: number1In,
        number2: number2In,
        operator:  '',
    };
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: numbersIn,
    }).then(function (response) {
        console.log('Numbers have been received!');

    }).catch(function (response) {
        console.log('Sorry, error in retrieving numbers.');
    });
}


function getResults() {
    $.ajax({
        type: 'GET',
        url: '/result'
    }).then(function (response) {
        // append data to the DOM
        //empty inputs
        $('#number1').empty();
        $('#number2').empty();
        $('#total').empty();
        // for (let i = 0; i < response.length; i++) {
        //     let answer = response[i];
        $('#total').append(numbersOutput);
        console.log('The equal button is being clicked.');
        // }
    });
}



   // $('#number1In').val('');
   // $('#number2In').val('');
   // let runningList = $('.totalList');
   // runningList.empty();
   // $('.totalList').append(`<li> ${numbersIn.number1} + ${operator} + ${numbersIn.number2} = ${numbersIn.result} </li>`);
   // console.log(numbersIn);

