// interface Lengthwise {
//     length: number;
// }

interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}

// function premierElement<T extends Lengthwise>(tableau: T[]): T {
//     if(tableau.length <= 0){
//         console.error("Tableau vide");
//     }

//     return tableau[0];
// }

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// let tabStr: string[] = ["a", "b", "c"];
// let tabNum: string[] = [];

let maVoiture: Voiture = {marque: "Renault", modele: "Clio 3", annee: 2008}

// console.log(premierElement(tabStr));
// console.log(premierElement(tabNum));

console.log(getProperty(maVoiture, "marque"));
console.log(getProperty(maVoiture, "annee"));