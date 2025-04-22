/*
  OBJETO
    - Uma coleção de dados e/ou funcionalidades;
    - Podem ter propriedades e métodos;
*/

// Cria um objeto vazio.
const obj = {}
console.log(obj)
console.log(typeof obj)

// Cria um objeto com propriedades e métodos.
const person = {
  email: "diego@email.com",
  age: 21,
  name: {
    firstName: "Diego",
    surname: "Coelho",
  },
  address: {
    street: "Rua X",
    number: 23,
    city: "São Paulo",
    postal_code: "12345-123"
  },
  message: function(){
    console.log("Hello Diego")
  }
}