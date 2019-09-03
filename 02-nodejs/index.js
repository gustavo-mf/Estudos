/* 
0 - Obter um usuario
1 - Obter numero de telefone de um usuario a partir de seu id
2 - Obter o endereço do usuario pelo id
*/

function obterUsuario(callback) {
  setTimeout(() =>{
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      dataNasc: new Date()
    });
  }, 1000);
}

function obterTelefone(idUser, callback) {
  setTimeout(() =>{
    return callback(null, {
      telefone: 12345678,
      ddd: 51
    });
  }, 2000);
}

function obterEndereco(idUser, callback) {
  setTimeout(() =>{
    return callback(null, {
      rua: 'Agrabah',
      numero: 0
    });
  }, 2000);
}

obterUsuario((erro, user) => {
  // null || "" || 0 === false
  if(erro) {
    console.error('Deu ruim em usuario', erro);
    return;
  }
  obterTelefone(user.id, (erro1, telefone) => {
    if(erro1) {
      console.error('Deu ruim em telefone', erro1);
      return;
    }
    obterEndereco(user.id, (erro2, endereco) => {
      if(erro2) {
        console.error('Deu ruim em endereco', erro2);
        return;
      }
      console.log(`Nome: ${user.nome},
      Endereco: ${endereco.rua}, Numero: ${endereco.numero}
      Telefone: (${telefone.ddd}) ${telefone.telefone}`);
    });
  });
});

//const telefone = obterTelefone(usuario.id);
//const endereco = obterEndereco(usuario.id);

//console.log(telefone);
//console.log(endereco);