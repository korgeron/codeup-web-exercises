"use strict";
/**TODO:
 * prompt user for odd number between 1 and 50
 * use a loop and break statement to continue prompting user if invalid input
**/
function oddNumbers() {
    let i;

         while (true) {
             i = prompt('Give me an odd number between 1 and 50');
             if (i % 2 !== 0 && i <= 50 && i >= 1) {
                 break;
        }
    }           for (let x = 1; x <=50; x+=2) {
                    if (x === i){
                        console.log("oopse skipped " + i);
                        continue;
                    }
                             console.log(x);
    }
}
oddNumbers();