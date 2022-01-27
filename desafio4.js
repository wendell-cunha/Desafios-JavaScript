//(1)
function mensagem () {
    console.log('Oláaaaa Mundo')
}
mensagem()
//(2)

function Name(nome){
    console.log(nome)
}
Name('Wendell')

//(3)

function pessoa(nome,idade,estilo){
    console.log(nome,idade,estilo)
}

pessoa('Wendell', 26, 'MPB')

//(4)

function preferencias(filme, musica){
    console.log(filme, musica)

}
preferencias('Shrek 2', 'Amado- Vanessa da Mata')

// (5)

function triplo(a) {
    return 3 * a;
}

console.log(triplo(6455))

//eu pensei em fazer direto console.log (3 * a)direto na função
//mas preferi usar o return. Qual dos dois seria mais inteligente usar pensando em otimizar o código?