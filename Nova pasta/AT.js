let idade = 17
let adulto = idade >= 18
let velho = idade <= 70 
let obrigatorio = adulto && velho
let permissao = true


if(obrigatorio && permissao){
    console.log("Vossa pessoa tera que comparecer a votação")
}else{
    console.log( "Vossa existencia esta deisolvida da votação")
}
