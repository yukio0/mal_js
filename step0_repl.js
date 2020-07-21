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
    PRINT(EVAL(READ(str)));
}

while(true){
    let input = readLineSync.question("user> ");
    if(input === null)
        break;
    else
    process.stdout.write(input + "\n");
}