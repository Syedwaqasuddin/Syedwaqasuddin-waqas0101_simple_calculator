#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {massage:"Enter first number",type:"number",name:"firstNumber"},
    {massage:"Enter Second number",type:"number",name:"secondNumber"},  
{massage:"Select one of the operator to perfom operation",type:"list",name:"operator",
choices:["Addition","Subtraction","Multiplication","Division"]
}
])
if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
} 

else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
} 

else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber)
} 
else{
    console.log("invalid operator")
}