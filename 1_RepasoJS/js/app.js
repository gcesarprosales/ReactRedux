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
*/
 const actividadUno = function(nombre = 'Mond', actividad = 'estudiante'){
     console.log(`La persna ${nombre} esta realizando la actividad ${actividad}`)
 }
actividadUno()
actividadUno('Cesar', 'tecleando')
