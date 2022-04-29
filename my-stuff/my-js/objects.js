//USED AS DEMONSTRATION TO HELP CLASSMATE
let books = [
    {
        title: 'Odds on Ends',
        author:{
            firstName: 'Molly',
            lastName: 'Giles'
        }
    },
    {
        title: 'Writing and Moaning',
        author:{
            firstName: 'Alan',
            lastName: 'Cheuse'
        }
    },
    {
        title: 'The Writer as Midwife',
        author:{
            firstName: 'Daniel',
            lastName: 'Halpern'
        }
    },
    {
        title: 'Tendril: A Brief History',
        author: {
            firstName: 'Mari',
            lastName: 'Lonano'
        }
    },
    {
        title: 'Rules & Reality in Fiction',
        author: {
            firstName: 'Ron',
            lastName: 'Tanner'
        }
    }
];
for(let book of books){
    book.number = 1;
    console.log(book);
}
console.log(books);


// console.log(books);
// console.log(books[0].title);
// console.log(books[0].author.firstName);
// console.log(books[0].author.lastName);