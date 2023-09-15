
let entradaAnalogica, entradaDigital
const tAtualizacao = 500;
// Armazena a url onde roda a aplicação
url = "http://192.168.0.101"

// Função que lê o valor do input e envia para a placa (estrutura: ip/rota?variavel=valor)
function enviaAnalogica() {
  var valor = document.getElementById("saidaAnalogica").value;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url + "/saidaAnalogica?input1=" + valor, true);
  xhttp.send();
}

// Função acionada pelo botão que envia para a placa um comando (estrutura: ip/rota)
function clickOn() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url + "/saidaDigital/on", true);
  xhttp.send();
  document.getElementById("saidaDigital").innerHTML = "ON";
}

// Igual a anterior, apenas altera a rota
function clickOff() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url + "/saidaDigital/off", true);
  xhttp.send();
  document.getElementById("saidaDigital").innerHTML = "OFF";
}

// A cada 0,5 segundos solicita um valor da placa (estrutura: ip/rota)
// A placa responde com um valor (this.responseText), simulando valor analógico, que é lido pela função interna
function recebeAnalogica() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      entradaAnalogica = this.responseText;
      document.getElementById("entradaAnalogica").innerHTML = entradaAnalogica;
      console.log(`EA: ${entradaAnalogica}`);
    }
  };
  xhttp.open("GET", url + "/entradaAnalogica", true);
  xhttp.send();
}
setInterval(recebeAnalogica, tAtualizacao); // chama a função de leitura a cada tAtualizacao milissegundos

// Igual a anterior, só que o valor retornado é "on" ou "off" (simulando valor digital)
function recebeDigital() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      entradaDigital = this.responseText;
      document.getElementById("entradaDigital").innerHTML = entradaDigital;
      console.log(`ED: ${entradaDigital}`);
    }
  };
  xhttp.open("GET", url + "/entradaDigital", true);
  xhttp.send();
}

setInterval(recebeDigital, tAtualizacao); // chama a função de leitura a cada tAtualizacao milissegundos
