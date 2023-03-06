//metodo fetch(), buscar arquivo dados.json, ou qualquer API externa, transformando o resultado em um objeto, usando outro metodo reponse.json
fetch('js/dados.json').then(response => response.json())
    .then(corpo => {
        document.getElementById('imagem').innerHTML = corpo.produto1.imagem
        document.getElementById('nome').innerHTML = corpo.produto1.nome
        document.getElementById('preco').innerHTML = corpo.produto1.preco

        document.getElementById('imagem1').innerHTML = corpo.produto2.imagem
        document.getElementById('nome1').innerHTML = corpo.produto2.nome
        document.getElementById('preco1').innerHTML = corpo.produto2.preco

        document.getElementById('imagem2').innerHTML = corpo.produto3.imagem
        document.getElementById('nome2').innerHTML = corpo.produto3.nome
        document.getElementById('preco2').innerHTML = corpo.produto3.preco

        document.getElementById('imagem3').innerHTML = corpo.produto4.imagem
        document.getElementById('nome3').innerHTML = corpo.produto4.nome
        document.getElementById('preco3').innerHTML = corpo.produto4.preco
        
        document.getElementById('imagem4').innerHTML = corpo.produto5.imagem
        document.getElementById('nome4').innerHTML = corpo.produto5.nome
        document.getElementById('preco4').innerHTML = corpo.produto5.preco

        document.getElementById('imagem5').innerHTML = corpo.produto6.imagem
        document.getElementById('nome5').innerHTML = corpo.produto6.nome
        document.getElementById('preco5').innerHTML = corpo.produto6.preco
    });