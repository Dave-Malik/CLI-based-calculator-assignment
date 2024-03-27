#!/usr/bin/env node
import inquirer from "inquirer";
const anwser = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter your first number",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "kindly enter your second number",
    },
    {
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "Select your operator",
    },
]);
const { numberOne, numberTwo, operator } = anwser;
if (operator === "Addition") {
    console.log(`Your results are ${numberOne + numberTwo}`);
}
else if (operator === "Subcraction") {
    console.log(`Your results are ${numberOne - numberTwo}`);
}
else if (operator === "Multiplication") {
    console.log(`Your results are ${numberOne * numberTwo}`);
}
else if (operator === "Division") {
    console.log(`Your results are ${numberOne / numberTwo}`);
}
