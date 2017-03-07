"use strict";

function checkSyntax(strOrig) {
    var strNew;
    strOrig = strOrig.replace( /[^{}[\]()<>]/g, '' );
    while ( strNew != strOrig ) { 
        strNew = strOrig;
        strOrig = strOrig.replace( /{}|\[]|\(\)/g, '' );
    }
    if (!strOrig) {
        return 0;
    } else {
        return 1;
    }
}


console.log(checkSyntax("---(++++)----")); // 0
console.log(checkSyntax("")); //0
console.log(checkSyntax("before ( middle []) after ")); // 0
console.log(checkSyntax(") (")); // 1
console.log(checkSyntax("} {")); // 1
console.log(checkSyntax("<(   >)")); // 1
console.log(checkSyntax("(  [  <>  ()  ]  <>  )")); // 0
console.log(checkSyntax("   (      [)")); // 1