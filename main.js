const form = document.getElementById('form-contatos');
const contatos = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        contatos.push(inputNomeContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}