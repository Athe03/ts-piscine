"use strict";
class Forme {
}
class Rectangle extends Forme {
    constructor(largeur, hauteur) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
let rectangle = new Rectangle(10, 20);
let cercle = new Cercle(5);
console.log(rectangle.calculerSurface());
console.log(cercle.calculerSurface());
