
const preencherFormulario = (endereco) => {
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}

const cepValido = (cep) => {
    if (cep.length == 8) {
        return true;
    } else {
        return window.alert("Digite um CEP válido(mínimo 8 caracteres)");
    }
}

const pesquisarCep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        preencherFormulario(endereco);
    }
}
document.getElementById("cep").addEventListener("focusout", pesquisarCep);

function voltar() {
    location = "index.html";
}
