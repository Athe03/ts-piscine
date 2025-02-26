"use strict";
function traiterValeur(param) {
    if (typeof param === 'string') {
        console.log(param.length);
    }
    else {
        console.log(param * 2);
    }
}
traiterValeur('Hello');
traiterValeur(5);
