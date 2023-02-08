// # Exercício 2
// Declare e invoque as funções abaixo:

// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

function soma(num1, num2) {
  const somar = num1 + num2
  console.log(`A soma de ${num1} + ${num2} é: ${somar} `)
}
soma(4, 4)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function ehMaior(num1, num2) {
  const numeros = num1 >= num2
  console.log(`O numero ${num1} é maior que o numero ${num2} ${numeros}`)
}
ehMaior(10, 5)

// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

function paridade(numero) {
  const ehPar = numero % 2 === 0
  console.log(` O numero ${numero} é par? ${ehPar}`)
}
paridade(5)

// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.
function calcular (salario){
 const desconto = salario  * 0.1
 const salarioLiquido = salario - desconto 
 
 return salarioLiquido
}
console.log(calcular (1500.00))

// function salarioDesconto(bruto, liquido) {
//   const salario = bruto - (bruto * 10) / 100
//   console.log(`O salário líquido com desconto de 10% é: ${salario}`)
// }
// salarioDesconto(1000, 100)

// const salarioBruto = 3000;
// function salarioDesconto(salarioBruto) {
//   const salario = salarioBruto - (salarioBruto * 10 / 100)
//   return salario;
// }
// const resultado = salarioDesconto(salarioBruto)
//   console.log(`O salário líquido com desconto de 10% é: ${resultado}`)
