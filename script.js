// for ... of itera sobre valores de um objeto iterável (Array é um objeto iterável)
let students = ["Rodrigo", "João", "Amanda"]

for (let student of students) { // Retorna o conteúdo
  console.log(student)
}

let user = [
  {
    name: "Rodrigo",
    email: "rodrigo@email.com",
  }
]

for (let value of user) {
  console.log(value)
}