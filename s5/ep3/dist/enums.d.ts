declare enum Direction {
    nord = "Nord",
    sud = "Sud",
    est = "Est",
    ouest = "Ouest"
}
declare function vecteurDirection(direction: Direction): [number, number];
declare function deplacer(point: [number, number], direction: Direction): [number, number];
declare let pointInit: [number, number];
