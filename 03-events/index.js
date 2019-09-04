const EventEmitter = require('events');
class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, (click) => {
  console.log('um usuario clicou', click);
});

// meuEmissor.emit(nomeEvento, 'na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'no ok');

// let count = 0;
// setInterval(() => {
//   meuEmissor.emit(nomeEvento, 'no ok'+ (count++));
// }, 1000);
//atraves da linha de comando
//executam ações continuas
const stdin = process.openStdin()
stdin.addListener('data', (value) => {
  console.log(`Voce digitou: ${value.toString().trim()}`);
});