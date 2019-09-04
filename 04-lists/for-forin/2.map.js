const service = require('./service');

Array.prototype.meuMap = function(callback) {
  const novoArrayMapeado = [];
  for(let i = 0; i < this.length; i++){
    const resultado = callback(this[i], i);
    novoArrayMapeado.push(resultado);
  }
  return novoArrayMapeado;
};

async function main() {
  try {
    const result = await service.obterPessoas('a');
    //const names = [];
    
    // console.time('forEach');
    // result.results.forEach(pessoa => {
    //   names.push(pessoa.name);
    // });
    // console.timeEnd('forEach');

    // console.time('map');
    // const names = result.results.map(pessoa => pessoa.name);
    // console.timeEnd('map');

    const names = result.results.meuMap(function(pessoa, indice) {
      return `[${indice}]${pessoa.name}`;
    });

    console.log('Names: ', names);
  } catch(error) {
    console.error('error interno', error);
  }
}

main();