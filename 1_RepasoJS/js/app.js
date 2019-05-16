/*
// Crear variables

    //Variables con var puede ir sin valor
var aprendiendo = true;
aprendiendo99 = 'Juan';
console.log (aprendiendo);
console.log (aprendiendo99);
    
    //Variables con const siempre debe un valor de inicio y nunca cambia
const aprendiendo10 = 'JavaScript';
console.log (aprendiendo10);

    //Variables con let son parecidas a var
let aprendiendoLet;
console.log (aprendiendoLet);

//Scope con var
 
var musica = 'Rock';

if(musica){
    var musica = 'Grunge';
    console.log ('Dentro del IF: ', musica);
}
console.log('Fuera del IF: ', musica); 

//Scope con let y cons
let musica = 'Rock';

if(musica){
    let musica = 'Grunge';
    console.log ('Dentro del IF: ', musica);
}
console.log('Fuera del IF: ', musica);


//Template String
const nombre = 'Juan';
const trabajo = 'Desarrollador Web';

// concatenar en JavaScript antigüo nuevo
console.log ('Nombre: ' + nombre + ' trabajo: ' + trabajo);
console.log (`Nombre: ${nombre} Trabajo: ${trabajo}`);


//Funciones
//Funtion declaration
saludar('Juan')
function saludar(nombre){
    console.log(`Bienvenido ${nombre}`)
}
saludar('Cesar')

// Function expression
const cliente = function(nombreCliente){
    console.log(`Mostrando datos del cliente ${nombreCliente}`)
}
cliente('Carlos')



//Parametros por default en las funciones
function actividad(nombre = 'Mond', actividad = 'estudiando'){
    console.log(`La persona ${nombre} esta realizando la actividad ${actividad}`);
}
 actividad('Cesar','carpinteria');
 actividad('Pedro','un sitio web');
 actividad();
 actividad('Antonio ')

// const actividadUno = function(nombre = 'Mond', actividad = 'estudiante'){
//      console.log(`La persna ${nombre} esta realizando la actividad ${actividad}`)
//  }
// actividadUno()
// actividadUno('Cesar', 'tecleando')



//Arrow function
// let viajando = (destino, duracion) => {
//     return `Viajando a la ciduad de ${destino} por ${duracion}`;
// }

// let viaje;
// viaje = viajando('Barcelona','9 días')
// console.log(viaje)
let viajando = destino => `Viajando a la ciudad de ${destino}`;

let viaje;
viaje = viajando('Paris');
console.log(viaje)



//OBJETOS
//Objeto literal = Object Literal

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 500
}
console.log(persona)
console.log(persona.nombre)
console.log(persona['profesion'])
console.log(persona.edad)
console.log(persona['edad'])

//Object constructor
function Tarea(nombre,urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}
const tarea1 = new Tarea('Aprender JavaScript','Urgente')
const tarea2 = new Tarea('Lavar el carro','baja')


//PROTOTYPE
    //Object constuctor
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}
    //Agregar un Prototype  al objeto Tarea y crear la function mostrarInformacionTarea
Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene una urgencia de ${this.urgencia}`;
}
const tarea1 = new Tarea('Aprender a programar React','Urgente');
console.log(tarea1)
console.log(tarea1.mostrarInformacionTarea());
*/

//    CONTRUNCTING DE OBJETOS
//  Extraer valores de un objeto

const aprendiendoJS = {   // Objeto literal
    version: {
        nueva: 'ES6',
        vieja: 'ES5'
    },
    frameworks: ['ReactJS','VueJS','AngularJS']
}
// console.log(aprendiendoJS);

// let version = aprendiendoJS.version.vieja;
// console.log(version)
let {version, frameworks} = aprendiendoJS;
console.log(version)
console.log(frameworks)

let {vieja} = aprendiendoJS.version
console.log(vieja)



