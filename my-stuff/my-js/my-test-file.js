//TODO: LOCAL STORAGE

//my user objects
const userOne = {
    name: 'Kevin',
    age: 28
}
const userTwo = {
    name: 'John',
    age: 45
}

//when adding something to local storage using setItem(); you need to convert to a string using JSON.stringify();
window.localStorage.setItem('userOne', JSON.stringify(userOne));
window.localStorage.setItem('userTwo', JSON.stringify(userTwo));

//to get items from local storage use the getItem()

// window.localStorage.getItem('userOne') <--- NOTE: THIS IS STILL IN STRING FORMAT!!!

//to use items from local storage you will have to convert them back using JSON.parse();
let userKevin = JSON.parse(window.localStorage.getItem('userOne'));
// console.log(userKevin);

//to delete items from localStorage

//removeItem() only removes items specified
window.localStorage.removeItem('userTwo');

// clear() removes all items in localStorage
window.localStorage.clear();

//TODO: we have to add a new item to local storage. NOTE: once added or deleted from storage, it will
// always be added or removed.

window.localStorage.setItem('userOne' , JSON.stringify(userOne));
let kevinOrgeron = JSON.parse(window.localStorage.getItem('userOne'));
console.log(kevinOrgeron);
//to look at key() value
let kevinsKey = window.localStorage.key(0);



//Console Log
console.log(window.localStorage);

//TODO: Functions

