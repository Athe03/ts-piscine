interface Employe {
    nom: string;
    poste: string;
}
interface Client {
    nom: string;
    entreprise: string;
}
type PersonnePro = Employe | Client;
declare function afficherInfoProfessionnelle(pro: PersonnePro): void;
declare let employe1: PersonnePro;
declare let client1: PersonnePro;
