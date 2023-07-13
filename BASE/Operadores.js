/* Operadores Atribuição*
 * Atribuição: x = y
 * Atribuição de adição: x += y ou x = x+y
 * Atribuição de subtração: x -= y ou  x = x+y
 * Atribuição de multiplicação: x*=y ou x = x*y 
 * Atribuição de divisão: x /= y ou x = x / y
 * Atribuição de resto: x %= y ou x = x % y
 * Atribuição exponencial: x **= y ou x = x ** y
 * 
 */ 
/* Operadores de Comparação*
 * Igual a (==)
 * Diferende de (!=)
 * Estritamente igual (===)
 * Estritamente Diferente de (!==)
 * Maior que (>)
 * Maior que ou igual (>=)
 * Menor que (<)
 * Menor que ou igual (<=)
 */
 
/* Operadores Aritiméticos*
 * Módulo (%) Retorna o resto de uma divisão
 * Incremento (++)	
 * Decremento (--)
 * Negação(Inversão) podendo ser de Subtração (-)
 * Operador de exponenciação (**) 
 */

/* Operadores Lógicos*
 * AND lógico (&&)
 * OU lógico (||)
 * NOT lógico (!)
 */
/**
 * Operador condicional (ternário) condicao ? valor1 : valor2: var status = (idade >= 18) ? "adulto" : "menor de idade";
 *delete: Pode ser usado para apagar um Objeto, logo podendo também um elemento de Array 
 ex: 
    delete nomeObjeto;
    delete nomeObjeto.propriedade;
    delete nomeObjeto[indice];
    delete propriedade; // válido apenas dentro de uma declaração with

    Delete com Array:
    var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
    delete arvores[3];
    if (3 in arvores) {
    // isto não é executado
    }

    var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
    arvores[3] = undefined;
    if (3 in arvores) {
    // isto será executado
    }
*typeof: retorna o tipo de dado de um elemento o tipo de dado: number, string, function e etc
    ex:
    console.log(typeof(FirtName)) // string

*Operador spread: spread = Espalhar

1° fucionalidade: Copiar dois array para dentro de um terceiro

    let lista1 = [1,2,3]
    let lista2 = [4,5,6]
    let lista3 = [...lista1, ...lista2]
    console.log(lista3)
2° fucionalidade: Copiar um Objeto para outro 

    let JogadorOne = {Nickname:"Parzival", energia:100, vida:3,mana:150}
    let JogadorTwo = {Nickname:"noobmaster69", energia:100, vida:5,velocidade:100}
    let Fusion = {...JogadorOne, ...JogadorTwo}
    console.log(Fusion) // {Nicknema:"noobmaster69", energia:100,vida:5,mana:5,velocidade:100}

3° fucionalidade: Somar os valores de um array, No exemplo abaixo irá somar apenas as 3 primeiras posições do array, independente se o array tiver mais de uma 3 posições !!

    const soma =(posicao1, posicao2,posicao3) =>{

        return posicao1 + posicao2 + posicao3
    }
    let listaNumerica = [1,2,3,4,5,6,7,8,9,10]
    console.log(soma(...ListaNumerica))

4° fucionalidade: Transformar elementos Html em array, Como pegar valores de um Id, Classe ou Div, assim transformar em array e usa métodos array com esse código

let elemento = document.getElementsByTagName('div')
let elementoArray = [...elemento]

elementoArray.forEach(elemento=> elemento.innerHTML = "Troquei os valores escritos na DIV")
*/



/* Exercícios*
  
  1. Crie um Programa que calcule a velocidade a velocidade final de um Corpo
  ultilizando a Equação de Torricelli, utilize a gravidade como aceleração, 10m/s² !! 
  // Vfinal² = Vincial² + 2 * aceleração * VariaçãoDoEspaço
  
    let VelocidadeFinal;
    let VelocidadeInicial = parseFloat(prompt("Informe no Padrão S.I a Velocidade inicial do corpo"))
    let VariaçãoDoEspaço =  parseFloat(prompt("Informe no Padrão S.I a Variação do Espaço"))


    let EquacaoTorricelli = () =>{
        let VelocidadeFinal = (VelocidadeInicial**2 +(2*10*VariaçãoDoEspaço))
        return `${Math.sqrt(VelocidadeFinal)}m/s²`
    }

    console.log(EquacaoTorricelli())

2.  Faça um programa que verifique se o número é par ou ímpar.

    let number = parseInt(prompt("Informe um Número:"))

    function ParOuImpar(numero) {
        (number % 2 == 0 ) ? console.log(`${numero} é par `) : console.log(`${numero} é Ímpar`)
    }

    ParOuImpar(number)
3. Faça um programa que calcule o perímetro de um programa. 


let lado1 = parseFloat(prompt("Informe 1° lado em metros"))
let lado2 = parseFloat(prompt("Informe 2° lado em metros"))
let lado3 = parseFloat(prompt("Informe 3° lado em metros"))


let soma = () => {
    return lado1+lado2+lado3
}

console.log(`O Perímetro é ${soma()}`)

4.
*/
