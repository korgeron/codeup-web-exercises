
let character = document.querySelector('#playerCharacter');
let x = 100;
let y = 100;
let val = 10;

let jump = character.style.top = `${y}px`;
character.style.left = `${x}px`;

console.log(jump);

document.querySelector('body').addEventListener('keydown', (e) => {
    console.log(e.code);
   if (e.code === 'KeyA'){
        --x
   }
})

console.log(jump);