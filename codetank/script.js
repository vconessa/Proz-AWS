// InnerText Inner HTML

// Criar o elemento
const titulo = document.createElement("titulo")
    
//Popular esse elemento
titulo.innerHTML = `<h2>texto inserido pela DOM</h2>`

// Adicionar elemento na DOM
const main = document.querySelector("main")
main.appendChild(titulo)


const arrayPostagens = [
    {
      nome: "x-salada",
      descricao: "hamburguer 180g, queijo , alface e tomate",
      preco: "R$ 28,00",
    },
    {
        nome: "x-bacon",
        descricao: "hamburguer 180g, queijo , bacon",
        preco: "R$ 35,00",
    }
]

// Criar o elemento
const produto = document.createElement("produto")
const produto1 = document.createElement("produto1")
    
//Popular esse elemento
produto.innerHTML = `<h2>${arrayPostagens[0].nome}</h2>
                    <h3>${arrayPostagens[0].descricao}</h3>
                    <h4>${arrayPostagens[0].preco}</h4>`

produto1.innerHTML = `<h2>${arrayPostagens[1].nome}</h2>
                    <h3>${arrayPostagens[1].descricao}</h3>
                    <h4>${arrayPostagens[1].preco}</h4>`

// Adicionar elemento na DOM
main.appendChild(produto)
main.appendChild(produto1)
