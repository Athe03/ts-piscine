interface Employe {
    nom: string;
    poste: string;
}

interface Client {
    nom: string;
    entreprise: string;
}

type PersonnePro = Employe | Client;

function afficherInfoProfessionnelle(pro: PersonnePro){
    if("poste" in pro) {
        console.log("Employé : " + pro.nom + " travaille comme " + pro.poste);
    }
    
    if("entreprise" in pro) {
        console.log("Client : " + pro.nom + " travaille pour " + pro.entreprise);
    }
}

let employe1: PersonnePro = {nom: "Jean", poste: "Développeur"};
let client1: PersonnePro = {nom: "Marie", entreprise: "Google"};

afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);