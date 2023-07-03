let divPai = document.querySelector('.divPrincipal')
let descricaoOne = document.createElement("p")
let inputOne = document.createElement("input")
let descricaoTwo = document.createElement("p")
let inputTwo = document.createElement("input")
let botaoSomar = document.createElement("button")
let botaoSubtrair = document.createElement("button")
let botaoDividir = document.createElement("button")
let botaoMultiplicar = document.createElement("button")
let resultadoDaOperacao = document.createElement("span")
let quebraDeLinha = document.createElement("br")
let quebraDeLinha2 = document.createElement("br")

divPai.appendChild(descricaoOne)
divPai.appendChild(inputOne)
divPai.appendChild(descricaoTwo)
divPai.appendChild(inputTwo)
divPai.appendChild(quebraDeLinha)
divPai.appendChild(botaoSomar)
divPai.appendChild(botaoSubtrair)
divPai.appendChild(botaoMultiplicar)
divPai.appendChild(botaoDividir)
divPai.appendChild(quebraDeLinha2)
divPai.appendChild(resultadoDaOperacao)


descricaoOne.innerHTML = "Insira um Valor:"
descricaoTwo.innerHTML = "Insira Outro Valor:"
botaoSomar.innerHTML ="+"
botaoSubtrair.innerHTML="-"
botaoMultiplicar.innerHTML="x"
botaoDividir.innerHTML="/"

inputOne.setAttribute("class","n1")
inputTwo.setAttribute("class","n2")
resultadoDaOperacao.setAttribute("class","resultado")

let numeroOne = document.querySelector(".n1")
let numeroTwo = document.querySelector(".n2")
let resultado = document.querySelector(".resultado")


botaoSomar.addEventListener("click",()=>{
    resultado.innerHTML = parseInt(numeroOne.value) +  parseInt(numeroTwo.value)
})
botaoSubtrair.addEventListener("click",()=>{
    resultado.innerHTML = parseInt(numeroOne.value) -  parseInt(numeroTwo.value)
})
botaoMultiplicar.addEventListener("click",()=>{
    resultado.innerHTML = parseInt(numeroOne.value) *  parseInt(numeroTwo.value)
})
botaoDividir.addEventListener("click",()=>{
    resultado.innerHTML = parseInt(numeroOne.value) /  parseInt(numeroTwo.value)
})