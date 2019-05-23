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


//OBJECT LITERAL ENHANCEMENT (CLASE 18)
const banda = 'Metallica'
const genero = 'Heavy Metal'
const canciones = ['Master of Puppets','Seek & Destroy','One']

    //Forma anterior de hacer enhancement 
// const metallica = {
//     banda : banda,
//     genero : genero,
//     canciones : canciones
// }
// console.log(metallica)
    //Forma nueva de hacer enhancemet 
const metallica = {banda, genero, canciones}
console.log(metallica)


// METODOS O FUNCIONES EN UN OBJETO (CLASE 19)
const persona = {
    nombre: 'Juan',
    trabajo: 'Desarrollador Web',
    edad: 500,
    musicRock: true,
    mostrarInformacion(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es de ${this.edad} anios`)
    }
}
persona.mostrarInformacion();


// ARREGLOS, .map Y object.key  (CLASE 20)
const carrito = ['Producto 1','Producto 2','Producto 3'];
console.log(carrito);
carrito.map( producto => {
    console.log(`El producto es el ${producto}`);
} )

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500,
    sexo: 'masculino'
}
console.log(Object.keys(persona))

//  SPREAD OPERATOR (CLASE 21)
    // combinar arreglos, clonar un arreglo
let lenguajes = ['JavaScript','PHP','Python'];
let framework = ['ReactJC','Laravel','Django'];
let combinacion = [...lenguajes,...framework];
console.log(combinacion)


//(CLASE 22)(CLASE 22)(CLASE 22)(CLASE 22)(CLASE 22)(CLASE 22)
// .filter . find  .reduce
const personas = [
    {nombre: 'Juan', edad: 23, aprendiendo: 'JavaScript'},
    {nombre: 'Pablo', edad: 18, aprendiendo: 'PHP'},
    {nombre: 'Alejandra', edad: 21, aprendiendo: 'AdoveXD'},
    {nombre: 'Karen', edad: 30, aprendiendo: 'Python'},
    {nombre: 'Miguel', edad: 35, aprendiendo: 'ReactJS'}
];
    // .filter   mayores a 28 años
let personas28 = personas.filter(persona => {
    return persona.edad > 28;
})
console.log(personas28);
    // .find 
const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra'
})
console.log(alejandra)
    // .reduce para hacer la sumatoria
let total = personas.reduce((edadTotal,persona) => {
    return edadTotal + persona.edad;
},0)   // El cero es el offser
console.log(total/personas.length)
*/

//(CLASE 23)(CLASE 23)(CLASE 23)(CLASE 23)(CLASE 23)(CLASE 23)
// PROMISES = PROMESAS; llamado asincrono;  sirve para realizar procesos en segundo plano
const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {    //Creando un Delay    
        let descuento = false;
        if(descuento) {
            resolve('Descuento aplicado!!   :)')    //Resolve lo que es correto
        }else{
            reject('Descuento no aplicado!! :(')    //Reject lo que es incorrect
        }
    },3000) // Delay de 3000 mseg
});
    //Para mandar a llamar el promise
aplicarDescuento
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

