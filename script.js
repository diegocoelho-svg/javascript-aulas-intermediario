let myArray = [
  "Um texto",
  10,
  true,
  function() {
    console.log("Função dentro do Array")
  },
  {
    name: "Diego",
    email: "diego@email.com"
  }
]

// Texto.
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
myArray[3]()
console.log(myArray[4].name, myArray[4].email)
console.log(myArray[4].email)
