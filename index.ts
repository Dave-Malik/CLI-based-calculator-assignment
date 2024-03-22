#!/usr/bin/env node
import inquirer from "inquirer";

const anwser: {
  numberOne: number;
  numberTwo: number;
  operator: string;
} = await inquirer.prompt([
  {
    type: "number",
    name: "numberOne",
    message: "kidnly enter your first nuumber",
  },
  {
    type: "number",
    name: "numberTwo",
    message: "kidnly enter your second nuumber",
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
else if (operator === "Division"){
    console.log(`Your results are ${numberOne / numberTwo}`);
}