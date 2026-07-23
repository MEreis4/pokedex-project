const listaPokemon = document.querySelector('.listaPokemon');
const loadMoreButton = document.getElementById('loadMoreButton');

const limit = 10;
let offset = 0;
const maxRecords = 151;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.mainType}" data-id="${pokemon.id}">
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
function openPokemonTab(id){
  
}

function loadPokemon(offset, limit){
  pokeApi.getPokemon(offset, limit).then((pokemonList = []) => {
    listaPokemon.innerHTML += pokemonList.map(convertPokemonToLi).join('');

    // Event Delegation - Delegação de Eventos
    listaPokemon.addEventListener('click', (event)=>{
      const li = event.target.closest('li');

      if (li){
        const pokemonId = li.dataset.id;
        console.log(pokemonId);
      }
    });
  });
}

loadPokemon(offset, limit);

loadMoreButton.addEventListener('click', () =>{
  offset += limit;
  const qtdRecordsWithNextPage = offset + limit;

  if (qtdRecordsWithNextPage >= maxRecords){
    const newLimit = maxRecords - offset;
    loadPokemon(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else loadPokemon(offset, limit);
});