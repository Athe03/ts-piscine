function creerScore(nom: string, score: number): [string, number] {
    return [nom, score];
}

function afficherScore(score: [string, number]) {
    console.log("Le joueur " + score[0] + " a un score de " + score [1] + ".");
}

let score = creerScore("Bob", 42);
afficherScore(score);