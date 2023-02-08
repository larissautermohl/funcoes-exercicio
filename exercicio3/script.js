// # Exercício 3

// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

// const somar = (a,b)=>{
//   return a+b
// }
// console.log(somar(1,2))

// const subtrair = (a,b)=>{
//   return a-b
// }
// console.log(subtrair(4,3))

// const multiplicar = (a,b)=>{
//   return a*b
// }
// console.log(multiplicar(2,4))

// const dividir = (a,b)=>{
//   return a/b
// }
// console.log(dividir(4,2))

function soma(num1, num2) {
  const soma = num1 + num2
  return soma
}

function subtracao(num1, num2) {
  const subtracao = num1 - num2
  return subtracao
}

function multiplicacao(num1, num2) {
  const multiplicacao = num1 * num2
  return multiplicacao
}

function divisao(num1, num2) {
  const divisao = num1 / num2
  return divisao
}

// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.
const num1 = 10
const num2 = 40

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
const somaNums = soma(num1, num2)
const subtracaoNums = subtracao(num1, num2)
const multiplicacaoNums = multiplicacao(num1, num2)
const divisaoNums = divisao(num1, num2)

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

console.log(`O resultado da soma de ${num1} e ${num2} é: ${somaNums}`)
console.log(`O resultado da subtração de ${num1} e ${num2} é: ${subtracaoNums}`)
console.log(
  `O resultado da multiplicação de ${num1} e ${num2} é: ${multiplicacaoNums}`
)
console.log(`O resultado da divisão de ${num1} e ${num2} é: ${divisaoNums}`)
