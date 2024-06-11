function anoBotaoJS() {
    let anoJS = 1943;

    document.getElementById('numero-js').innerHTML = `<strong>Ano inserido no JavaScript:</strong> ${anoJS}`;
    let resultado = document.getElementById('validacao-js');

    verificarAnoBissexto(anoJS, resultado);
}

function anoBotaoUsuario() {
    let anoUsuario = document.getElementById('numero-usuario').value;

    let resultado = document.getElementById('validacao-usuario');

    verificarAnoBissexto(anoUsuario, resultado);    
}

function verificarAnoBissexto(ano, resultado) {
    if(ano === '' || ano === ' ') {
        resultado.innerHTML = 'Insira um ano.';
    } else if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        resultado.innerHTML = `O ano de ${ano} é bissexto.`;
    } else {
        resultado.innerHTML = `O ano de ${ano} não é bissexto.`;
    }
}