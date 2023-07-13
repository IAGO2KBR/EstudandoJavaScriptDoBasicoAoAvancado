/**Filter é um método de Array que retorna um novo Array a partir de uma condição, uma callBack que pode ter 3 parâmetros
 * elementosDoArrayOriginal, indiceDosElementosNoArrayOriginal, ArrayOriginal
 */


/*const numbers = [1,2,3,4,5,6,7,8,9,10]

const numPares = numbers.filter(elemento=>{
    if(elemento % 2 == 0 ) {
        return elemento
    }
})*/

const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","JS","NODE","REACT","MONGOBD","REACTNATIVE"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCurso")
const btnAdicionarNovoCursoDepois =  document.getElementById("btnAdicionarNovoCursoDepois")
const NomeDoCurso = document.getElementById("nomeCurso")

let indice = 0

const CriarCurso = (curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    const comandos = document.createElement("div")
    comandos.setAttribute("class","comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)

    return novoElemento
}

cursos.map((elemento,chave)=>{
    const NovoElemento = CriarCurso(elemento)
    caixaCursos.appendChild(NovoElemento)
    indice++
})

const RadioSelecionadoDaListaDeCursos = ()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter(element=>{
        return element.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", evento=>{
    const RadioSelecionado = RadioSelecionadoDaListaDeCursos()
        try {
            const CursoSelecionado = RadioSelecionado.parentNode.parentElement.firstChild.textContent
            alert(`O Curso Selecionado é ${CursoSelecionado}`)
        } catch (error) {
            alert("Selecione algum Curso")
        }
})

//parentNode Retorna o elemento pai
//childNodes[nodenumber] Retorna o elemento filho
//firstChild pimeiro filho
//nextSibling
//previousSibling

btnRemoverCurso.addEventListener("click", evento=>{
    const RadioSelecionado = RadioSelecionadoDaListaDeCursos()
        try {
            const CursoSelecionado = RadioSelecionado.parentNode.parentNode /*Aqui usei o parentNode, pois ele me retorna a DIV completa, logo se faz eficaz pois retorna exatamente o q quero remover */
            CursoSelecionado.remove()
        } catch (error) {
            alert("Selecione algum Curso")
        }   
})


btnAdicionarNovoCursoAntes.addEventListener("click", elemento=>{
    const RadioSelecionado = RadioSelecionadoDaListaDeCursos()
        try {
            if(NomeDoCurso.value != ""){
                const CursoSelecionado = RadioSelecionado.parentNode.parentNode
                const CriandoNovoCurso = CriarCurso(NomeDoCurso.value) 
                caixaCursos.insertBefore(CriandoNovoCurso,CursoSelecionado)
            } else {
                alert("Digite o Nome do Curso !")
            }
            
        } catch (error) {
            alert("Selecione algum Curso")
        }
})

btnAdicionarNovoCursoDepois.addEventListener("click", elemento=>{
    const RadioSelecionado = RadioSelecionadoDaListaDeCursos()
        try {
            if(NomeDoCurso.value != ""){
                const CursoSelecionado = RadioSelecionado.parentNode.parentNode
                const CriandoNovoCurso = CriarCurso(NomeDoCurso.value) 
                caixaCursos.insertBefore(CriandoNovoCurso,CursoSelecionado.nextSibling)
            }else {
                alert("Digite o Nome do Curso !")
            }
        } catch (error) {
            alert("Selecione algum Curso")
        }
})