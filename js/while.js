"use strict";
//PROBLEM 1
// let multiplesOfTwo = function (){
//     let num = 1;
//         while (num < 65536){
//             num = num * 2;
//             console.log(num);
//         }
//
// }
// multiplesOfTwo();

//PROBLEM 2 (DO WHILE LOOP)

function iceCreamSelling(){
    let allCones = Math.floor(Math.random() * 50) + 50;
    let orders = Math.floor(Math.random() * 5) + 1;

      do {
          console.log('I have ' + allCones + ' ice cream cones! The customer wants ' + orders + ' cones.');
          allCones -= orders;
          console.log('I now have ' + allCones);
      }while (allCones > 0);

}
iceCreamSelling();