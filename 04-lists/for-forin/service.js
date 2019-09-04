const axios = require('axios');
const URL = 'https://swapi.co/api/people';

async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`;
  const responce = await axios.get(url);
  return responce.data;
}

module.exports = {
  obterPessoas
}

//test
// obterPessoas('r2').then((resultado) => {
//   console.log('Resultado', resultado);
// }).catch((error => {
//   console.error('Deu ruim', error);
// }));