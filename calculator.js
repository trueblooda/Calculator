//Calling a prompt to get user input for the calculator
const question1 = 'Would you like to multiply, add, divide, or subtract?'
var prompt = require('prompt');
prompt.start();
prompt.get(['Value1','Value2', 'question'], function (err, result) {    
    //TODO: ****get this to output before it runs the equation****
    console.log('Would you like to multiply, add, divide, or subtract?')
   //Start of If statement for the math part of the calcultor
    if (result.question === 'add') {
        console.log(parseFloat(result.Value1) + parseFloat(result.Value2))
    }
else if(result.question === 'subtract'){
    console.log(parseFloat(result.Value1) - parseFloat(result.Value2))
}
else if(result.question === 'multiply'){
    console.log(parseFloat(result.Value1) * parseFloat(result.Value2))
}
else if(result.question === 'divide'){
    console.log(parseFloat(result.Value1) / parseFloat(result.Value2))
}
});
