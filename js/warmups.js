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

//DATE: 04/28/22
function alphabetOrder (str) {
    if (typeof str === 'string') {
        return str.split('').sort().join('')
    }
}
console.log(alphabetOrder("bikes"));