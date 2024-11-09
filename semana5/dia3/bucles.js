// bucel es un elem,to repetitivo - tarea que se hace muichas veces

// for = para
// itera = iterador indice 0
// i++ 
// i = 1+1 

// for(let i = 0;i <= 10 ;i++ ){
//     console.log("iterador",i)
// }

// de 2 en 2
// for(let i = 0;i <= 10 ;i+=2 ){
//     console.log("iterador",i)
// }


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let j = 0; j < numeros.length; j++) {
//     if (numeros[j] % 2 === 0) {
//         console.log(numeros[j])
//     }
// }

//podremos iterar un array de objetos ?

const laptops = [
    {
        marca: "samsung",
        modelos: "sp-1020",
        tienda: "oeshle"
    },
    {
        marca: "mac",
        modelos: "sp-1020",
        tienda: "oeshle"
    },
    {
        marca: "toshiba",
        modelos: "sp-1020",
        tienda: "oeshle"
    }
]

for(let o = 0;o < laptops.length; o++){
    console.log(laptops[o].marca)
}

//escribe una funcion que pida una frase y escricba cuantas veces aparacen las vocales

const contarVocales =(frase)=>{
    const fraseMayuscula =frase.toUpperCase();

    let contador=0;


    for(let i = 0;i < fraseMayuscula.length;i++){
        const letra = fraseMayuscula[i];
    
    if(
        letra === "A" ||
        letra === "E" ||
        letra === "I" ||
        letra === "O" ||
        letra === "U" 
    ){
        contador++;
    }
}
// return "la frase tiene" + contador + "vocales"
return `la frase tiene ${contador} vocales`
}

console.log(contarVocales("murcielago"))

//bucle while

let i = 0 ;

while(i < 5){
    console.log(i); 
    i++;
}

//do while 

let j = 0;
do {
    console.log(j);
    j++
} while(j < 5)

    //for each

    const numeros1=[1,2,3,4,5,6,7,8,9,10]

    numeros1.forEach((numeros1)=>{
        console.log(numeros1)
    })

    // ejerccios realiza un array de objetos de alunmos
    // imoprime en consola su nombre y su edad  for each
    // nobre . sexo .edad 

 const alumnos =[
    {nombres:"guille",sexo:"M",edad:35},
    {nombres:"pepe",sexo:"M",edad:45},
    {nombres:"luis",sexo:"M",edad:55}
 ]