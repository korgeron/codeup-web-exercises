// FOR THE PURPOSE OF WRITING NEW CODE FOR EXTERNAL.JS
"use strict";
(function () {


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


alert("Your total is " + "$" +(total1 + total2 + total3) + ".");

} ())