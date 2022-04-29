"use strict";
(function () {

let userName = prompt("Enter a username");
let userPass = prompt("Enter a password");

function passCheck (userpass){
    if (userpass === userPass){

    } else {
       alert("wrong password");
            return passCheck(prompt("Enter your password"));
    }
}

 function nameCheck (username){
    if (username === userName){

    } else {
        alert("wrong username!");
            return nameCheck(prompt("Enter your username"));
    }
 }

nameCheck(prompt("Enter your username"));
passCheck(prompt("Enter your password"));
} ())