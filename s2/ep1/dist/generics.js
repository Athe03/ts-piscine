"use strict";
function premierElement(tableau) {
    return tableau[0];
}
let tabStr = ["a", "b", "c"];
let tabNum = [1, 2, 3];
let tabObj = [{}, {}, {}];
console.log(premierElement(tabStr));
console.log(premierElement(tabNum));
console.log(premierElement(tabObj));
