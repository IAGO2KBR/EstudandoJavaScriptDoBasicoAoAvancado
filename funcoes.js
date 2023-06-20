/** Parâmetros Rest
 * 


function soma (...valores){
    let result =0
    for(let i = 0; i < valores.length; i++){
        result+=valores[i]
    }
    return result
}

console.log(soma(10,20,30))

function multiplicar(...lista){
    let valor = 1
    for(let o of lista){
        valor *= o
    }
    return valor
}
console.log(multiplicar(5,2,6))

function somando (...numeros){
    let result = 0
    numeros.forEach(numero=>{
        result += numero
    } )
    return result
}

console.log(somando(10,20,30))

let soma = function (...valores){
    let ResuladoDaSoma = 0
    valores.forEach(valor => {
        ResuladoDaSoma += valor
    } )
    return ResuladoDaSoma
}

console.log(soma(20+4)) */


/** Funções Aninhadas
 * 


const soma = (...valores) => {
    const somar = valor=>{
        let result = 0
       /* valor.forEach(element => {
            result+=element
            
        });*/
     /*   for(let v of valor){
            result+=v
        }
        return result
    }
    return somar(valores)
}

console.log(soma(10,20,30)) */

/** Funções Geradoras 
 * 

/*-----------EXERCÍCIO 1 -----------*/ 

/*function* cores(){
    yield "Vermelho"
}

const itc = cores()

console.log(itc.next().value)
console.log(itc.next().value) node funcoes.js */

/*-----------EXERCÍCIO 2 -----------*/ 

/*function* contagem () {
    let i = 0;
    while(true){
        yield i++
        if(i == 10) break
    }
}

let itc = contagem()
for(let v of itc) {
    console.log(v)
}*/

/*-----------EXERCÍCIO 3 -----------*/ 

/*const timesDeFutebol = ["Flamengo", "Palmeiras","Vasco","Atlético Mineiro"]
const MsgDoClube = ["Mais Querido do Brasil", "Maior Campeão Brasileiro", "Gigante da Colina", "Galo Forte e Vingador" ]

function exibeMsgDoTime (clube) {
    let indice;
    if(timesDeFutebol.includes(clube)){
        indice = timesDeFutebol.indexOf(clube)
    }
    return  MsgDoClube[indice]
}

function* perguntas(){
    const nome = yield "Qual é o seu nome ?"
    const time = yield "Qual é o seu time de futebol ?"

    return `${nome} você é torcedor do ${exibeMsgDoTime(time)}`
}

let itc = perguntas()

console.log(itc.next().value)
console.log(itc.next("Iago").value)
console.log(itc.next("Flamengo").value) */

