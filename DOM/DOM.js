/*----------- getElementById -----------
   Basicamente o document.getElementById, como o nome já diz, 
   é uma função do JavaScript que serve para retornar um elemento do DOM que 
   é identificado por um ID específico.
*/

/** innerHTML
 *  Com esta Propriedade podemos obter um valor de uma tag, classe, id e etc 
    também a opção de altera-lá
 */




/*const elemento1 = document.getElementById("f1")
console.log(elemento1)
console.log(elemento1.id)
console.log(elemento1.innerHTML)
elemento1.innerHTML = "Saudemos todos com muito ardor O pavilhão do nosso amor Preto encarnado, idolatrado De mil campeões, o vencedor, Flamengo"
console.log(elemento1.innerHTML)
*/

// const elemento1 = document.getElementById("f1")
// const elemento2 = document.getElementById("f2")
// const elemento3 = document.getElementById("f3")
// const elemento4 = document.getElementById("f4")
// const elemento5 = document.getElementById("f5")

// const tuaGloriaELutar = [elemento1,elemento2,elemento3,elemento4,elemento5]

// for(let i of tuaGloriaELutar){
//     console.log(i.innerHTML)
// }  

// tuaGloriaELutar.map(elemento => console.log(elemento.innerHTML))
// Para pecorrer ou interar um array utilize o MAP,sempre será mais eficaz


/*-----------  getElementsByTagName ----------- 
  Aqui é como o ById, mas o TagName retorna uma coleção de elementos
*/

// const FlamengoSuaGloriaELutar = [...document.getElementsByTagName("div")]

// FlamengoSuaGloriaELutar.map(elemento=>console.log(elemento.innerHTML))
// console.log(FlamengoSuaGloriaELutar)

/*----------- getElementsByClassName ----------- 
Permite que obetemos elementos que utilize uma classe específica
*/

//const CampeaoDeTerraEMar = [...document.getElementsByClassName("crf1")]

/*----------- querySelector e querySelectorAll ----------- 
A grande diferença para usar estes são a possibilidade de poder pegar qualquer tipo de elemento
nos anteriores podiamos pega pelo Id com ById, classe com ClassName e pela tag com TagName
o selector é mais genérioco podendo pegar qualquer elemento, 

const selectDiv = [...document.querySelector("Div")]
const selectId = [...document.querySelector("#f1")]
const selectClass = [...document.querySelector(".crf1")]*/

