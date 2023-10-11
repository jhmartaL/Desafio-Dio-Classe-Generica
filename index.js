class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque

        if (this.tipo === "mago") {
            ataque = "usou magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada"
        } else if (this.tipo === "monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        } else {
            ataque = ""
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi1 = new heroi("Júlio", 23, "mago")
heroi1.atacar()

let heroi2 = new heroi("Flávio", 20, "guerreiro")
heroi2.atacar()

let heroi3 = new heroi("Ruan", 23, "monge")
heroi3.atacar()

let heroi4 = new heroi("Lucas", 28, "ninja")
heroi4.atacar()