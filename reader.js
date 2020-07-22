'use strict';

class Reader{
    constructor(token){
        this.token = token;
        this.position = 0;
    }

    next() {
        return this.token[this.position++];
    }

    present() {
        return this.token[this.position];
    }
}

function read_str(str){
    let token = tokenize(str);
    let reader = new Reader(token);
    return read_form(reader);
}

function tokenize(str){
    const regExp = /[\s,]*(~@|[\[\]{}()'`~^@]|"(?:\\.|[^\\"])*"?|;.*|[^\s\[\]{}('"`,;)]*)/g;
    let tokens = [];
    let matchedStr;
    while ((matchedStr = regExp.exec(str)[1])) {
        tokens.push(matchedStr);
    }
    return tokens;
}

function read_form(reader){
    let token = reader.present();
    switch(token){
        case '(' :
            return read_list(reader);
        default :
            return read_atom(reader);
    }
}

function read_list(reader){
    let token = reader.next();
    if(token !== '(')
        process.exit(1);
    let tokensList = [];
    while((token = reader.present()) !== ')'){
        if(!token)
            process.exit(1);
        tokensList.push(read_form(reader));
    }
    reader.next();

    return tokensList;
}

function read_atom(reader){
    return reader.next();
}

exports.read_str = read_str;