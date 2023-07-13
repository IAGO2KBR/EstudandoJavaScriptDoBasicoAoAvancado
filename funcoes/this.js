/* Dentro de uma função podemos declarar uma variavél
   com o mesmo nome de seus parâmetros e receber o valores
   utilzando o operador This.
*/

function aluno (nome, nota){
    this.nome = nome;
    this.nota = nota;

    this.exibirNomeNotaComFunction = function() {
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },3000)
    }

    this.exibirNomeNotaComArrowFunction = function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },3000)
    }
}
const aluno1 = new aluno("Iago",100)
aluno1.exibirNomeNotaComFunction()
aluno1.exibirNomeNotaComArrowFunction()

/* O método exibirNomeNotaComFunction ele utiliza o contexto do setTimeout, logo no console.log estamos
criando uma nova instância, por isso na saída ocorre undefined, Já exibirNomeNotaComArrowFunction, a Arrow function utiliza 
o contexto do elemento Pai que é a função aluno. 

OBS: Quando for utilizar funções anônimas é preferencial que opte por Arrow Function, diminui os ricos com os Bugs. 
*/