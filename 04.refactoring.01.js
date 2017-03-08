"use strict";

// Yor code here ...
//Нахождение позиции самого дальнего из двух символов
function findLastCharIndex(originalStr, frstChar, scndChar) {
    let frstCharIndex = originalStr.lastIndexOf(frstChar);
    let scndCharIndex = originalStr.lastIndexOf(scndChar);
    return (frstCharIndex > scndCharIndex) ? frstCharIndex : scndCharIndex;
}

// Проверка работы результата
console.log(findLastCharIndex('hippopotamus','s','h')+" == 11"); // 11
console.log(findLastCharIndex('hippopotamus','h','s')+" == 11"); // 11
console.log(findLastCharIndex('hippopotamus','v','l')+" == -1"); // -1
console.log(findLastCharIndex('hippopotamus','r','l')+" == -1"); // -1
console.log(findLastCharIndex('hippopotamus','l','o')+" == 6"); // 6
console.log(findLastCharIndex('hippopotamus','i','a')+" == 8"); // 8
console.log(findLastCharIndex('hippopotamus','t','u')+" == 10"); // 10
console.log(findLastCharIndex('hippopotamus','m','a')+" == 9"); // 9
console.log(findLastCharIndex('','l','o')+" == -1"); // -1