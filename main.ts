#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { 
        name: "weightInKg",
        type: "number",
        message: "Please Enter Your Weight In Kg"
    },
    {
        name: "heightInMeter",
        type: "number",
        message: "Please Enter Your Height In Meter"
    },

])
let bmi = answer.weightInKg / (answer.heightInMeter * answer.heightInMeter);
console.log(`Dear Kashif Your BMI is ${bmi}`);

