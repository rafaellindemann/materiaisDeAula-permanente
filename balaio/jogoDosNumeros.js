let pontos = 0
let perguntas = 0

do{
    let n1 = gerarNumero(0,20)
    let n2 = gerarNumero(0,20)
    let resposta = Number(prompt(`${n1} + ${n2}?`))
    let resultado = n1 + n2
    
    if(resposta == resultado){
        alert('Certo!')
        pontos++
    }else{
        alert('Errado!!')
        pontos--
    }
    perguntas++
}while(perguntas < 10)

function gerarNumero(min, max){
    return Math.floor(Math.random() * (max-min+1) )+ min
}