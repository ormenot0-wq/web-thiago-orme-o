let nombre = "thiago"
function bloque1(){ //bloque1
//console.log(nombre)  
    nombre = "kindow"

    let numero = 123
    console.log(numero)  
    {//bloque 3}
        console.log(numero)  
        let algo = "hola"
        function hola(){
        {var atrocidad = "no me usen"}
        }
 }
 //console.log(atrocidad)
 return numero
 }
 {//bloque 2
   
    //let booleano = true
   // console.log(atrocidad)
 }
 
 
 //console.log
 console.log(bloque1())
 const elementoEncontradoId = pages.getElementsById("menu")
 /*console.log(elementoEncontradoId)
 console.dir(elementoEncontradoId)*/

 const elementosMedianteClase = pages.getElementsbyclassName("magenta")
 /*console.log(elementosMedianteClase)
 console.log(elementosMedianteClase.encntrame)
 console.dir(elementosMedianteClase)*/

 const elementosMedianteEtiqueta = pages.getElementsbyTagNace("div")
 /*console.log(elementoEncontradoId)
 console.dir(elementoEncontradoId)*/

 //const consutaUnica = document.querySelector("ul#menu.rojo")
 const consutaUnica = document.querySelector("ul#menu.rojo")
 //console.log(consultaUnica)

 const consultaMultiple = pages.querySelectorAll(".rojo")
 console.log(consultaMultiple)

 // Modificamos

 const divEncontrame = document.getElementById("Encontrame")
 console.dir(divEncontrame)
 console.dir(divEncontrame.innerText)
 console.dir(divEncontrame.className)
 console.dir(divEncontrame.classList)
 console.dir(divEncontrame.innerHTML)

 //divEncontrame.className = "negro cursiva carta"
 //divEncontrame.classList.toggle("verde")

 divEncontrame.innerText= "te encontre"
 divEncontrame.innerHTML= "<button>apretame</button>"

 Swal.fire({
  title: 'gracias por comprar!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'buelva pronto '
})