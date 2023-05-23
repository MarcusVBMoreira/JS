/*
//Alerta alguma cois aantes da página html carregar.
alert("Oi 2C turma B");

//Para continuar alguma coisa, ou confirmar alguma ação para saber se você tem certeza de algo.
confirm("Seu prof é o melhor de TI?");

//Para o usuário digitar alguma coisa (ele recebe um texto).
var nome = prompt("Digite seu nome");

//Para ver no console do navegardor a variável 
console.log(nome)

//Para mostrar o valor de uma variável.
document.write(nome)
*/





/*
//Variáveis
//Existem 3 tipos diferentes sendo eleas:

//var
var a = 10
console.log(a);

var a = 15
console.log(a);
//dentro do var quando vc muda o valor da variável ele substitiu o anterior.


//let
let b = 10
console.log(b)

if(true){
    let b = 15
    console.log(b)
}

console.log(b)
//dentro do let, ele é utilizado localmente, ou seja o valor dele dentro de algo é um e fora é outro


//const
const c = 10
console.log(c)

const c = 10
console.log(c)
//dentro da const não é possivel declarar 2 valores diferentes para a mesma variável, ela sempre vai ser a mesma (constante).
*/





/*
//juntando variáveis com alerts

var nome = prompt("Digite seu nome:")
alert("Bom dia " + nome)

//template string => interpolação
alert(`Bom dia ${nome}`)
*/





var n1 = parseInt(prompt("Digite o N1: "))
var n2 = parseInt(prompt("Digite o N2: "))
console.log("N1 é: " + typeof n1)
console.log("N12 é: " + typeof n2)

var soma = n1 + n2
console.log("Soma é: " + typeof soma)


if(soma > 10){
    document.write(`<p class="maior"> A soma de ${n1} com ${n2} é ${soma} </p>`)
}
else{
    document.write(`<p class="menor"> A soma de ${n1} com ${n2} é ${soma} </p>`)
}
