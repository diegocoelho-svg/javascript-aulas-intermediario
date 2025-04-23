/* FOR repete até que a condição especificada seja FALSA
  - variável de controle
  - condição
  - incremento ou decremento da variável de controle
*/

for (i = 0; i < 10; i++) {
  console.log(i)
}

// Exemplo de tabuada.
/*console.log(`7x0 = ${7 * 0}`)
console.log(`7x0 = ${7 * 1}`)
console.log(`7x0 = ${7 * 2}`)
console.log(`7x0 = ${7 * 3}`)
console.log(`7x0 = ${7 * 4}`)
console.log(`7x0 = ${7 * 5}`)
console.log(`7x0 = ${7 * 6}`)
console.log(`7x0 = ${7 * 7}`)
console.log(`7x0 = ${7 * 8}`)
console.log(`7x0 = ${7 * 9}`)
console.log(`7x0 = ${7 * 10}`)*/
let number = 7
for (i = 0; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`)
}