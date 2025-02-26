"use strict";
function afficherInfoProfessionnelle(pro) {
    if ("poste" in pro) {
        console.log("Employé : " + pro.nom + " travaille comme " + pro.poste);
    }
    if ("entreprise" in pro) {
        console.log("Client : " + pro.nom + " travaille pour " + pro.entreprise);
    }
}
let employe1 = { nom: "Jean", poste: "Développeur" };
let client1 = { nom: "Marie", entreprise: "Google" };
afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);
