console.log("Yay! I completed the warm-up!");

//FizzBuzz
/**TODO:
 * fizzBuzz
 * log "fizz" if number is evenly divided by 3
 * log "buzz" if number is evenly divided by 5
 * log "FizzBuzz" if evenly divided by both
 * log the number if not evenly divided by either
 **/

function fizzBuzz(x){

    if ((x / 5) % 2 === 0){
        console.log("Buzz");
    } else if ((x / 3) % 2 === 0){
        console.log("Fizz");
    }// else if ((x / 3) % 2 === 0 && ((x / 5) % 2 === 0)){
       // console.log("FizzBuzz");
    //}
       // console.log(x);

}
fizzBuzz(5);