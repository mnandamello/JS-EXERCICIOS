const prompt = require ('prompt-sync') ();

var nome = prompt('Digite seu nome: ')
console.log(nome.length)

var n1 = parseInt(prompt('Digite o 1 numero: '))
var n2 = parseInt(prompt('Digite o 2 numero: '))
var n3 = parseInt(prompt('Digite o 3 numero: '))

if (n1 < n2 && n1 < n3 && n2 < n3){
  console.log(n1,n2,n3)
}
if (n1 < n2 && n1 < n3 && n3 < n2){
  console.log(n1,n3,n2)
}
else if(n2 < n1 && n2 < n3 && n1 < n3){
  console.log(n2,n1,n3)
}
else if(n2 < n1 && n2 < n3 && n3 < n1){
  console.log(n2,n3,n1)
}
else if(n3 < n1 && n3 < n2 && n1 < n2){
  console.log(n3,n1,n2)
}
else if(n3 < n3 && n2 < n3 && n2 < n1){
  console.log(n3,n2,n1)
}



