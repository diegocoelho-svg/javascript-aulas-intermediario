class Animal {
  constructor(name) {
    this.name = name
  }

  makeNoise(){
    console.log("Algum som genérico do animal")
  }
}

class Dog extends Animal {
  // Não tem nada aqui.
}

const dog = new Dog("Jade")
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
  // Não tem nada aqui.
}

const cat = new Cat("Aurora")
console.log(cat.name)
cat.makeNoise()