"use strict";
//PROBLEM 1
let multiplesOfTwo = function (){
    let num = 1;
        while (num < 65536){
            num = num * 2;
            console.log(num);
        }

}
multiplesOfTwo();

//PROBLEM 2 (DO WHILE LOOP)

function iceCreamTruckProgram () {

    let allCones = Math.floor(Math.random() * 51) + 50;
        do {
            let iceCreamOrder = Math.floor(Math.random() * 5) + 1;
                console.log("Customer orders " + iceCreamOrder + " cone(s). We have " + allCones + " left in stock.");
            if (iceCreamOrder > allCones) {
            console.log("Cant do this order...Sorry!");
            } else {
                allCones -= iceCreamOrder;
                console.log("We have " + allCones + " cones left in stock.");
        }
    } while (allCones > 0);

    console.log("Man! That was rough... Sold out of all my cones.");
}

iceCreamTruckProgram();