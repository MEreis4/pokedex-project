const pokeApi = {};

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemon = function (offset = 0, limit = 9){
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;    
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokeList) => pokeList.map(pokeApi.getPokemonDetail))
    .then((detailsRequest) => Promise.all (detailsRequest))
    .then((pokemonDetail) => pokemonDetail);
}