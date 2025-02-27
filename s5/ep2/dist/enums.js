"use strict";
var Direction;
(function (Direction) {
    Direction["nord"] = "Nord";
    Direction["sud"] = "Sud";
    Direction["est"] = "Est";
    Direction["ouest"] = "Ouest";
})(Direction || (Direction = {}));
function vecteurDirection(direction) {
    switch (direction) {
        case Direction.nord:
            return [0, 1];
        case Direction.sud:
            return [0, -1];
        case Direction.est:
            return [1, 0];
        case Direction.ouest:
            return [-1, 0];
    }
}
console.log(vecteurDirection(Direction.nord));
console.log(vecteurDirection(Direction.sud));
console.log(vecteurDirection(Direction.est));
console.log(vecteurDirection(Direction.ouest));
