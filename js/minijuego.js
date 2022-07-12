//Definición de atributos de los personajes
class Personaje {
    constructor(id, nombre, carta, puntosVitales, puntosPoder, ataqueUnoDaño, ataqueUnoCosto, ataqueDosDaño, ataqueDosCosto, defensa, defensaCosto, habilidadPasiva) {
        this.id = id
        this.nombre = nombre;
        this.carta = carta
        this.puntosVitales = puntosVitales;
        this.puntosPoder = puntosPoder;
        this.ataqueUnoDaño = ataqueUnoDaño;
        this.ataqueUnoCosto = ataqueUnoCosto;
        this.ataqueDosDaño = ataqueDosDaño;
        this.ataqueDosCosto = ataqueDosCosto;
        this.defensa = defensa;
        this.defensaCosto = defensaCosto;
        this.habilidadPasiva = habilidadPasiva;
    }
}

//Asignación de atributos de los personajes
const personajes = [];
personajes.push(new Personaje(1, 'NARCISO', './img/narciso.png', 100, 100, 20, 10, 40, 25, vueloEvasivo(), 20, sangreFenix()));
personajes.push(new Personaje(2, 'LAUTARO', './img/lautaro.png', 100, 100, 20, 20, boleadoras(), 10, ojosAguila(), 10, velocidadPuma()));
personajes.push(new Personaje(3, 'CIRO', './img/ciro.png', 80, 80, 10, 10, 25, 25, regeneracionPolvo(), null, mimetizacionArena()));
personajes.push(new Personaje(4, 'ALEK', './img/alek.png', 120, 100, 20, 10, brazoArpon(), 25, visionHielo(), 20, defensaHierro()));
personajes.push(new Personaje(5, 'MELTA', './img/melta.png', 80, 120, 25, 20, descargaTierra(), 20, bloqueoDirecto(), 20, null));
personajes.push(new Personaje(6, 'TOGO', './img/togo.png', 80, 120, 25, 25, 50, 40, escudoHuesos(), 25, exoesqueleto()));

//Poderes especiales (PENDIENTE!!!)
function vueloEvasivo(){
    ataque1 = 1
};
function sangreFenix(){
    ataque2 = 2
};
function boleadoras(){
    ataque3 = 3
};
function ojosAguila(){
    ataque4 = 4
};
function velocidadPuma(){
    ataque5 = 5
};
function regeneracionPolvo(){
    ataque6 = 6
};
function mimetizacionArena(){
    ataque7 = 7
};
function brazoArpon(){
    ataque8 = 8
};
function visionHielo(){
    ataque9 = 9
};
function defensaHierro(){
    ataque10 = 10
};
function descargaTierra(){
    ataque11 = 11
};
function bloqueoDirecto(){
    ataque12 = 12
};
function escudoHuesos(){
    ataque13 = 13
};
function exoesqueleto(){
    ataque14 = 14
};

//Asignación de rival
function asignarRival(rival) {
    return rival[Math.floor(Math.random()*rival.length)]
}

let rivales = ['NARCISO', 'LAUTARO', 'CIRO','ALEK','MELTA','TOGO'];
let rivalAsignado = (asignarRival(rivales));
console.log(rivalAsignado);

//Mostrar rival asignado
function mostrarRival(lista, personaje){
    return lista.find(objeto => objeto.nombre === personaje);
}
const oponente = mostrarRival(personajes, rivalAsignado);
let cartaRival = oponente.carta;
document.getElementById("oponente").src = cartaRival;

//Comenzar
function mostrarAtaques(){
    document.getElementById("menudeataques").style.display = 'block';
    document.getElementById("comenzar").style.display = 'none';
    document.getElementById("reducirespacio1").style.display = 'none';
}

//Líneas de código con operadores avanzados

this.puntosVitales === 0 && console.log(this.nombre+" ha muerto en la batalla.")
this.puntosPoder === 0 && console.log(this.nombre+" ha perdido toda su energía y no puede continuar.")