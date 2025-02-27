declare abstract class Forme {
    abstract calculerSurface(): number;
}
declare class Rectangle extends Forme {
    largeur: number;
    hauteur: number;
    constructor(largeur: number, hauteur: number);
    calculerSurface(): number;
}
declare class Cercle extends Forme {
    rayon: number;
    constructor(rayon: number);
    calculerSurface(): number;
}
declare let rectangle: Forme;
declare let cercle: Forme;
