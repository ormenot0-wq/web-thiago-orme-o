/*console.log(1, "inicializando", "sincronico")
setTimeout(()=>{       
  console.log(2, "pasaron 8 segundos")  
}, 8000)

setTimeout(()=>{
    console.log(3, "pasaron 4 segundos")
},4000)

setTimeout(()=>{
    console,log(4, "pasaron 0 segundos")
}, 0)
console.log(5, "fin de codigo", "sincronico")*/
4

/*const temporizador = setTimeout(()=>{
    console.log(3, "pasaron 4 segundos", "asincronico")
}, 4000)
console.log(temporizador)
console.log("freno temporizador")

clearTimeout(temporizador)*/
/*let segundero = 0

setInterval(()=>{
    console.log('${++segundero}s')
}, 1000)*/
/*try{
    console.log("hola")
    const pedirDatos = asdmetodo
   // asd.metodo()
  // codigotry
 console.log("chau") 
}catch (excepcion){
    console.warn("este es el error",excepcion)
}*/

/*const moneda = new promise((resolve, reject)=>{

    let moneda = math.floor(math.random()*2+Number.EPSILON)
    if (moneda === 1){
        return resolve("cara")
    }else{
       return reject("cruz")
    }
})
.then(resultado=>{
    console.log(resultado)
})
.catch(error=>{
   console.war(error)
})
console.log(moneda)*/
/* finally{
    console.log("proceso finalizado")

}*/

/*console.log("hola")

asd.metodo()
console.log("chau")*/

/*function tirarMoneda(){
 new promise((resolve, reject)=>{
        let moneda = Math.floor(Math.random()*2+number.EPSILON)
        if(moneda === 1){
            return resolve("cara")
    } else {
        return reject("cruz")
    }
  })``````````````
}*/
const listaDOM = document.getElementById("pokemon")
const url = "https:"

function mostrarPokemons(arrayPokemon){
    listaDOM.innerHTML = ""
    arrayPokemon.forEach(Pokemon =>{
        const a = document.createElement("a")
        const li = document.createElement("li")
        a.href = pokemon.url
        a.target = "blanck"
        a.textContent = pokemon.name
        li.appendChild(a)
        listaDOM.appendChild(li)
    });
}

/*async function cargarpokemon(){
    try{
        const datosJSON = await fetch(url)
    }
}*/


const btnTraer = document.getElementById("traer")

function mostrarLista(lista){
  const ulProductos = document.getElementById("productos")
  ulProductos.innerHTML = ""
  lista.foreach(prod=>{
    const li = document.createElement("li")
    li.innerText = `${prod.id} - ${prod.nombre}`
    ulProductos.appendChild(li)
  })
}

async function conseguirLista() {
    try{
        //conseguir datos mediante fetch
        const listaJSON = await fetch("./lista.json")
        console.log(datosJSON)
        console.log(datosJSON.body)
        //procesar el resultado de JSON a JS
    const listajs = await listaJSON.json()
    //utilizar datos JS
    console.log(datos)
    const listaPoke = datos.results
    mostrarPokemons(listaPoke)
    }catch (e) {
      console.warn("error:", e)
      listaDOM.innerText = "error"
    }
}

btnTraer.addEventListener("click",()=>{
    conseguirLista()
})
btnTraer.addEventListener("click",()=>{
    fetch("./lista.json")
    .then(rta=>{
        return rta.json()
    })
    .then(r=>{
        mostrarLista(r)
    })
    .catch(e=>console.warn("error"))
    .finally(console.log("proceso finalizado"))
})

cargarpokemon()
/*btnTraer.addEventListener("click",()=>{
    fetch("./lista.json").then(rta=>{
        return rta.json()
    })
     .then(r=>{
        mostrarLista(r)
     })
     .catch(e=> console.warn('error'))
     .finally(console.log("proceso finaliziado"))
})
*/



