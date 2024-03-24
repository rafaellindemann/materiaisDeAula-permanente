// isto serve para tratar as teclas numéricas.
// para outras teclas, remover a conversão para Number
document.onkeyup = function (evento){
    let tecla = Number(evento.key)
    console.log(!isNaN(tecla))
    console.log(tecla)
    if(!isNaN(tecla))
    {// aqui eu sei que é uma resposta e posso corrigir
        console.log("Número")
    }  
}
