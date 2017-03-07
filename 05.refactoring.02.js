"use strict";

// Yor code here ...
//Ваш код реализации функции dscount
// ... //
function findScore(vote) {
    let score = Math.ceil(vote / 20);
    return drawRating(score);
}

function drawRating(score) {
    let stars = '☆☆☆☆☆';
    switch (score) {
        case 0:
        case 1:
            stars = '★☆☆☆☆';
            break;
        case 2:
            stars = '★★☆☆☆';
            break;
        case 3:
            stars = '★★★☆☆';
            break;
        case 4:
            stars = '★★★★☆';
            break;
        case 5:
            stars = '★★★★★';
            break;     
    }
    return stars;
}


console.log(findScore(0)+" == ★☆☆☆☆"); // ★☆☆☆☆
console.log(findScore(1)+" == ★☆☆☆☆"); // ★☆☆☆☆
console.log(findScore(50)+" == ★★★☆☆"); // ★★★☆☆
console.log(findScore(99)+" == ★★★★★"); // ★★★★★