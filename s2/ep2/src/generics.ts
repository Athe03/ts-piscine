interface Lengthwise {
    length: number;
}

function premierElement<T extends Lengthwise>(tableau: T[]): T {
    if(tableau.length <= 0){
        console.error("Tableau vide");
    }

    return tableau[0];
}

let tabStr: string[] = ["a", "b", "c"];
let tabNum: string[] = [];

console.log(premierElement(tabStr));
console.log(premierElement(tabNum));