let modo = ""

/*const traerModo = ()=>sessionStorage.getItem("modo")

function seleccionarModo(){
 const activarmodoNoche = confirm("deseas activar modo noche")
 if(activarmodoNoche){
    modo = "noche"
 } else {
  modo = "dia"
 }
 sessionStorage.setItem("modo", modo)

}
function evaluarModo(){
    const modoGuardado = traerModo()
    if(modoGuardado === null) seleccionarModo()
    modo = traerModo()
}
console.log(modo)
evaluarMod()
console.log(modo)*/
 /*class gato{
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
 
     if(localStorage.getItem("gatos nuevos")){
         localStorage.getItem ("gatos nuevos")
      /*const gatosTemp = localStorage.getItem("gatos nuevos", gatosnuevos)
      for(const gato of gatosTemp){
        gatosnuevos.push(gato)*/
     // }
     

     /* function agregarGatos(nombre, castrado, edad){
        gatosnuevos.push(new gato(nombre, castrado, edad))
        localStorage.setItem("gatos nuevos", gatosnuevos)
      }

      const d6 = dx()*/

      class Hamburgesa{
       constructor(nombre, precio , ingredientes, nroCombo){
        this.nombre = nombre;
        this.precio = parseFloat(precio.toFixed(2));
        this.ingredientes = ingredientes
        this.nroCombo = parseInt(nroCombo)
          }
       }

      const Hamburgesas = []

      function agregarHarbugesa(nombre, precio, ingredientes, nroCombo){
       Hamburgesas.push(new Hamburgesa(nombre, precio, ingredientes, nroCombo)) 
      }

      agregarHarbugesa("krusty burger", 150.00, ['carne', 'queso'], 1)
     agregarHarbugesa("krusty burger doble", 225.00, ['carne', 'queso', 'panceta'], 2)
     agregarHarbugesa("krusty pollo", 150.00, ['pollo', 'queso'], 3)
     agregarHarbugesa("krusty mega balde de pollo", 140.00, ['pollo', 'queso', 'aderezo'], 4)
     agregarHarbugesa("super krusty", 150.00, ['carne', 'queso', 'huevo'], 5)
     agregarHarbugesa("super krusty triple", 205.00, ['carne', 'queso', 'huevo'], 7)
     agregarHarbugesa("krusty vegan", 125.00, ['espinaca', 'soja'], 8)

     console.table(Hamburgesas)