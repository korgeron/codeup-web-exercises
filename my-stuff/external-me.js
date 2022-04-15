// FOR THE PURPOSE OF WRITING NEW CODE FOR EXTERNAL.JS
"use strict";
(function () {

//WHAT TO DO
    /*
    * ask if they would like to rent a movie for 3$ a day
    * let them choose what movie to pick
    * let them choose how many days they want the movie for
    * list the total price of the transaction
    */

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
    return confirm("Your choices are: " + movie1 +", "+ movie2 +", "+"or "+ movie3 + ".") === true;
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
    (choice1().valueOf() >= 1)
    {
        let days1 = prompt("Enter number of days you would like to rent for:") === true;
        days1
    }


//SECOND MOVIE CHOICE
function choice2 () {
    return confirm("Would you like to rent " + movie2 + "?")
}
    if (choice2().valueOf() >= 1) {
        let days2 = prompt("Enter number of days you would like to rent for:")
        return days2
    } else {}

} ())