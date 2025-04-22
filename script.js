let message = "Estou estudando os fundamentos do Javascript."

// Substituindo parte de um texto.
console.log(message.replace("os fundamentos do Javascript", "Métodos de String")) // Primeiro: A ser substituído | Segundo: O que entra no lugar

// Extraindo uma parte da string (start, end)
console.log(message.slice(6, 30)) // Anda 5 caracteres

// Extraindo uma parte da string de trás para frente.
console.log(message.slice(-11))

let textWithSpace = "     Texto de exemplo          "
console.log(textWithSpace.length)
console.log(textWithSpace.trim())
console.log(textWithSpace.trim().length)