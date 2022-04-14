"use strict";

console.log("Hello from external JavaScript");
//JS with HTML Exercises
/*
// PROBLEM 1
alert('Welcome to my Website!');
// PROBLEM 2
let color = prompt("What is your favorite color?");

alert(color + " is my favorite color too.");

 */

/* PROBLEM 3
let movie1 = "The little Mermaid";
let movie2 = "Brother Bear";
let movie3 = "Hercules";

let choice1 = "Would you like to rent " + movie1;
let choice2 = "Would you like to rent " + movie2;
let choice3 = "Would you like to rent " + movie3;

let customerChoice = choice1 || choice2 || choice3;
let question = confirm("Would you like to rent a movie for $3 per day?");
let choices = ("Your Choices Are: " + movie1 + ", " + movie2 + ", " + movie3);

let days1 = "How many days would you like?";
let days2 = "How many days would you like?";
let days3 = "How many days would you like?";
let chosenDays = prompt(days).indexOf();
*/
let question = confirm("Would you like to rent a movie for $3 per day?");
    if (question >= 1) {

    } else {
       onclose(alert("Maybe next time."))

    }
let movie1 = "The little Mermaid";
let movie2 = "Brother Bear";
let movie3 = "Hercules";
let choices = ("Your Choices Are: " + movie1 + ", " + movie2 + ", " + movie3);
    if (confirm(choices) >= 1) {

  } else {
        onclose(alert("Bad selections? OOPSE!!"))
    }
let choice1 = "Would you like to rent " + movie1;
let days1 = "How many days would you like?";
    if (confirm(choice1) >= 1) {
        prompt(days1)
    } else {

    }
let choice2 = "Would you like to rent " + movie2;
let days2 = "How many days would you like?";
    if (confirm(choice2) >= 1){
        prompt(days2)
    } else {

    }
let choice3 = "Would you like to rent " + movie3;
let days3 = "How many days would you like?";
    if (confirm(choice3) >= 1) {
        prompt(days3)
    } else {

    }




