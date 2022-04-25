"use strict";
/**TODO:
 * prompt user for odd number between 1 and 50
 * use a loop and break statement to continue prompting user if invalid input
**/
let questionAsked;
    while(true){
        questionAsked = prompt("Odd number between 1 and 50");
            if (questionAsked % 2 !== 0 && questionAsked >= 1 && questionAsked <= 50){
                break;
            }
    for (let i = 1; i <= 50; i+=2){
            if (i===questionAsked){
                console.log("WHOOP! Skipping " + questionAsked);
                continue;
            }
        console.log(i);
    }
}
