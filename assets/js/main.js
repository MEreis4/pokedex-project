const offset = 0;
const limit = 20;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url) //este é o método que faz a requisição para uma web API. Ele retorna uma Promise que, quando resolvida, nos dá a resposta da requisição.
    .then((response) => response.json()) //este método transforma a resposta em um objeto JSON. Para isso, ele retorna uma Promise que, quando resolvida, dá o objeto JSON.
    .then((jsonBody) => console.log(jsonBody)) //este método recebe o objeto JSON e o imprime no console. Tenha em vista que ele foi encadeado ao método anterior, ou seja, ele só será executado quando a Promise do método anterior for resolvida.
    .catch((error) => console.log(error)) //este método é chamado quando a Promise é rejeitada, ou seja, quando ocorre algum erro na requisição. Ele recebe o objeto de erro e o imprime no console.
    .finally(() => console.log('Requisição finalizada!')); //este método é chamado quando a Promise é resolvida ou rejeitada, ou seja, quando a requisição é finalizada. Ele não recebe nenhum parâmetro e imprime uma mensagem no console.