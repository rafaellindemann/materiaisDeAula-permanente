
let divs = []
superDiv = document.getElementById('superDiv')

function adicionar(){
    divs.push(`<div id="miniDiv${divs.length}">mini${divs.length}</div>`)
    superDiv.innerHTML += divs[divs.length-1]
    // superDiv.innerHTML = ''
    // for(i=0; i<divs.length; i++){
    //     superDiv.innerHTML += divs[i]
    // }

}