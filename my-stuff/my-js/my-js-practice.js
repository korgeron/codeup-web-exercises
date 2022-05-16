//TODO:
// make function to take in array and return
// the array in alphabetical order

// let thisArray = ['Hello World nfhs hsfhs hsfsd'];
//
// console.log(thisArray);
//
// function isAlphabetical(arr) {
//     let bucket = [];
//     bucket.push(arr.toString().toLowerCase().split('').sort().join('').trim());
//     return bucket;
// }
//
// console.log(isAlphabetical(thisArray));


//TODO:
// Write a function, getOlder() that takes in array of dog objects
// and increases the value of each object's age property by 1.

// let dogObject = [
//     {
//         name: 'bluey',
//         breed: 'lab',
//         age: 1
//     },
//
//     {
//         name: 'momo',
//         breed: 'pug',
//         age: 5
//     },
//
//     {
//         name: 'boomboom',
//         breed: 'pit-bull',
//         age: 20
//     }
//
// ];
// function getsOlder(arr){
//     for (let elem of arr){
//         let theirAge = elem.age;
//         let newAge = theirAge + 1;
//    let result = elem.name + ' the ' + elem.breed + ' was ' + theirAge + ' years old, now they are ' + newAge + ' years old.'
//         console.log(result);
//     }
//
// }
// getsOlder(dogObject);

//TODO: THIS FUNCTION ADDS NUMBERS OF OBJECT AND RETURNS THE SUM
// function sumOfObject(x){
//     let bucket = 0;
//     for (let i = 0; i < x.length; i++){
//         bucket += x[i];
//     }
//     return bucket;
// }




//TODO: https://java.codeup.com/extra-exercises/javascript/arrays-and-objects/

//TODO: # 1
// Write a function, filterNumbers() that takes in an array of mixed data types
// and returns an array of only the numbers type in ascencding order.

function filterNumbers (arr) {
    let bucket = [];
    arr.forEach(function (item){
        if(typeof item === 'number'){
            bucket.push(item);
        }
    })
    return bucket.sort();
}
filterNumbers(["fred", true, 5, 3]);

//TODO: # 2
// Write a function, getOlder() that takes in array of dog objects
// and increases the value of each object's age property by 1

let myDogArr = [
    {
        breed: 'Lab',
        hairColor: 'Black',
        age: 1
    },
    {
        breed: 'Lab',
        hairColor: 'Yellow',
        age: 9
    },
    {
        breed: 'Bulldog',
        hairColor: 'Tan',
        age: 5
    }
]


function getOlder(arr){
    for (let myArr of arr){
        // console.log(myArr);
       myArr.age += 1;
        // console.log(myArr);
    }
}
getOlder(myDogArr);

//TODO: # 3
// Write a function, washCars() that takes in a array of car objects
// and sets the boolean properties of isDirty to false.

let carsHere = [
    {
        make: 'Honda',
        model: 'Civic',
        paintColor: 'White',
        isDirty: true
    },
    {
        make: 'Hyundai',
        model: 'Tuscon',
        paintColor: 'Blue',
        isDirty: true
    },
    {
        make: 'Ford',
        model: 'F-150',
        paintColor: 'Black',
        isDirty: true
    }
];

function  washCars(arr){
    for (let myArr of arr){
        // console.log(myArr);
        myArr.isDirty = false;
        // console.log(myArr);
    }
}
washCars(carsHere);

//TODO: # 4
// Write a function, adminList() that takes in an array of user objects
// and returns a count of all admins based on the isAdmin property.
// Refactor to return an array of admin-only user emails.
// Refactor again to return an array of user objects that are admins.

// let test = [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     }
// ];

let userList = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];

function adminList(arr){
    let counter = 0;
    arr.forEach(function (user){
        if (user.isAdmin === true) {
            user.isAdmin = 1;
           counter += user.isAdmin
        }
    })
    console.log(counter);
}
adminList(userList);

//TODO: # 5
// Create a function, makeSandwhichObjects() that takes in two array of strings,
// breads and fillings and returns an array of sandwhichObjects that contain properties
// for bread and filling and values correspond to the same order of the two passed in arrays.
// Assume the two array inputs are the same length.

