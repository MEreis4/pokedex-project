const pokeApi = {};

pokeApi.convertPokeApiDetailToModel = (details) =>{
    const pokemon = new Pokemon
    pokemon.order = details.order;
    pokemon.name = details.name;
    pokemon.types = details.types.map((typeSlot) => typeSlot.type.name);
    const [mainType] = pokemon.types;
    pokemon.mainType = mainType;
    pokemon.sprite = details.sprites.other['official-artwork'].front_default;
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
    .then(pokeApi.convertPokeApiDetailToModel);
}

pokeApi.getPokemon = function (offset = 0, limit = 151){
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;    
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokeList) => pokeList.map(pokeApi.getPokemonDetail))
    .then((detailsRequest) => Promise.all (detailsRequest))
    .then((pokemonDetail) => {
        console.log(pokemonDetail);
        return pokemonDetail
    });
}