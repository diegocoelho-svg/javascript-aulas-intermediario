class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  sendEmail() {
    console.log("E-mail enviado para", this.name, "para o endereço", this.email)
  }
}

const user = new User("Diego", "diego@email.com")
user.sendEmail()

