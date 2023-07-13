/*let tuaGloriaELutar = [...document.querySelectorAll(".crf1")]

tuaGloriaELutar.map(element=>console.log(element.innerHTML))*/


// const elementHtml = [...document.querySelectorAll(".crf1")]

// function SuaGloriaDeveSempreSerLutar() {
//     alert("Flamengo apático contra o Red Bull, 4 a 0 ")
// }

// elementHtml.addEventListener("click", (elemento)=>{
//     const elementoClicado = elemento.target
//     elementoClicado.classList.add("destaque")
//     SuaGloriaDeveSempreSerLutar()
   
// })


// elementHtml.map(elementoDoArray => {
//     elementoDoArray.addEventListener("click", elemnetoComOEventoClick => {
//        const elemnetoEstilizado = elemnetoComOEventoClick.target
//        elemnetoEstilizado.classList.add("destaque")
//        console.log(elemnetoEstilizado.innerHTML)
//     })
// })
/*como parar um evento*/
// const elementHtmlFlamengo =  document.querySelector("#flamengo")

// elementHtmlFlamengo.addEventListener("click", ()=> {
//     console.log("fui clicado")
// })

// elementHtml.map(elemento=>{
//     elemento.addEventListener("click", (element)=>{
//         element.stopPropagation()
//     })
// })

/* Relação dos elementos*/

 const divFlamengo =document.querySelector(".flamengo")

// divFlamengo.map(elemento=>{
//     console.log(elemento.children)
// })

/*Criando Um Novo Elmento e removendo*/

/**
 * 1° crio o novo elemento com o document.createElement('ElementoHtml')
 * 2° posso setar classes e Ids com o setAttribute("atributo", "valorDoAtributo")
 * 3° podemos alterar o texto com o innerHtml, novoElemento.innerHtml = "Flamengo"
 * 4° já criado o elementoHtml na memória agora anexamos a um elementoHtml Pai com o 
    método appendChild()
 */

const FlamengoTuaGloriaELutar = ["Flamengo","Lutemos","Sempre","Com","Valor","Infindo","Ardetemente","com","denodo","e","fé","Que","o","futuro","ainda","será","mais","lindo","Que","o","teu","presente","que","tão","lindo","é"]

FlamengoTuaGloriaELutar.map((elemento,PosicaoDoElementoNoArray)=>{
    const NovoElemento = document.createElement('div')/*Criando um elementoHtml do tipo Div, neste momento o elementoHtml está na memória, n foi anexado a página Html */
    NovoElemento.setAttribute("id","HinoTuaGloriaELutar"+PosicaoDoElementoNoArray)/*Crianda um ID para cada DIV que contem um elemento do array FlamengoTuaGloriaELutar*/
    NovoElemento.setAttribute("class","crf1") /*Crianda um Classe para cada DIV que contem um elemento do array FlamengoTuaGloriaELutar*/
    NovoElemento.innerHTML = elemento /**/


    const ElementoLixeira = document.createElement("img")
    ElementoLixeira.setAttribute("src","/imagens/lixeira.png")
    ElementoLixeira.setAttribute("class","lixeira")
    NovoElemento.appendChild(ElementoLixeira)
    
    
    
    NovoElemento.addEventListener("click",(NovoElementoDaDivFlamengo)=>{
        let removerElemento = NovoElementoDaDivFlamengo.target
        console.log(removerElemento)
        divFlamengo.removeChild(removerElemento)
    })
    divFlamengo.appendChild(NovoElemento)

})


const novoElemento = document.createElement("div")
novoElemento.innerHTML ="Tua Glória é Lutar"
novoElemento.setAttribute("class","crf1")
divFlamengo.appendChild(novoElemento)