"use strict";
function afficherPersonne(personne) {
    console.log("Bonjour, je m'appelle " + personne.nom + " et j'ai " + personne.age + " ans.");
}
let personne1 = { nom: "Alice", age: 30 };
afficherPersonne(personne1);
