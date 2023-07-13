/**
 * Loops Podemos classificar em dois tipos definidos e indefinidos, ou seja 
 * quando sei o momento que o loop vai parar e quando n sei.
 * Definifo: For
 * Indefinido: While, Do While
 * 
 * for = para  (inicializador(contador); condição; controle)
 
   For in e For of:
   A diferença é que no For of cria um loop para interagir com os valores de obejetos
   enquanto no for in interage sobre as propriedades de objetos.
   
   let numbers = [10,20,30,40,50,60,70,80,90]

   for(i in numbers) {
    console.log(i) //Vai retornar as posições dos elementos que compoem o array
   }

   for(i of numbers){
    console.log(i) // Vai retornar os valores dos elementos que compoem o array 
   }
 */
/**
 * Exercicios 
 * 
 * 1.Desenvolva um programa usando a estrutura "fot" que mostre na tela a
    seguinte contagem:
                        0 5 10 15 20 25 30 35 40 Acabou!

    let numbers = 40
    for(let i=0; i<=40; i = i+5){
    console.log(i)
    
    }
    console.log("Acabou !")
 */
/**
 * 2.Desenvolva um programa usando a estrutura “For” que mostre na tela a
   seguinte contagem:
   100 90 80 70 60 50 40 30 20 10 0 Acabou!


for(let i = 100; i>=0; i = i-10){
    console.log(i)
}
console.log("Acabou !")
*/
/**
 *3. Escreva um programa que leia um número qualquer e mostre a tabuada desse
número, usando a estrutura “for”.
Ex: Digite um valor: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15


function tabuada(number) {
    for(let i = 0; i<=10;i++){
        console.log(`${number} x ${i} = ${number*i}`)
    }
}

let numero = parseFloat(prompt("Informe um Número:"))

tabuada(numero) 
*/
/**4.Faça um programa usando a estrutura “for” que leia um número inteiro
    positivo e mostre na tela uma contagem de 0 até o valor digitado:
    Ex: Digite um valor: 9
    Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM! 
   
    let number = parseFloat(prompt("Informe um número:"))

    let contagem = numero => {
        for(let i = 0; i<=numero; i++){
            console.log(i)
        }
    }

    contagem(number) */

/** Loop Indefinidos  
 * While = Enquanto 
 * Usamos quando não temos a certeza da quantidade que precisaremos interar
 * os comandos do Loop. Enquanto a condição for verdadeira sera executada varias vezes 
 * quando for falsa finalizara o loop.
 * Em situações específicas precisaremos operar com loops infintos e com o while é mt mais fácil de realizá-los.
 * ex: 

        let n = 0
        while(n<10){
            console.log(n)
        }
 
* Diferente do for onde temos um controle de incrementar ou decrementar o valor da 
variável de controle, aqui não, ela sempre terá o mesmo valor durante cada loop executado
 logo cairemos em um loop infinito como no acima.
 */

/**1.Escreva um programa que mostre na tela a seguinte contagem:
    6 7 8 9 10 11 Acabou! 
    let n = 6
    while(n<=11){
        console.log(n)
        n++
    }
    console.log("Acabou !")*/
  /**  2. Faça um algoritmo que mostre na tela a seguinte contagem:
    10 9 8 7 6 5 4 3 Acabou! 

    let n = 10

    while(n>=3){
        console.log(n)
        n--
    }
    console.log("Acabou !")*/
/** 3.Crie um aplicativo que mostre na tela a seguinte contagem:
    0 3 6 9 12 15 18 Acabou! 

    let i = 0

    do {
        console.log(i)
        i = i+3
    } while(i<=18)
    console.log("Acabou !")*/
/** 4.Desenvolva um programa que mostre na tela a seguinte contagem:
    100 95 90 85 80 ... 0 Acabou! 

    let i = 100 
    do {
        console.log(i)
        i = i -5
    }while(i>=0)
    console.log("Acabou !")*/
/**5.Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
    qualquer e mostre uma contagem até esse valor:
    Ex: Digite um valor: 35
    Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!
    
   let number = parseInt(prompt("Informe um número:"))
    let i = 1
   do{
        console.log(i)
        i++
   }while(i<=number)
   console.log("Acabou !!!")*/

/**6.Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
    marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
    30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]... 

let i = 30

while(i>=1){
    if(i%4==0){
        console.log(`[${i}]`)
    } else console.log(i)
    i--
}*/
