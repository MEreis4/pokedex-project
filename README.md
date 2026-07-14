# pokedex-project
A Pokédex page made using vanilla HTML, CSS and JS. Also consuming the free api named PokéApi

This project is centered in the javascript api learning, so the other languages will not be mentioned, unless I think it's useful to.

First of all, I Learned how to deal with fetch API:
<img width="4050" height="558" alt="code1" src="https://github.com/user-attachments/assets/bda076a8-51e9-4838-9fc0-c42820286844" />
-# note that the comments are in Brazilian Portuguese, my country language.

In this snapshot, I was learning how the `fetch` method works, how `.then` returns its promises,
what is a `Promise` in first place and getting known how fetch structures are designed.

Then I really get started with the code:

<img width="1664" height="862" alt="code2" src="https://github.com/user-attachments/assets/a13a2932-f635-41ac-b9ee-34ded4bb9221" />
In this image, I created an object named `pokeApi`. It has the methods `getPokemon` — which initially returns a json containing pokemon name and url — that requires `getPokemonDetail` — which fetches a single pokemon url for each pokemon given in the line of `getPokemon` method:
``` javascript
    .then((pokeList) => pokeList.map(pokeApi.getPokemonDetail))
```
After all url within the `limit` being processed, the `getPokemon` method will return a new array of pokemon with each one's details.
All of that was in `poke-api.js` file
<img width="224" height="54" alt="image" src="https://github.com/user-attachments/assets/88cf6dba-a930-4fec-aac7-bdc4402ed5c8" />
Heading to `main.js`, we use the returned value in `getPokemon` method and add them in the page. But first of all, I initially created a function that converts every pokemon in the array to a <li>. Also a function which returns the pokemon types to their respective places inside it.
