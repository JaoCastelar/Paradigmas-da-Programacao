let btn = document.getElementById("btn")
btn.addEventListener("click", () => carregaPokemon())

function verificaPokemon() {
    let pokemon = document.getElementById("nome").value

    let url = `https://pokemon.danielpimentel.com.br/v1/pokemon/nome/${pokemon}`

    return new Promise((resolve, reject) => {
        fetch(url)
        .then((resposta) => resposta.json() )
        .then((pokemon) => resolve(pokemon.pokemon))
        .catch((erro) => reject(erro))
    })
}

function carregaPokemon() {
    let ger = document.getElementById("geracao").value

    verificaPokemon().then((pokemon) =>{
        if (ger == pokemon.geracao) {

            let div = document.getElementById("pokedex")
            div.innerHTML = ""

            let html = `
            <div id="pokedex" class="pokedex">
                <img src="${pokemon.img}" heigth="300px" width="300px" />
                <br>
                Número: ${pokemon.numero}
                <br>
                Nome: ${pokemon.nome}
                <br>
                Tipo: ${pokemon.tipo}
            </div>  
            `;  
            div.insertAdjacentHTML("beforeend", html);

        } else{
            alert("O pokemon não é dessa geração")
        }
    })
}