function convertTypeToLi(pokemonTypes){
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
          <span class="id">#${pokemon.id}</span>
          <span class="name">${pokemon.name}</span>

          <div class="details">

            <ol class="types">
              ${convertTypeToLi(pokemon.types).join('')}
            </ol>

            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" />
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