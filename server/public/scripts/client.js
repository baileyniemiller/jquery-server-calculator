$(document).ready(readyNow);

function readyNow(){
    console.log('JQ is working!');
    $('.equals').on('click', startCalculation);
    $('.clear').on('click', clearInputs);
    $('#add').on('click' , function() {numbersIn.operator = '+'});
    $('#subtract').on('click', function () {numbersIn.operator = '-'});
    $('#multiply').on('click' , function() {numbersIn.operator = '*'});
    $('#divide').on('click' , function() {numbersIn.operator = '/'});
    $('.totalList').val('');
}

const numbersIn = {
    number1: 0,
    number2: 0,
    operator: '',
    result: '',
};

function clearInputs() {
    $('#number1In').val('');
    $('#number2In').val('');
}

// const total = $('#total');

function startCalculation(event) {
    numbersIn.number1 = $('#number1In').val();
    numbersIn.number2 = $('#number2In').val();
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: numbersIn,
    }).then(function (response) {
        getResults();
        console.log('Numbers have been received!', response);
    }).catch(function (response) {
        console.log('Sorry, error in retrieving numbers.');
    });
}


function getResults() {
    $.ajax({
        type: 'GET',
        url: '/result',
    }).then(function (response) {
        // append data to the DOM
        $('.totalList').empty();
        for (let i=0; i<response.length; i++) {
            let ourObj = response[i];
            $('.totalList').append(`<li> ${ourObj.number1} ${ourObj.operator} ${ourObj.number2} = ${ourObj.result} </li>`);
            $('#total').empty();
            $('#total').append(response[0].result);
            console.log(response);
        }
        return;
    });
}

   // $('#number1In').val('');
   // $('#number2In').val('');
   // let runningList = $('.totalList');
   // runningList.empty();
   // $('.totalList').append(`<li> ${numbersIn.number1} + ${operator} + ${numbersIn.number2} = ${numbersIn.result} </li>`);
   // console.log(numbersIn);

