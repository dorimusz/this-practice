"use strict";

function f1() {
    console.log(this)
}

f1();

//saját magára mutat vissza, minden föggvénynek van egy tulajdonosa
const v2 = { key1: this };
console.log(v2)

//eseménykezelés: a this magára az eventre mutat, vagyis az eseményobjektumra(tulaj)

//strict-mode: "use strict", nem a global object lesz, ezért undefinedot dob - inkább refernce error

//metódusok esetében  közvetlen parent objektumhoz fog kapcsolódni
const v3 = {
    key1: function () {
        console.log(this)
    }
}

v3.key1();

//nem az akutális objektumra mutat, hanem a globálisra
const v4 = {
    key1: () => {
        console.log(this)
    },
    key2: "string"
}
v4.key1();

//metódusként arrow functiont nem használunk!