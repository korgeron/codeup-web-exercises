"use strict";

//PROBLEM 1
/**TODO:
 * create for loop
 * takes in a number
 * console.log the times-table for that number input
 * times table goes from 1-10
 * ex. 7 x 1 = 7
 *     7 x 10 = 70
 **/
// function showMultiplicationTable(num){
//     for (let multiplyBy = 1;multiplyBy < 11;multiplyBy++){
//        let table = num * multiplyBy;
//        let answer = num +" x " + multiplyBy + " = " + table
//             console.log(answer);
//    }
// }
// showMultiplicationTable(7);

//PROBLEM 2
/**TODO:
* create for loop
 * generate 10 random numbers (between 20 and 200
 * output to the console whether each number is odd or even
 **/
// function evenOrOdd() {
//     for (let cycleCount = 1; cycleCount < 11; cycleCount++) {
//         let numberGenerator = Math.floor(Math.random() * 181) + 20;
//
//         if (numberGenerator % 2 === 0) {
//             let isEven = (numberGenerator + " is even ")
//             console.log(isEven);
//             continue;
//         }
//             let isOdd = (numberGenerator + " is odd ")
//             console.log(isOdd);
//         }
//
// }
// evenOrOdd();

//PROBLEM 3
/**TODO:
 * create for loop
 * uses console.log
 * displays:
 * 1
 * 22
 * 333
 * 4444
 * 55555
 * 666666
 * 7777777
 * 88888888
 * 999999999
 **/

// function oneMoreNumber(){
//     for (let num = 1; num < 10; num++){
//         console.log(num.toString().repeat(num));
//     }
// }
// oneMoreNumber();

//TODO: WALK THROUGH
// function numberPyramid(){
//     for (let y = 1; y < 10; y++){
//         let str = "";
//     for (let x = 1; x <= y; x++){
//         str += y;
//     }
//         console.log(str);
//     }
// }





//PROBLEM 4
/**TODO:
 * create for loop
 * console log it
 * number starts at 100
 * decreases by 5 till it reaches 5
 **/
// for (let x = 100; x>=5;x-- + x-- + x-- + x-- + x--) {
//     console.log(x);
// }


//TODO: WALK THROUGH
// function downByFive(startVal){
//     for (startVal; startVal > 0; startVal -= 5){
//         console.log(startVal);
//     }
// }
// downByFive(100);