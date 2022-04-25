(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|")

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // GOT IT RIGHT BUT DID THE LONG WAY
let planetBr = "Mercury<br>Venus<br/>Earth<br/>Mars<br/>Jupiter<br/>Saturn<br/>Uranus<br/>Neptune";
    console.log(planetBr);

//TODO: WALK THROUGH
// let planetWalkThrough = planetsArray.join("<br>");

//TODO: BONUS
//     document.body.innerHTML += planetBr;
//     let planetsUl = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
//     document.body.innerHTML += planetsUl;
} ())
