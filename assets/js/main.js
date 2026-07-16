// function convertTypeToLi(pokemonTypes){
//   return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.mainType}">
          <span class="id">#${pokemon.order}</span>
          <span class="name">${pokemon.name}</span>

          <div class="details">

            <ol class="types">
              ${pokemon.types.map((singleType) => `<li class="type ${singleType}">${singleType}</li>`).join('')}
            </ol>

            <img src="${pokemon.sprite}" alt="${pokemon.name}" />
          </div>
        </li>
    `
}

const listaPokemon = document.querySelector('.listaPokemon')

pokeApi.getPokemon().then((pokemonList = []) => {
  //  ---------- Solucão Ruim ----------
  // for (i = 0; i < pokemonList.length; i++){
  //   const pokemon = pokemonList[i];
  //   console.log(convertPokemonToHTML(pokemon));
  //   listaPokemon.innerHTML += convertPokemonToHTML(pokemon)
  // }

  // ---------- Melhor solução ----------
 
  listaPokemon.innerHTML = pokemonList.map(convertPokemonToLi).join('');
})