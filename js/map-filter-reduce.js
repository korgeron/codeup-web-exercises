const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// const threeLanguages = users.filter(function (user){
//     return (user.languages.length >= 3) ? user : null
// });
// console.log(threeLanguages);
//
// const emailArray = users.map(function (user){
//     return user.email
// });
// console.log(emailArray);
//
// const totalYearsExperience = users.reduce(function (total ,user) {
//     if (user.yearsOfExperience){
//         return  total += user.yearsOfExperience / users.length
//     }
// }, 0);
// console.log(totalYearsExperience);
//
// const longestEmail = users.reduce(function (email ,user){
//    return (user.email.length < email.email.length) ? email : user
// });
// console.log(longestEmail);
//
// const listOfUserNames = users.reduce(function (name ,user){
//     // console.log(user.name);
//     // console.log(name);
//     return (name !== user.name) ? name + ', ' + user.name  : null
//
// },'')
// console.log( `Your instructors are${ listOfUserNames}. But not really... its just david`);