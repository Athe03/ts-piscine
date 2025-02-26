interface Personne {
    nom: string;
    age: number;
}

function afficherPersonne(personne : Personne) {
    console.log("Bonjour, je m'appelle " + personne.nom + " et j'ai " + personne.age + " ans.");
}

let personne1: Personne = {nom: "Alice", age: 30};

afficherPersonne(personne1);
