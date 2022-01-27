// 1
let Wendell = {
    idade: 26,
    cidade: 'Belo Horizonte',
    comidaFavorita: 'estrogonoff  de frango'
}
console.log(Wendell)
//2
Wendell.telefone = 975615338
console.log(Wendell)
//3

delete Wendell.cidade
console.log(Wendell)

//4

let cadastro = []

pessoa1 = {
    nome: 'Wendell',
    idade: 26,
    telefone: 975615338,
    amigos: ['China', 'Laura', 'Gustavo', 'André']
}

pessoa2 = {
    nome: 'Lenimar',
    idade: 50,
    telefone: 985129679,
    amigos: ['Thamara', 'Patricia', 'Alexandra', 'Wilson']

}

pessoa3 = {
    nome: 'Vinicius',
    idade: 24,
    telefone: 985124529,
    amigos: ['Brisa', 'Fernando', 'Marcos', 'Guilie']
    
}

pessoa4 = {
    nome: 'Luciana',
    idade: 45,
    telefone: 99856679,
    amigos: ['Girlene', 'Mariana', 'Robinho', 'Marina']
    
}

pessoa5 = {
    nome: 'Joaquim',
    idade: 80,
    telefone: 966719679,
    amigos: ['José', 'Carlos', 'Marquinhos', 'lauro']
    
}

cadastro.push(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5)
console.log(cadastro)