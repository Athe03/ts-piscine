"use strict";
function creerScore(nom, score) {
    return [nom, score];
}
function afficherScore(score) {
    console.log("Le joueur " + score[0] + " a un score de " + score[1] + ".");
}
let score = creerScore("Bob", 42);
afficherScore(score);
