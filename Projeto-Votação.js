console.clear()
console.log()
const prompt = require('prompt-sync')()


let idade = " "
let Candidato_1 = 0
let Candidato_2 = 0
let Candidato_3 = 0
let Nulo = 0
let Branco = 0


function autorizaVoto(anoNascimento) {
   idade = 2022 - anoNascimento
  
  if (idade >= 70){
   console.log()
   console.log(` Você possui ${idade} anos.`)
   console.log( " O seu voto é opcional. ")
  }
  else if (idade >= 18){
    console.log()
   console.log(` Você possui ${idade} anos.`)
   console.log( " O seu voto é obrigatório. ")
  }
  else if (idade >= 16) {
    console.log()
   console.log(` Você possui ${idade} anos.`)
   console.log( " O seu voto é opcional. ")
  }
  else {
    console.log() 
    console.log(` Você possui ${idade} anos.`)
    prompt( " O seu voto será negado, pois você é menor de idade. ")      
  }
  return idade
}

function votacao(autorizacao, voto){
  
  console.log()
  console.log( " 1 - Candidato 1")
  console.log( " 2 - Candidato 2")
  console.log( " 3 - Candidato 3")
  console.log( " 4 - Nulo")
  console.log( " 5 - Branco")
  console.log()
  console.log()
  let escolha = prompt(" Escolha o seu voto pelo número: ")
  
  if (escolha == "1"){
      console.log()
      console.log(" Você votou no Candidato 1.")
    
    return  Candidato_1 ++
    
  }
 else if (escolha == "2"){
    console.log()
    console.log(" Você votou no Candidato 2.")
  
 return Candidato_2 ++
     
  }
  else if (escolha == "3"){
      console.log()
      console.log(" Você votou no Candidato 3.")
     return Candidato_3 ++
    
  }
  else if (escolha == "4"){
      console.log()
      console.log(" Você votou nulo.")
    return  Nulo ++
    
  }
  else if (escolha == "5"){
      console.log()
      console.log(" Seu voto foi em branco.")
    return Branco ++
    
  }
  else {
  console.log()
  console.log( " Voto inválido.")
  console.log()
  console.log( " Escolha uma opção válida. ")
  }  
}

function exibirResultados() {
console.clear()
console.log()
console.log(`Nosso Candidato 1 possui ${Candidato_1} voto(s).`)
  
console.log(`Nosso Candidato 2  possui ${Candidato_2} voto(s).`)
  
console.log(`Nosso Candidato 3 possui ${Candidato_3} voto(s).`)

console.log(`${Nulo} voto(s) foram nulo.`)

console.log(`${Branco} voto(s) foram em branco.`) 

  }
let novoVoto = "s"
while ( novoVoto == "s"){
  console.clear()
  console.log()
  console.log( " Olá, seja bem-vindo ao sistema de eleição.")
  console.log()
  console.log()  
  ano = +prompt(" Digite o seu ano de nascimento: ")

autorizaVoto(ano)

if ( idade < 16 ){
  continue
}

votacao()
  console.clear()
  console.log()
    novoVoto = prompt( " Mais alguém irá votar? s ou n: ")

}

exibirResultados()

let resultados = [Candidato_1 , Candidato_2 , Candidato_3]
resultados.sort((a,b) => b - a)

if ( resultados[0] == Nulo || resultados[0] == Branco){
 console.log()
 console.log(" O(s) voto(s) foram em sua maioria para branco ou nulo, não houveram vencedores. ")
  return
}

else if ( resultados [0] == resultados [1]){
  console.clear()
  console.log(`Houve um empate entre candidatos.`)
  exibirResultados()
  return
}
else{
if (resultados[0] == Candidato_1){
  console.log()
  console.log( `O Candidato 1 venceu com ${Candidato_1} voto(s).`)
  return
}
if (resultados[0] == Candidato_2){
  console.log()
  console.log( `O Candidato 2 venceu com ${Candidato_2} voto(s).`)
  return
}
if (resultados[0] == Candidato_3){
  console.log()
  console.log( `O Candidato 3 venceu com ${Candidato_3} voto(s).`)
  return
}  
}













  








  




