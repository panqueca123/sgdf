function saudacao(){
    let frase = document.getElementById('frase')

    let genero = document.getElementById('generoselect').value
    
    if (genero === 'femenino'){
        frase.textContent = "Você é uma mulher"
    }else if(genero === "nao binario"){
        frase.textContent = "Você é não binario"
    }else{
        frase.textContent = "Você é um homem"
    }
}
   
    