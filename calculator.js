//Calling a prompt to get user input for the calculator
var prompt = require('prompt');
prompt.start();
prompt.get(['Value1','Value2','question'], function (err, result) {    
    console.log('Would you like to multiply, add, divide, or subtract?')

   //Start of If statement for the math part of the calcultor
    if (result.question === '+') {
        console.log(parseInt(result.Value1) + parseInt(result.Value2))
    }
else if(result.question === '-'){
    console.log(parseInt(result.Value1) - parseInt(result.Value2))
}
else if(result.question === '*'){
    console.log(parseInt(result.Value1) * parseInt(result.Value2))
}
else if(result.question === '/'){
    console.log(parseInt(result.Value1) / parseInt(result.Value2))
}
});
