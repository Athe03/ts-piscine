"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log("L'animal " + this.nom + " se déplace.");
    }
}
let animal = new Animal("Léo");
animal.seDeplacer();
