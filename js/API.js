const array1 =
  '{ "pessoa1": {"nome": "Amanda", "profissao": "Secretária Executiva", "idade": 25 , "cpf": "000.000.000-00" , "salario": "2090,00" , "aproveitamento" : "90%" }, "pessoa2": {"nome": "Alex", "profissao": "Tec. em TI", "idade": 32 , "cpf": "111.000.000-00", "salario": "3300,30" , "aproveitamento" : "91%"},    "pessoa3": {"nome": "Hugo", "profissao": "Tec. em Logistica", "idade": 37 , "cpf": "333.000.000-00", "salario": "2950,00" , "aproveitamento" : "68%" },  "pessoa4": {"nome": "Jessica", "profissao": "Profissional do RH", "idade": 25, "cpf": "444.000.000-00", "salario": "2500,00" , "aproveitamento" : "87%" },  "pessoa5": {"nome": "Nicole", "profissao": "profissional de Marketing", "idade": 22 , "cpf": "555.000.000-00", "salario": "2000,00" , "aproveitamento" : "80%"},  "pessoa6": {"nome": "Eduardo", "profissao": "Contador", "idade": 31, "cpf": "999.000.000-00", "salario": "3200,00" , "aproveitamento" : "60%" }}';
const json = JSON.parse(array1);

function exibir() {
  document.getElementById("nome").innerHTML =
    "<b> Nome: </b>" + json.pessoa1.nome;
  document.getElementById("img").src = "img/pessoa1.png";
  document.getElementById("cpf").innerHTML = "<b> CPF: </b>" + json.pessoa1.cpf;
  document.getElementById("profissao").innerHTML =
    "<b> Profissão: </b>" + json.pessoa1.profissao;
  document.getElementById("idade").innerHTML =
    " <b> Idade: </b>" + json.pessoa1.idade + " anos";
  document.getElementById("salario").innerHTML = " <b> Salário R$: </b>" + json.pessoa1.salario;
  document.getElementById("aproveitamento").innerHTML = " <b> Aproveitamento: </b>" + json.pessoa1.aproveitamento;
}
function exibir2() {
  document.getElementById("nome").innerHTML =
    "<b> Nome: </b>" + json.pessoa2.nome;
  document.getElementById("img").src = "img/pessoa2.png";
  document.getElementById("cpf").innerHTML = "<b> CPF: </b>" + json.pessoa2.cpf;
  document.getElementById("profissao").innerHTML =
    "<b> Profissão: </b>" + json.pessoa2.profissao;
  document.getElementById("idade").innerHTML =
    "<b> Idade: </b>" + json.pessoa2.idade + " anos";
  document.getElementById("salario").innerHTML = " <b> Salário R$: </b>" + json.pessoa2.salario;
  document.getElementById("aproveitamento").innerHTML = " <b> Aproveitamento: </b>" + json.pessoa2.aproveitamento;
}
function exibir3() {
  document.getElementById("nome").innerHTML =
    "<b> Nome: </b>" + json.pessoa3.nome;
  document.getElementById("img").src = "img/pessoa3.png";
  document.getElementById("cpf").innerHTML = "<b> CPF: </b>" + json.pessoa3.cpf;
  document.getElementById("profissao").innerHTML =
    "<b> Profissão: </b>" + json.pessoa3.profissao;
  document.getElementById("idade").innerHTML =
    "<b> Idade: </b>" + json.pessoa3.idade + " anos";
  document.getElementById("salario").innerHTML = " <b> Salário R$: </b>" + json.pessoa3.salario;
  document.getElementById("aproveitamento").innerHTML = " <b> Aproveitamento: </b>" + json.pessoa3.aproveitamento;
}
function exibir4() {
  document.getElementById("nome").innerHTML =
    "<b> Nome: </b> " + json.pessoa4.nome;
  document.getElementById("img").src = "img/pessoa4.png";
  document.getElementById("cpf").innerHTML = "<b> CPF: </b>" + json.pessoa4.cpf;
  document.getElementById("profissao").innerHTML =
    "<b> Profissão: </b> " + json.pessoa4.profissao;
  document.getElementById("idade").innerHTML =
    "<b> Idade: </b>" + json.pessoa4.idade + " anos";
  document.getElementById("salario").innerHTML = " <b> Salário R$: </b>" + json.pessoa4.salario;
  document.getElementById("aproveitamento").innerHTML = " <b> Aproveitamento: </b>" + json.pessoa4.aproveitamento;
}
function exibir5() {
  document.getElementById("nome").innerHTML =
    "<b> Nome: </b> " + json.pessoa5.nome;
  document.getElementById("img").src = "img/pessoa5.png";
  document.getElementById("cpf").innerHTML = "<b> CPF: </b>" + json.pessoa5.cpf;
  document.getElementById("profissao").innerHTML =
    "<b> Profissão: </b>" + json.pessoa5.profissao;
  document.getElementById("idade").innerHTML =
    "<b> Idade: </b>" + json.pessoa5.idade + " anos";
  document.getElementById("salario").innerHTML = " <b> Salário R$: </b>" + json.pessoa5.salario;
  document.getElementById("aproveitamento").innerHTML = " <b> Aproveitamento: </b>" + json.pessoa5.aproveitamento;
}
function exibir6() {
  document.getElementById("nome").innerHTML =
    "<b> Nome: </b> " + json.pessoa6.nome;
  document.getElementById("img").src = "img/pessoa6.png";
  document.getElementById("cpf").innerHTML = "<b> CPF: </b>" + json.pessoa6.cpf;
  document.getElementById("profissao").innerHTML =
    "<b> Profissão: </b>" + json.pessoa6.profissao;
  document.getElementById("idade").innerHTML =
    "<b> Idade: </b>" + json.pessoa6.idade + " anos";
  document.getElementById("salario").innerHTML = " <b> Salário R$: </b>" + json.pessoa6.salario;
  document.getElementById("aproveitamento").innerHTML = " <b> Aproveitamento: </b>" + json.pessoa6.aproveitamento;
}
function mascara_cpf() {
  var cpf = document.getElementById('cpf')
  if (cpf.value.length === 3 || cpf.value.length === 7) {
    cpf.value += '.'
  } else if (cpf.value.length == 11) {
    cpf.value += '-'
  }
}

function logar() {
  var login = document.getElementById("cpf").value;
  var senha = document.getElementById("senha").value;
  if (login == "444.444.444-44" && senha == "adm") {
    location.href = "API-Fake-adm.html";
  } else if (login == "111.111.111-11" && senha == "111") {
    document.getElementById("botao-logar").onclick = exibir();
    document.getElementById("aproveitamento").innerHTML = null
  } else if (login == "222.222.222-22" && senha == "222") {
    document.getElementById("botao-logar").onclick = exibir2();
    document.getElementById("aproveitamento").innerHTML = null
  } else if (login == "333.333.333-33" && senha == "333") {
    document.getElementById("botao-logar").onclick = exibir3();
    document.getElementById("aproveitamento").innerHTML = null

  } else if (login == "555.555.555-55" && senha == "555") {
    document.getElementById("botao-logar").onclick = exibir4();
    document.getElementById("aproveitamento").innerHTML = null
  } else if (login == "666.666.666-66" && senha == "666") {
    document.getElementById("botao-logar").onclick = exibir5();
    document.getElementById("aproveitamento").innerHTML = null
  } else if (login == "777.777.777-77" && senha == "777") {
    document.getElementById("botao-logar").onclick = exibir6();
    document.getElementById("aproveitamento").innerHTML = null
  } else {
    alert('CPF ou senha invalido(s)')
  }
}
function limparDados() {
  document.getElementById("nome").innerHTML = null
}
console.log(json);