const listaPokemon = document.querySelector('.listaPokemon');
const loadMoreButton = document.getElementById('loadMoreButton');

const limit = 6;
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.mainType}">
          <span class="id">#${pokemon.id}</span>
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

function loadPokemon(offset, limit){
  pokeApi.getPokemon(offset, limit).then((pokemonList = []) => {
  listaPokemon.innerHTML += pokemonList.map(convertPokemonToLi).join('');
  });
}

loadPokemon(offset, limit);

loadMoreButton.addEventListener('click', () =>{
  offset += limit;
  loadPokemon(offset, limit);
});
