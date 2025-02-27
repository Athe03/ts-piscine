"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log("L'animal " + this.nom + " se déplace.");
    }
}
class Chien extends Animal {
    seDeplacer() {
        console.log("Le chien " + this.nom + " court.");
    }
}
class Chat extends Animal {
    seDeplacer() {
        console.log("Le chat " + this.nom + " saute.");
    }
}
function faireSeDeplacer(animaux) {
    for (let animal of animaux) {
        animal.seDeplacer();
    }
}
let animal = new Animal("Léo");
let animaux = [new Chien("Nayjjy"), new Chat("Riley"), new Chat("Rocket")];
animal.seDeplacer();
faireSeDeplacer(animaux);
