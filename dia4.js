const prompt = require ('prompt-sync') ();

var p1 = parseFloat(prompt ('Digite sua primeira nota: '))
console.log(typeof p1)

var p2 = parseFloat(prompt ('Digite sua segunda nota: '))
console.log(typeof p2)

var p3 = parseFloat(prompt ('Digite sua terceira nota: '))
console.log(typeof p3)

var media = p1 + p2 + p3 / 3
console.log(media)


/* if (p1 | p2 | p3 != Number){
  console.log('Tem que ser numero')
  return
} else{
  var media = p1 + p2 + p3 / 3
  console.log(media)
}

 */


/*
  Exercicio: Peça para o usuário inserir 3 notas (P1, P2 e P3), Some essas notas e imprima a média da pessoa (a média é a soma das 3 notas, dividido por 3).

  método: parseFloat()

  - Com o método parseFloat() nós conseguimos transformar a informação que está sendo recebida para um tipo number ao invés de string
  - foi utilizado o prompt novamente para pegar as informações do usuário através do terminal

*/