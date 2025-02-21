
const textDisplay = document.getElementById('text');
const phrases = ['Olá, meu nome é  Ulib', 'Eu vim de longe', 'Eu estou disfarçado', 'Eu vim para ajudar você', 'Busquem conhecimento...'];
let currentPhrase = [];
let i = 0;
let j = 0;
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false
    textDisplay.innerHTML = phrases[0]
    console.log('print');
    
    if(i < phrases.length) {
        if(!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            textDisplay.innerHTML = currentPhrase.join('');
            j++;
            // console.log(currentPhrase);
            textDisplay.innerHTML = currentPhrase.join('');
        }
            
            if(isDeleting && j <= phrases[i].length) {
                currentPhrase.pop();
                j--;
                textDisplay.innerHTML = currentPhrase.join('');
            }
            
            if(j === phrases[i].length) {
                isEnd = true;
                isDeleting = true;
            }

            if(isDeleting && j === 0) {
                currentPhrase = [];
                isDeleting = false;
                i++;
                if(i == phrases.length) {
                    i = 0;
                }
            }
        
    }

    const speedUp = Math.random() * 100;
    const normalSpeed = Math.random() * 200;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
    setTimeout(loop , time);

    // console.log(time);
}

loop();