//Capturando elemento
const titulo = document.getElementById("titulo")
console.log("capturado") //imprimindo no console para testar
// Inserindo na pagina 
titulo.innerText = `Titulo inserido via JS com getElementById e innerText`


const link = document.querySelector("a")
console.log("A capturado")
link.innerText = `Texto do Link inserido via JS querySelector e innerText`


const listaOrdenada = document.getElementById("lista-ordenada")
console.log("OL capturada")
listaOrdenada.innerHTML = `<ol>Lista01</ol>
                            <ol>Lista02</ol>
                            <ol>Lista03</ol>`


const listaNordenada = document.querySelector("ul")
console.log("UL capturada")
listaNordenada.innerHTML = `<ul>Ul01</ul>
                            <ul>Ul02</ul>
                            <ul>Ul03</ul>`


