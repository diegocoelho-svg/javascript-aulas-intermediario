let fruits = ["Apple", "Watermelon", "Lemon", "Strawberry"]
console.log(fruits)

let position = fruits.indexOf("Lemon")
console.log(position)

fruits.splice(position, 1)
console.log(fruits)