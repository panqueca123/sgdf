function saudacao(genero){
let frase

if (genero === 'femenino'){
    console.log("voce é uma mulher")
}else if(genero === "nao binario"){
    console.log("voce é não binario")
}else{
    console.log("voce é um homem")
}

return (frase)
}

let genero1 = 'femenino'
let genero2 = 'masculino'
let genero3 = 'nao binario'


console.log(`Genero: ${genero1} ${saudacao(genero1)}`)
// oparador crae


