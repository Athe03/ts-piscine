"use strict";
class Rectangle {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
function afficherSurface(forme) {
    if (forme instanceof Rectangle) {
        console.log("Ceci est un rectangle de surface " + forme.calculerSurface() + ".");
    }
    if (forme instanceof Cercle) {
        console.log("Ceci est un cercle de surface " + forme.calculerSurface() + ".");
    }
}
const rectangle = new Rectangle(10, 5);
const cercle = new Cercle(5);
afficherSurface(rectangle);
afficherSurface(cercle);
