fetch(`http://economia.awesomeapi.com.br/json/last/USD-BRL`)
  .then((resposta) => {
    return resposta.json();

  })
  .then((economia) => {
    valor = economia.USDBRL.bid
    document.getElementById("valor").innerHTML = "$" + valor;
    document.getElementById("nome").innerHTML = economia.USDBRL.name;
    document.getElementById("codigo").innerHTML = economia.USDBRL.code;
  });
function calcular() {
  valorReal = document.getElementById("real").value;
  var calculo = valorReal * valor;
  document.querySelector("#valorDolar").innerHTML = 'R$' + calculo.toFixed(2);
}
var botao = document.getElementById("botaoCalcular");
botao.addEventListener("click", calcular);
function calculo2() {
  var calculo02 = valorReal / valor;
  document.querySelector("#valorDolar").innerHTML = '$' + calculo02.toFixed(2);
}
function trocar() {
  document.getElementById("real").value = "";
  document.querySelector("#valorDolar").innerHTML = "...";
  document.getElementById("real").placeholder = "Real";
  botao.addEventListener("click", calculo2);

};
function limpar() {
  location.reload()
}
function voltar() {
  location = "index.html";
}


