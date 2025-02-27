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

let animal: IAnimal = new Animal("Léo");
animal.seDeplacer();