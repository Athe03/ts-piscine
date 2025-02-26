"use strict";
function premierElement(tableau) {
    if (tableau.length <= 0) {
        console.error("Tableau vide");
    }
    return tableau[0];
}
let tabStr = ["a", "b", "c"];
let tabNum = [];
console.log(premierElement(tabStr));
console.log(premierElement(tabNum));
