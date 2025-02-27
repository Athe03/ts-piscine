enum Direction {
    nord = 'Nord',
    sud = 'Sud',
    est = 'Est',
    ouest = 'Ouest'
}

function vecteurDirection(direction: Direction): [number, number] {
    switch (direction) {
        case Direction.nord:
            return [0,1];
        case Direction.sud:
            return [0,-1];
        case Direction.est:
            return [1,0];
        case Direction.ouest:
            return [-1,0];
    }
}

console.log(vecteurDirection(Direction.nord));
console.log(vecteurDirection(Direction.sud));
console.log(vecteurDirection(Direction.est));
console.log(vecteurDirection(Direction.ouest));