const frutas = ['maça', 'banana', 'uva', 'laranja']
console.log(frutas)
console.log(frutas[2])

let index = 0 
// identifica a posiçao

while (index < frutas.length){
    console.log(`${index +1}: ${frutas[index]}`)
    if (frutas[index] === "uva"){
        console.log(`Encontramos a uva na posição ${frutas[2].length}`)
        break
    }
    index++
}