"use strict";
//LEFT COMMENTED CODE IN AS REFERENCE OF WORK PROGRESS
(function () {

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */
    function sayHello(name) {
        return "hello " + name
    }

    console.log(sayHello("Stantheman"));
    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */
    let helloMessage = sayHello("Kevin");
    console.log(helloMessage);
    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */
    let myName = "Kevin";
    console.log(sayHello(myName));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */
    function isTwo(number) {
        return number === 2
    }

    console.log(isTwo(2));
    console.log(isTwo(random));

    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.375
     * > calculateTip(0.15, 33.42) // returns 5.013
     */


    function calculateTip(percent, number) {
        return percent * number
    }

    console.log(calculateTip(0.25, 25.50));
    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */
    let billTotal = parseFloat(prompt("Enter Bill Total:"));
    let percentTotal = parseFloat(prompt("Enter percent here using decimal:"));
    let totalTip = calculateTip(billTotal, percentTotal);
    alert("Your total tip cost " + "$" + (totalTip).toFixed(2));
    //alert("Your total tip cost " + "$" + (totalTip));
    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var discountPercent = .2; // 20%
     * > applyDiscount(originalPrice, discountPercent) // 80
     *
     * > applyDiscount(45.99, 0.12) // 40.4712
     */
   /* function applyDiscount(total) {
        return total
    }

    let totalDiscount = 0.25;
    let totalPrice = parseFloat(prompt("Enter Total Here:"));
    let access = confirm("Would you like a discount with that?");

    if (access >= 1) {
        alert("Your total is: " + "$" + applyDiscount(totalPrice * totalDiscount))
    } else {
        alert("Your total is: " + "$" + totalPrice)
    }
*/
function applyDiscount (total, discount) {
    total = parseFloat(prompt("Enter total price here: "))
    discount = parseFloat(prompt("Enter a number between 0 and 1: "))
    return alert("Your total discount is: " + "$" +(total * discount).toFixed(2))
}
    applyDiscount();
} ())


//parseFloat(alert("Your total discount is: " +"$" + total * discount))