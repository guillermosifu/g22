// existe dentro de js el document  es un atributo de js que me va permitir obtener elementos dfe html

// obetner por su id 
// tagname 
// clase 

// hemos creeado 3 elemetnos y vamos a acceder a cada unode ellos de fifferntes formas

// selectores - 

const inputs = document.getElementsByTagName("input")
console.log("inputs", inputs)

// para poder iterarlos tengo que convertirlo en un array 

const newsInputs = Array.from(inputs)
console.log(newsInputs)


// iteren el arrya de inputs -cada unbo de sus elementos
//  selctro por id 

const input2 = document.getElementById("pass")

console.log(input2)


// nombre de sus clases

const input3 = document.getElementsByClassName("input_mail")
console.log(input3)

// querySelector 

const inputs2= document.querySelectorAll("input")
console.log(inputs2)

const inputclass = document.querySelector(".input_mail")
console.log(inputclass)


const botoncito = document.querySelector(".btn_registro")
botoncito.innerText="hola"

botoncito.style.backgroundColor ="blue"
botoncito.style.color ="white"
botoncito.style.padding="10px"



console.log(botoncito)

