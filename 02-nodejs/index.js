/* 
0 - Obter um usuario
1 - Obter numero de telefone de um usuario a partir de seu id
2 - Obter o endereço do usuario pelo id
*/
//importar modulo do node para usar promises
const util = require('util');

function obterUsuario() {
  // quando der problema -> reject(erro)
  // quando der certo -> resolv(sucess)
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      //return reject(new Error('Deu ruim :('));
      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNasc: new Date()
      });
    }, 1000);
  });
}

function obterTelefone(idUser, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      return resolve({
        telefone: 12345678,
        ddd: 51
      });
    }, 2000);
  });
}

function obterEndereco(idUser, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      return resolve({
        rua: 'Agrabah',
        numero: 0
      });
    }, 2000);
  });
}

const userPromise = obterUsuario();
//Para sucesso .then
//erros .catch
// usuario -> telefone -> endereco
userPromise.then((user) =>{
  return obterTelefone(user.id).then((telefone) => {
    return {
      usuario: {
        nome: user.nome,
        id: user.id
      },
      telefone: telefone
    };
  });
}).then((result) =>{
  return endereco = obterEndereco(result.usuario.id).then((endereco) => {
    return {
      usuario: result.usuario,
      telefone: result.telefone,
      endereco: endereco
    };
  });
}).then((result) =>{
  //console.log('Resultado', result);
  console.log(`Nome: ${result.usuario.nome},
  Endereco: ${result.endereco.rua}, Numero: ${result.endereco.numero}
  Telefone: (${result.telefone.ddd}) ${result.telefone.telefone}`);
}).catch((error) => {
  console.error('Deu ruim', error)
});

// obterUsuario((erro, user) => {
//   // null || "" || 0 === false
//   if(erro) {
//     console.error('Deu ruim em usuario', erro);
//     return;
//   }
//   obterTelefone(user.id, (erro1, telefone) => {
//     if(erro1) {
//       console.error('Deu ruim em telefone', erro1);
//       return;
//     }
//     obterEndereco(user.id, (erro2, endereco) => {
//       if(erro2) {
//         console.error('Deu ruim em endereco', erro2);
//         return;
//       }
//       console.log(`Nome: ${user.nome},
//       Endereco: ${endereco.rua}, Numero: ${endereco.numero}
//       Telefone: (${telefone.ddd}) ${telefone.telefone}`);
//     });
//   });
// });
