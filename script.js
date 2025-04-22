/*
  OPERADOR DE COALESCÊNCIA NULA (??)
  Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null or undefined. Caso contrário, ele retorna o seu operando do lado esquerdo
*/

let content = null
console.log(content ?? "<- É nulo")

const user = {
  name: "Diego",
  avatar: undefined
}

console.log(user.avatar ?? "default.png") //Lógica: Se possui beleza, se não exibe o da direita