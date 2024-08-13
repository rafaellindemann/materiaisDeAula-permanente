function falar() {
  let texto = document.getElementById("texto").value;
    
const speech = new SpeechSynthesisUtterance()
speech.text = texto //"Testando texto para teste"
speech.lang = "pt-BR"
window.speechSynthesis.speak(speech)
}


// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance

