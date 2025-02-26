interface Personne {
    nom: string;
    age: number;
    readonly id: number;
    adresse?: Adresse;
}

interface Adresse {
    rue: string;
    ville: string;
}

function afficherPersonne(personne: Personne) {
    console.log("Bonjour, je m'appelle " + personne.nom + " et j'ai " + personne.age + " ans.");
}

function afficherPersonneAvancee(personne: Personne) {
    if(personne.adresse) {
        console.log("Bonjour, je m'appelle " + personne.nom + " (ID: " + personne.id + "), j'ai " + personne.age + 
            " ans et j'habite au " + personne.adresse.rue + ", " + personne.adresse.ville + ".");
    } else {
        console.log("Bonjour, je m'appelle " + personne.nom + " (ID: " + personne.id + ") et j'ai " + personne.age + " ans.");
    }
}

//let personne1: Personne = {nom: "Alice", age: 30};

let personne2: Personne = {nom: "Bob", age: 25, id: 1, adresse: {rue: "123 rue Principale", ville: "Montréal"}};
let personne3: Personne = {nom: "Charlie", age: 35, id: 2};

//afficherPersonne(personne1);
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
