"use strict";

// Yor code here ...
//Ваш код реализации функции dscount
// ... //

function parseUrl(urlString) {
    let parseObj = document.createElement('a');
    parseObj.href = urlString;
    return parseObj;
}

let a = parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')


console.log(a.href+" == http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo");// == "http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo"
console.log(a.hash+" == #foo");// == "#foo"
console.log(a.port+" == 8080");// == "8080"
console.log(a.host+" == tutu.ru:8080");// == "tutu.ru:8080"
console.log(a.protocol+" == http:");// == "http:"
console.log(a.hostname+" == tutu.ru");// == "tutu.ru"
console.log(a.pathname+" == /do/any.php");// == "/do/any.php"
console.log(a.origin+" == http://tutu.ru:8080");// == "http://tutu.ru:8080"