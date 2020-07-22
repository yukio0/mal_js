'use strict';

function pr_str(inputObj){
    let typeOfInputObj = typeof inputObj;
    if(!inputObj.length){
        return '';
    }
    switch(typeOfInputObj){
        case 'object' :
            let tmpObj = inputObj.map((a) => {return pr_str(a)});
            return "(" + tmpObj.join(' ') + ")";
        case 'number' :
            return ""+ inputObj;
        case 'string' :
            return inputObj;
    }
}

exports.pr_str = pr_str;