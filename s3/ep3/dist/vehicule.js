"use strict";
function isVehicule(obj) {
    if (typeof obj.marque === 'string' && typeof obj.annee === 'number') {
        return true;
    }
    else {
        return false;
    }
}
function afficherVehicule(obj) {
    if (isVehicule(obj)) {
        console.log("Le véhicule " + obj.marque + " de l'année " + obj.annee + " est valide.");
    }
    else {
        console.log("Objet invalide pour un véhicule.");
    }
}
let obj1 = { marque: "Toyota", annee: 2015 };
let obj2 = { modele: "Clio", annee: 2008 };
let obj3 = { modele: "Fiesta" };
afficherVehicule(obj1);
afficherVehicule(obj2);
afficherVehicule(obj3);
