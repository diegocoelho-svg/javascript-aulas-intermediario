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
const user = {
  email: "diego@email.com",
  age: 21,
  name: {
    first_name: "Diego",
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

// Acessando propriedades e métodos usando a notação de ponto
console.log(user.email)

// Acessando propriedade de objetos
console.log(user.name.first_name)

// Executou o método do objeto
user.message()

// Notação de Colchetes
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]()