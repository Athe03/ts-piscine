interface IAnimal {
    nom: string;

    seDeplacer(): void;
}

class Animal implements IAnimal {
    nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }

    seDeplacer() {
        console.log("L'animal " + this.nom + " se déplace.");
    }
}

class Chien extends Animal {
    seDeplacer() {
        console.log("Le chien " + this.nom + " court.");
    }
}

class Chat extends Animal {
    seDeplacer() {
        console.log("Le chat " + this.nom + " saute.");
    }
}

function faireSeDeplacer(animaux: IAnimal []) {
    for(let animal of animaux) {
        animal.seDeplacer();
    }
}

let animal: IAnimal = new Animal("Léo");
let animaux: IAnimal [] = [new Chien("Nayjjy"), new Chat("Riley"), new Chat("Rocket")];

animal.seDeplacer();
faireSeDeplacer(animaux);
