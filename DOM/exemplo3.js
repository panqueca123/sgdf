const titulo = document.getElementById('titulo')
const lista = document.getElementById("lista")
const adicionar = document.getElementById("adicionar")

function adicionarFruta(){
    lista.innerHTML +=  <li>uva</li>
}

function trocarTit(){
    titulo.textContent = "titulo alterado"
}

const segundoItem = lista.getElementsByTagName('li')[1]

segundoItem.textcontent = 'Morango'