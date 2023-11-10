const prompt = require ('prompt-sync') ();

var nome = prompt('Digite seu nome aqui: ')

console.log('Seu nome é:' , nome.toUpperCase())

/*
  Exercicio: Receba o nome do usuário como entrada e Imprima o nome do usuário com todas as letras em maiúsculo

  método: prompt e .toUpperCase()

  - pacote externo utilizado: npm i prompt-sync (com ele consegui receber dados do usuário através do terminal), se fosse pela web usaria só o prompt;
  - o método .toUpperCase() transforma as letras em letras maiusculas, independente de como estão;

*/