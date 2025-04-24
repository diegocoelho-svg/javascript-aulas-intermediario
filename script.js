let date = new Date("July, 3, 2024 14:00:00")

// Formata para o dia sempre ter 2 dígitos
let day = date.getDate().toString().padStart(2, "0")
// console.log(day)

// Formata para o mês sempre ter 2 dígitos
let month = (date.getMonth() + 1).toString().padStart(2, "0")
// console.log(month)

let year = date.getFullYear()
let hour = date. getHours()
let minutes = date.getMinutes()

console.log(`${day}/${month}/${year} ás ${hour}:4${minutes}`)