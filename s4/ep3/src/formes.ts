abstract class Forme {
    abstract calculerSurface(): number;
}

class Rectangle extends Forme {
    largeur: number;
    hauteur: number;

    constructor(largeur: number, hauteur: number) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }
}

class Cercle extends Forme {
    rayon: number;

    constructor(rayon: number) {
        super();
        this.rayon = rayon;
    }

    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;
    }
}

let rectangle: Forme = new Rectangle(10, 20);
let cercle: Forme = new Cercle(5);

console.log(rectangle.calculerSurface());
console.log(cercle.calculerSurface());