       //.map
//let numeros =  [1, 2, 3, 4, 5 ];
//const numerosDobrados = numeros.map(function(umNumero){
   // return umNumero *2;
//})
//console.log(numerosDobrados)
        //.filter
let idades = [15, 30, 19, 26, 40];
const maiorIdade = idades.filter(function(umaIdade){
    return umaIdade >= 18
})
//console.log(maiorIdade)
          
         //reduce
  let numeros = [5, 7, 16];
  const resultado = numeros.reduce(function(acumulador, umNumero){
      return acumulador + umNumero;
  })       
    console.log(resultado)

         //forEach
   
     let paises = ['Argentina','Brasil','Colombia'];
     paises.forEach(function(umPais){
         console.log(paises)
     })   
        
               //for in usado em objetos literais 
    let pessoa = {
        nome:'Bruno gomes',
        idade:33,
        profissao:'programador'
    }  
    for(let caracteristica in pessoa){
        console.log(pessoa[caracteristica])
    }
             
          //for of usado somente em arrays

    let series = ['Friends', 'Game of Thrones', 'Breaking Bad'];
    for(let umaSerie of series){
        console.log(series)
    }
          
