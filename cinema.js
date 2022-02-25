let catalogo = [
    {
        codigo: 1,
        titulo: 'Titanic',
        duracao: 3.5,
        atores: ['Leonardo Dicaprio','Kate Winslet'],
        anoDeLancamento: 1997,
        emCartaz:false
    },
     {
        codigo: 2,
        titulo: 'Encanto',
        duracao: 2,
        atores: ['Mirabel Madrigal','bruno Madrigal'],
        anoDeLancamento: 2021,
        emCartaz:true

    }
]
module.exports = catalogo
//Adicionar um novo elemento na array

//let adicionarFilme = filme => catalogo.push(filme)

adicionarFilme(
    {
        codigo: 3,
        titulo: 'Eternos',
        duracao: 3,
        atores: ['Starfox','Thena'],
        anoDeLancamento: 2021,
        emCartaz:true 
    }
)


//console.log(catalogo)


let buscarFilme = codigo => {
    for (let i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === codigo){
            return catalogo[i]
        }
    }
}

console.log(buscarFilme(3))


let alterarStatusEmCartaz = codigo => {
    for(let i = 0; i < buscarFilme.length; i++) {
        if(catalogo[i].emCartaz){
            catalogo[i].emCartaz = false
        }else{
            catalogo[i].emCartaz = true
        }
    }
}

console.log(alterarStatusEmCartaz(1))
console.log(catalogo[0])
