interface Vehicule {
    marque: string;
    annee: number;
}
declare function isVehicule(obj: any): obj is Vehicule;
declare function afficherVehicule(obj: any): void;
declare let obj1: {
    marque: string;
    annee: number;
};
declare let obj2: {
    modele: string;
    annee: number;
};
declare let obj3: {
    modele: string;
};
