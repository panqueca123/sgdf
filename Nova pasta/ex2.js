//verificar se campos de formulario foram preenchidos

let nome= "Miguel"
let idade = "16"
let genero = ""

if (nome !== ""&& idade !== "" && genero !==""){
    console.log("cadastro oky")
}else{
    console.log("preencha os campos do cadastro")
}

let idade = 18
let ingresso = true
if(ingresso = true && idade == 18){
    console.log("Pode passar!")
}else{
    console.log("Sai fora!")
}




let conexao = true
let seguro = "Conexão segura"


if(conexao = true && seguro != "Conexão não-segura!"){
    console.log("Conexão estável e segura!")
}else{
    console.log("Mães solteiras estão a 10 metros de você!")
}

let saldo = 200
let conta = 180




if(saldo >= conta){
    console.log("Você pode pagar!")
}else{
    console.log("Faz o L.")
}
