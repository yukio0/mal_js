'use strict';
let readLineSync = require("readline-sync");

function READ(str){
    return str;
}

function EVAL(str){
    return str;
}

function PRINT(str){
    return str;
}

function rep(str){
    return PRINT(EVAL(READ(str)));
}

while(true){
    let input = readLineSync.question("user> ");
    if(input === null)
        break;
    else
        console.log(rep(input));
}