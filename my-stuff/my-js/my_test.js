//THIS IS FOR INTERVIEW PRACTICE



//todo: try to refactor to be less space used (3 arrays is a little nasty)
// function plusMinus(arr) {
//     let bucket1 = [];
//     let bucket2 = [];
//     let bucket3 = [];
//     arr.forEach((num) => {
//         if (num > 0) {
//             bucket1.push(num);
//         }
//         if (num === 0){
//             bucket2.push(num);
//         }
//         if (num < 0){
//             bucket3.push(num);
//         }
//     })
//     let answer1 = bucket1.length / arr.length;
//     let answer2 = bucket2.length / arr.length;
//     let answer3 = bucket3.length / arr.length;
//     console.log(`${answer1.toFixed(6)} \n${answer3.toFixed(6)} \n${answer2.toFixed(6)}`)
// }
// plusMinus([1,1,0,-1,-1]);


//todo: maybe sort the array first?  seems like min sum is 0-3 of array added then divided by / and max is 1-4
// function miniMaxSum(arr) {
//     let answer1 = 0;
//     let answer2 = 0;
//     let sortedArr = arr.sort();
//     sortedArr.forEach((num , i)=>{
//         if (arr[(i + 1)]){
//             answer1 += num;
//         }
//         if (arr[(i - 1)]){
//             answer2 += num;
//         }
//     });
//     console.log(`${answer1} ${answer2}`);
// }
// miniMaxSum([1,3,5,7,9]);