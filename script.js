class Animal {
  constructor(name) {
    this.name = name
  }

  makeNoise(){
    console.log("Algum som genérico do animal")
  }
}

class Dog extends Animal {
  makeNoise() {
    console.log("Woof! Woof! Woof!")
  }
}

const dog = new Dog("Jade")
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
  makeNoise() {
    console.log("Miau! Miau! Miau!")
  }

  run() {
    console.log("correndo")
  }
}

const cat = new Cat("Aurora")
console.log(cat.name)
cat.makeNoise()
cat.run()
