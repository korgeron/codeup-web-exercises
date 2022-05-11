console.log("Yay! I completed the warm-up!");

//FizzBuzz
/**TODO:
 * fizzBuzz
 * log "fizz" if number is evenly divided by 3
 * log "buzz" if number is evenly divided by 5
 * log "FizzBuzz" if evenly divided by both
 * log the number if not evenly divided by either
 **/
//MY WORK
// function fizzBuzz(x){
//
//     if ((x / 5) % 2 === 0){
//         console.log("Buzz");
//     } else if ((x / 3) % 2 === 0){
//         console.log("Fizz");
//     }// else if ((x / 3) % 2 === 0 && ((x / 5) % 2 === 0)){
//        // console.log("FizzBuzz");
//     //}
//        // console.log(x);
//
// }
// fizzBuzz(5);

//TODO:WALK THROUGH
// function fizzBuzz(limit){
//     if (limit === undefined){
//         limit = 100;
//     }
//     for(let i = 1; i<= limit; i++) {
//         if (i % 15 === 0) {
//             console.log("FizzBuzz");
//             if (i % 3 === 0) {
//                 console.log("Fizz");
//             } else if (i % 5 === 0) {
//                 console.log("Buzz");
//             } else {
//                 console.log(i);
//             }
//         }
//     }
// }
// fizzBuzz();

//TODO:ANOTHER WAY TO DO THIS PROBLEM
// function fizzBuzz() {
//     for (let count = 1; count <= 100; count++) {
//         switch (true) {
//             case (count % 3 === 0 && count % 5 === 0) :
//                 console.log('FizzBuzz');
//                 break
//             case (count % 3 === 0) :
//                 console.log('Fizz');
//                 break
//             case (count % 5 === 0) :
//                 console.log('Buzz');
//                 break
//             default :
//                 console.log('' + count);
//         }
//     }
// } fizzBuzz();


//DATE: 04/27/22

// function firstLetters(myArr){
//     let b = '';
//     for (let arr of myArr)
//         b += arr[0];
//             console.log(b);
// }
// firstLetters(['dog' , 'wolf', 'monkey', 'bear']);

//DATE: 04/28/2022
// function alphabetOrder (str) {
//     if (typeof str === 'string') {
//         return str.split('').sort().join('')
//     }
// }
// console.log(alphabetOrder("bikes"));

//DATE: 05/02/2022
//TODO: WALK THROUGH
// function sumOfElements(arr){
//     let bucket = 0;
//     for (let el of arr){
//         bucket += el;
//     }
//         return bucket;
// }
// console.log(sumOfElements([1, 2, 3, 4, 5]));

//DATE: 05/03/2022
// let product1 = {
//     name: 'Hammar',
//     priceInCents: 400,
//     description: 'It is a a hammar.',
//     inventory: 25034
// }
//
// let product2 = {
//     name: 'Computer',
//     priceInCents: 40000,
//     description: 'It is a computer.',
//     inventory: 33000
// }
//
// let product3 = {
//     name: 'Ruler',
//     priceInCents: 1000,
//     description: 'It is a ruler.',
//     inventory: 2200
// }
// let products = [product1, product2, product3];
//
// function returnProductEssentialDetails (x) {
//    if (typeof x === 'object'){
//         return 'Name: ' + x.name + ' , ' + x.priceInCents
//    }
// }
// console.log(returnProductEssentialDetails(product1));
// console.log(returnProductEssentialDetails(product2));
// console.log(returnProductEssentialDetails(product3));


// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "Spetember 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
//
// function isTallestObject (input) {
//  let tallest = {heightInMM: 0}
//     for (let hamster of input){
//         if (hamster.heightInMM > tallest.heightInMM){
//              tallest = hamster
//         }
//     }
//             return tallest
// }
//
// console.log(isTallestObject(hamsters));


function makeObjectFromString (str) {
const obj = {}
    obj.string = str;
    obj.size = str.length;
    obj.isOneWord = str.indexOf(' ') < 0;
    let lc = str.toLowerCase();
        obj.containsLetterFromRSTLNE = lc.includes('r' || lc.includes('s' || lc.includes('t' || lc.includes('l' || lc.includes('n' || lc.includes('e'))))));
            return obj;
}

console.log(makeObjectFromString('kevin'));