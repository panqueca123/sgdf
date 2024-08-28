const paragrafo1 = document.getElementById("paragrafo1")
const paragrafo2 = document.getElementsByClassName("paragrafo2")[0]
const botao = document.querySelector("#botao")

// selecionados do ex2
const link = document.getElementById("link")
const imagem = document.getElementById("imagem")
const botaoimg = document.getElementById("botaoimg")
console.log(imagem)

//use getAttribut() e setAttribute()para alterar o href do link
link.setAttribute('href',"https://br.linkedin.com/in/miguel-fazio-de-assun%C3%A7%C3%A3o-a710592a2" )
link.textContent = "Acessar"

//adicionando estilo do link


link.style.color ="red"
link.style.fontWeight = "bold"

var imagemAtual = 1
botaoimg.addEventListener('click', function(){
    if (imagemAtual ===1){
        imagem.setAttribute('src', 'download.jfif')
        imagemAtual = 2
    
    }else{
        imagem.setAttribute('src', 'download (1).jfif')
        imagemAtual = 1
    }
})

imagem.style.width = '600px'
imagem.style.height = '500px'
imagem.style.objectFit = 'cover'
imagem.style.borderRadius = '30px'

botao.addEventListener('click', () => {
    paragrafo1.textContent = "Novo texto paragrafo 1"
    paragrafo2.textContent = "Novo paragrafo 2"
})