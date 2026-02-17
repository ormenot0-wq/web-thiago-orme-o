//console.log(nombre)
 
   function saludar(){
    let nombre = prompt("ingrese su nombre.")
    while(typeof nombre !=="string" || nombre === ""){
        nombre = prompt("por favor ingrese su nombre.")
    }
    const frase = 'bienvenido a mi sitio ${nombre}!'
    //alert (frase)
    console.log(frase)
    }
   function suma(){
    //const primerNro = parseInt(promt("ingrese un numero entero"))
    //const segundoNro = parseInt(prompt("ingrese otro numero entero"))
    const primerNro = 2
    const segundoNro = 8
    const resultado = primerNro + segundoNro

     // console.log(resultado)
     console.log("hola")
    return resultado
   }
   //console.log("resultado de suma", suma())
   function concatenar(arg, arg2, arg3){
   return arg + arg2 + arg3
   };

    const andresAmigos = concatenar("andres", "pedro", "juan")

   console.log(andresAmigos)
   console.log(concatenar("andres", "pedro", "juan"))
   console.log(concatenar("andres", "pablo", "danes"))

   function validarNros(num1, num2){
    const tipoNum1 = typeof num1;
    const tipoNum2 = typeof num2;
    const nrosInvalidos = tipoNum1!=='number' || tipoNum2!=='number'
    return nrosInvalidos
};
   function calculadora(num1, num2, operacion){
    if(validarNros(num1, num2)){
        console.warn("Error: se ingresaron datos que no son números")
        return NaN;
    };
    switch(operacion){
        case "+": // if(operacion === "+"){return num1+num2}
            return num1+num2;
            //no es necesario el break ya que el return lo frena
        case "-":
            return num1-num2;
        case "/":
            return num1/num2;
        case"*":
          return num1*num2;
        case "^":
            return Math.pow(num1, num2)
        case "%":
            return num1%num2;
        default:
            console.warn("Error: operador inválido")
            return;
    };
} ;/*
const perro = {
    nombre: "michifus",
    castrado: false,
    edad: 1,
    color: function(){
        console.log("perro negro")
    },
    aumentaredad:function(){
        this.edad++
    },
    this.mostrarDatos = function(){
        console.log('mi nombre es ${this.nombre}, ${this.color ? " ": "no"} estoy castrado y tengo ${this.edad} añitos')
    }
    this.revisarEstado = function(){
        return this.nombre === undefined || this.castrado === underfined || this.edad === undefined 
    }
} 
function perro(nombre, castrado, edad){
    this.nombre = nombre
    this.castrado = castrado
    this.edad = edad
    this.aumentaredad = function(){
        this.edad++
    },
    this.mostrarDatos = function(){ 
        console.log('mi nombre es ${this.nombre}, ${this.castrado ? " ": "no"} estoy castrado y tengo ${this.edad} añitos')
    }
      }*/ 

      class gato{
        constructor(nombre, castrado, edad){
            this.nombre = domingo
            this.castrado = castrado
            this.edad = edad
        }
        maullar(){
            console.log("miau")
        }
      mostrarDatos (){
        console.log('mi nombre es ${this.nombre},${this.nombre},${this.castrado ?" ": " no"} estoy sin castrar y tengo${this.edad} añitos.')
      }
      revisarEstado = ()=>{
        return this.nombre === underfined || this.castrado === underfined || this.edad === underfined
      }
    }
       
      const zacharias = new perro("zacharias", false, 9)
      const gatosnuevos = []
      function agregarGatos(nombre, castrado, edad){
        gatosnuevos.push(new gato(nombre, castrado, edad))
      }
      console.log(gatito)
      console.log(zacharias)

      console.log(gatosnuevos)
      agregarGatos("zacharias", false, 9)
      agregarGatos("mosfato", true, 9)
      agregarGatos("talgedo", false, 9)
      console.log(gatosnuevos)

      for(const michi of gatosnuevos){
        console.log(michi.revisarEstado())}

      for(let i = 0; i<gatosnuevos.length; i++){
        gatosnuevos[i].mostrarDatos()
      } 
     
      /*console.log(localStorage)
      console.log(sessionStorage)*/

      //localStorage.setItem("guardar", "me guardaron")
      //console.log(localStorage.getItem("guardar"))
      /*const obj = {
        i: 10,
        b: ()=> console.log(this.i, this),
        c() {
            console.log(this.i, this);
        },
      };

      obj.b();
      obj.c();*/
       /*
      function Auto (modelo, color){
        this.modelo = modelo;
        this.color = color;
        this.mostrar = function(){return 'el auto es un ${this.modelo} de color ${this.color}'};
        this.mostrarInconsistente = ()=>{return this.modelo};
      }
      const ferrari = new auto("ferrari", "rojo")

      console.log(ferrari.mostrar())
      console.log(ferrari.mostrarInconsistente())*/
      /*for(let i = 0; i<gatosnuevos.length; i++){
        console.log/gatosnuevos[i].revisarEstado()*/
      

// console.table(perro)
//console.log(perro.nombre)
//console.log(perro.edad)
/*console.log(perro.color)
console.log(perro.sonidos,ladridos)
perro["nombre"] = michifus  
perro.color()
perro.aumentaredad()
console.log(perro.edad)

console.log(perro["edad"])
console.log(perro["nombre"])*/

/*perro.edad = 8
perro.edadmeses =30
//console.log(perro.edad)
console.log(perro.edadmeses)
//const perros= [{}]
  
perro.mostrarDatos()*/

const perros ={
    nombre: "michifus",
    castrado: false,
    edad: 1,
    color: function(){
        console.log("perro negro")
    },
    aumentaredad:function(){
        this.edad++
    },
    mostrarDatos: function(){
        console.log('mi nombre es ${this.nombre}, ${this.color ? " ": "no"} estoy castrado y tengo ${this.edad} añitos')
    }}/*{
    nombre: "calsifer",
    castrado: false,
    edad: 1,
    color: function(){
        console.log("perro negro")
    },
    aumentaredad:function(){
        this.edad++
    },
    mostrarDatos: function(){
        console.log('mi nombre es ${this.nombre}, ${this.color ? " ": "no"} estoy castrado y tengo ${this.edad} añitos')
    }} ,
     {
    nombre: "dogo",
    castrado: false,
    edad: 1,
    color: function(){
        console.log("perro negro")
    },*/
    

    /*for(let i = 0; i<perros.length; i++){
        perros[i].mostrarDatos()
    }

    function perro(nombre, color)
    {
        this.nombre = nombre
        this.color = color
        this.edad = edad
    }*/

   /* const verNombre = function(obj){
        return obj.nombre
    }

    console.log(verNombre(perro))*/
//console.log(calculadora(21,2,"*"))
//console.log(calculadora(21,2,"/"))
//console.log(calculadora(21,2,"-"))

/*const hola = function (nombre){
    return 'hola ${nombre}'
}*/
//const hola =  (nombre , apellido)=> 'hola' ${nombre} ${apellido}
   // return 'hola ${nombre}'

console.log(hola("thiago ormeño"))
//hola = "a"
//console.log(hola("thiago"))

//console.log (calculadora(21,7,"-"))

//calculadora = "hola"

//console.log(calculadora)
//console.log(calculadora(21,7,"-"))
/*function hola = (nombre){
  return 'hola $(nombre)'
}*/
//const hola = nombre => 'hola ${nombre}'
/*{
  return 'hola $(nombre)'
}*/

//console.log(hola("thiago"))
//hola ="andres"
//console.log(hola("thiago"))

/*const dx = (caras)=>{
    return function(){
        return math.floor(math.ramdom()*caras)+1
    }  
} 
const d6 = dx(6)
const d20 = dx(20)
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())*/

function factorial(nro){
 nro = Math.floor(nro)
 console.log(nro)
 if(nro ===1) return 1
 return nro * factorial(nro-1)
}

console.log(factorial(4))
console.log(factorial(7))

const productos = [
    { nombre:"", valor:0}
    { nombre:"", valor:0}
    { nombre:"", valor:0}
    { nombre:"", valor:0}
    { nombre:"", valor:0}
    { nombre:"", valor:0}
]

//
/*const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    };
    return fibonacci(n-1) + fibonacci(n-2);
}
[1,1,2,3,5,8,13]

// Factorial

const factorial = (nro) =>{
    if(nro <= 1){
        return 1;
    }
    return nro * factorial(nro-1);
}
// Factorial

const factorial = (nro) =>{
    if(nro <= 1){
        return 1;
    }
    return nro * factorial(nro-1);
}
// !5 = 5*4*3*2*1

// Para ahorrar tiempo de procesamiento podemos hacer una función de orden superior que revise/procese los datos ingresados.

const verificacionEnteros = (nro, funcion)=>{
    let nroEnt = parseInt(nro)
    if(isNaN(nro)){ console.warn("No se ha ingresado un nro")
        return;
    } else if(nro !== nroEnt){
        console.warn(`${nro} fue transformado a ${nroEnt}`)
    }
}*/
