/**
 * Var - Possui escopo global, pode ser acessada e atualizada dentro de um escopo de uma função e podendo ser redeclarado.
 * Var - sofre o Hosting recebe o valor undefined quando acessada antes da sua declaração.
 * Let - Só pode ser acessada dentro do seu escopo ou um escopo inferior, não pode ser redeclarada, mas seu valor pode ser atualizado.
 * let - Contudo se a variavél com let for definida em um escopo pode ser redeclarada eum escopo diferente não hávera erro, Mas não uma boa prática.
 * const - Seu escopo funciona como let, mas não pode ter seu valor atualizado ou ser redeclarada, sempre tem que iniciar com valor atribuido, sofre hosting como let, dando erro de referência
*/


/*console.log(exemplo) //valor undefined
if(true){
    var exemplo = "Estou no escopo de função"
}
console.log(exemplo)

let exemploComLet = "Estou no escopo Global, variável com Let"
console.log(exemploComLet)

if(true){
    let exemploComLet = "Estou no escopo local, variável com Let"
    console.log(exemploComLet)
}

/**Exercíco */

/*Faça um programa que exiba 3 números na tela e calcule a média entre eles */

/* let numberOne= parseInt(prompt('Informe um número:'),10) 
let numberTwo= parseInt(prompt('Informe um número:'),10) 
let numberThree = parseInt(prompt('Informe um número:'),10) 

let mediaDosTresNumeros = () => {
    return (numberOne+numberTwo+numberThree)/3
}

console.log(mediaDosTresNumeros())

/**Exercíco 2 */


/*Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e 
escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. 
Exemplo: 100 Fahrenheit = 37,77 Celsius. */


let temperaturaEmFahrenheit = parseFloat(prompt("Informe o Valor da temperatura em Fahrenheit:"), 10)


function ConvertaTemperaturaEmCelcius(temperatura) {
    let Celsius = ((temperatura - 32) * 5 ) / 9
    return Celsius.toFixed(3)
}

console.log(`A temperatura informada em Fahrenheit é na escala Celsius ${ConvertaTemperaturaEmCelcius(temperaturaEmFahrenheit)}`)