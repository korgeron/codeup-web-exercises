"use strict";

(function () {

    console.log("Hello from external JavaScript");
//JS with HTML Exercises

// PROBLEM 1
   alert('Welcome to my Website!');

// PROBLEM 2
    let color = prompt("What is your favorite color?");

    alert(color + " is my favorite color too.");

// PROBLEM 3.1

//FIRST POP-UP WINDOW
    function movies () {
        return confirm("Would you like to rent a movie/movies for $3 a day? ") === true;
    }

//CALLS ^ FUNCTION / PASSES TO NEXT
    if (movies().valueOf()) {}
    else {
        return onclick((alert("Maybe next time.")))
    }

//FOR SECOND FUNCTION
    let movie1 = "The little Mermaid";
    let movie2 = "Brother Bear";
    let movie3 = "Hercules";

//SECOND POP-UP WINDOW
    function choices () {
        return confirm("Your choices are: " + movie1 +", "+ movie2 +", "+"or "+ movie3 + ".")
    }

//CALLS ^ FUNCTION / PASSES TO NEXT
    if (choices().valueOf()) {}
    else {
        return onclick((alert("BAD Selections? OOPSE >:)")))
    }

//FIRST MOVIE CHOICE
    function choice1 () {
        return confirm("Would you like to rent " + movie1 + "?")
    }
    let total1;
    if (choice1().valueOf()) {
        let days1 = prompt("Enter number of days you would like to rent for:")
        alert("You have chosen: " + (days1) + " day/s.")
        alert("The cost for this movie is: " + "$" + (days1 * 3))
        total1 = days1 * 3
    } else {
        let days1 = 0
        alert("You have chosen: " + (days1) + "day/s.")
        total1 = days1
    }

//SECOND MOVIE CHOICE
    function choice2 () {
        return confirm("Would you like to rent " + movie2 + "?")
    }
    let total2;
    if (choice2().valueOf()) {
        let days2 = prompt("Enter number of days you would like to rent for:")
        alert("You have chosen: " + (days2) + " day/s.")
        alert("The cost for this movie is: " + "$" + (days2 * 3))
        total2 = days2 * 3
    } else {
        let days2 = 0
        alert("You have chosen: " + (days2) + "day/s.")
        total2 = days2
    }

//THIRD MOVIE CHOICE
    function choice3 () {
        return confirm("Would you like to rent " + movie3 + "?")
    }
    let total3;
    if (choice3().valueOf()) {
        let days3 = prompt("Enter number of days you would like to rent for:")
        alert("You have chosen: " + (days3) + " day/s.")
        alert("The cost for this movie is: " + "$" + (days3 * 3))
        total3 = days3 * 3
    } else {
        let days3 = 0
        alert("You have chosen: " + (days3) + "day/s.")
        total3 = days3
    }

//TOTAL WINDOW
    alert("Your total is " + "$" +(total1 + total2 + total3) + ".");

//PROBLEM 3.2

//GOOGLE PAY
let pay1 = 400;
let hours1 = 6;
    function googlePay () {
        alert("Your google pay is $" + (pay1 * hours1) + " for the week.")
    }
    googlePay();

//FACEBOOK PAY
let pay2 = 350;
let hours2 = 10;
    function facebookPay () {
        alert("Your facebook pay is $" + (pay2 * hours2) + " for the week.")
    }
    facebookPay();

//AMAZON PAY
let pay3 = 380;
let hours3 = 4;
    function amazonPay () {
        alert("Your amazon pay is $" + (pay3 * hours3) + " for the week.")
    }
    amazonPay();

let payTotal1 = pay1 * hours1;
let payTotal2 = pay2 * hours2;
let payTotal3 = pay3 * hours3;
alert("Your total paycheck comes out to $" + (payTotal1 + payTotal2 + payTotal3) + ".");

//PROBLEM 3.3

//ENROLLMENT STATUS
let isEnrolled;
function enrollmentStatus() {
    isEnrolled = alert("CONGRATULATIONS!!! \n You are now enrolled for our upcomming summer course!")
}

//CLASS STATUS
let isFull;
function classStatus() {
    isFull = confirm("Does the class you want to take have open seats? \n Press OK for YES \n Press Cancel for NO")
    return isFull
}

//SCHEDULE STATUS
let noConflict;
function scheduleStatus() {
    noConflict = confirm("Does the class schedule work with your life schedule? \n Press OK for YES \n Press Cancel for NO")
    return noConflict
}

    alert("Lets see if you are eligible to enroll in our summer classes.")

//CONDITIONS
    if (classStatus()) {

    } else {
        onclose(alert("Sorry!! :( \n Try again next semester."))
    }

    if (scheduleStatus()) {
        enrollmentStatus()
     } else {
         onclose(alert("Sorry to hear that... \n COME BACK IF YOU CHANGE YOUR MIND!"))
     }

//PROBLEM 3.4

// HOW MANY ITEMS IN CART
let cartCount;
function cartTotal() {
    cartCount = prompt("Everything is $20\nEnter total item amount you want in your Cart:")
    return cartCount
}

//CONDITIONS TO CONTINUE
    if (cartTotal() > 0) {

    } else {
        onclose(alert("NO LOITERING!!!!"))
    }

//PREMIUM MEMBER CHECK / SIGN UP
let isMember;
function premiumMember(){
    isMember = confirm("Are you a Premium Member with us? \n Press OK for YES \n Press Cancel for NO")
    return isMember
}
let signUp;
function becomeMember () {
    signUp = confirm("Would you like to become a Premium Member?")
    return signUp
}

//DISCOUNT VALIDATION
let applyDiscount = .20;
function validDiscount() {
        return (cartCount * 20) * applyDiscount
    }

//CHECKOUT

function checkOut () {
        return cartCount * 20
    }

//CONDITIONS FOR SIGN UP
    if (premiumMember()) {
        return alert("Your checkout total is $" + validDiscount())
    } else {

    }
    if (becomeMember()) {
        return alert("Your checkout total is $" + validDiscount())
    } else {
        return alert("Your checkout total is $" + checkOut())
    }


} ())


