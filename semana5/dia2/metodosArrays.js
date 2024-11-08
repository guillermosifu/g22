// push= agrega uno o mas elementos al final de un array/
// pop = elimina el ultimo elemento

let frutas =["manzana","fresa","banana","pera"]
frutas.push("pitajaya","naranja")
frutas.pop()
console.log("son las frutas",frutas)

// shift y unshift = 
//shift = elimina el primer elemento 
let frutas1 =["manzana","fresa","banana","pera"]
frutas1.shift()
frutas1.unshift("mandarina")
console.log("son las frutas",frutas1)

//splice = añade o eliminar o reemplazar elementos en el arraya a partir de su indice

let frutas2 =["manzana","fresa","banana","pera"]

frutas2.splice(2,2,"uva")

console.log(frutas2)