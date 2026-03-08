// 🟠 Funciones 🟠
/* 
Que son?
Un bloque de código/sentencia que puede se ejecuta cada vez que se llama 
*/

// 🔶 Declarar 🔶

// 🔹 Sin return
/* 
function nombre(){
    ~sentencia a ejecutar
} 
*/


// 🔹 Con return
/* function nombre(){
    ~sentencia a ejecutar
    return // el return es si se desea devolver un dato
}  
*/
/* function dobleReturn(){
    return "hola"
    return "chau"    // nunca llego a esto    
} */

// 🔹 Con parámetros
/* 
function nombre(parametro1, parametro2, ..., parametroX){
    // los parámetros no son obligatorios dependiendo de lo deseado.
    ~sentencia a ejecutar
    return Y //el return como saben puede o no ser necesario
} 
*/

// 🔹 Parámetros con valor por defecto
/* 
function nombre(parametro1, parametro2=X){
    // Si no se le asigna valor al parametro2, se utiliza el valor por defecto, en este caso, X
    // Se le asigna siempre a los parámetros de los ultimos a los primeros, por como funciona al ser llamados (no genera error sintáctico si no siguen esta convención pero a nivel práctico afecta).
    ~sentencia a ejecutar
    return Y //el return como saben puede o no ser necesario
} 
*/

// 🔸 Ejemplos 🔸
// Hola mundo
function holaMundo(){
    console.log("Hola Mundo");
};

// Calculadora
function validarNros(num1, num2){
    const tipoNum1 = typeof num1;
    const tipoNum2 = typeof num2;
    const nrosInvalidos = tipoNum1!=='number' || tipoNum2!=='number'
    return nrosInvalidos
}

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
        case "^":
            return Math.pow(num1, num2)
        case "%":
            return num1%num2;
        default:
            console.warn("Error: operador inválido")
            return;
    };
} ; 


// Nombre en foro
function userNameDisplay(userName="Anónimo"){
    /* if(unserName===undefined){
        userName = "Anónimo"
    }*/
    alert(`El nombre del usuario es ${userName}`);
};

// 🔶 Llamar 🔶

// 🔹 Sin parametros
/* 
nombre()
*/

// 🔹 Con parametros
/* 
nombre(parametros)
*/

// 🔸 Ejemplos 🔸
// Llamamos a las funciones de arriba

// sin parámetros
// holaMundo();

// calculadora
// calculadora(2,5,"-");
// console.log(calculadora(2,5,"-")); //que no imprima a consola no signifique que no sea funcional

// parámetros por defecto
// userNameDisplay();
// userNameDisplay("Andrés");

// 🔶 Otras maneras de declararlas 🔶
// recomiendo fuertemente utilizarlas por el beneficio de declarar funciones con const

// voy a utilziar distintos nombres de funciones para poder llamarlas y demostrar que hacen lo mismo, lo ideal es declarar la función 1 vez donde sea necesario.

// Funciones anónimas

function sumar1I(a){
    return a+1
}
console.log("sumar1I",sumar1I(1))

// se convierte en:
const sumar1II = function(a){
    return a+1
}
console.log("sumar1II",sumar1II(1))

// mayor igual es >=
// Funciones flecha |MAS USADA|
const sumar1III = (a) => {
    // más lógica si se desea
    return a+1
}
console.log("sumar1III",sumar1III(1))


// si la función es un return simple de una línea se puede simplificar así, el return es implicito
const sumar1IV = (a) => a + 1
console.log("sumar1IV",sumar1IV(1))

// si hay solo 1 parámetro, se pueden obviar los paréntesis, si no hay parametros se mantienen los paréntesis vacíos
const sumar1V = a => a + 1
console.log("sumar1V",sumar1V(1))

// ⛔ NO SE CONFUNDAN console.log() CON UN return, UNO SOLO IMPRIME EN CONSOLA, OTRO RETORNA UN VALOR DE LA FUNCIÓN ⛔ 