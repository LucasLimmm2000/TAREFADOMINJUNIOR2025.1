/*
ids:
#notas          -> input onde escreve as notas 
#notasAdd       -> botão onde adiciona a nota digitada
#textodenotas   -> textarea onde vai aparecer as notas
#mediabotao     -> botão para calcular média 
#mediafinal     -> <p> onde irá aparecer a média 
*/

const notaInput = document.getElementById('notas'); // Corrigindo nome da variável
const notasAdd = document.getElementById('notasAdd');
const textodenotas = document.getElementById('textodenotas');
const mediabotao = document.getElementById('mediabotao');
const mediafinal = document.getElementById('mediafinal');

// Armazena as notas digitadas (agora como números reais)
let notas = [];

// Função que adiciona uma nota ao array
notasAdd.addEventListener('click', function() {
    let notaDigitada = notaInput.value.trim(); // Captura o valor do input

    // Substitui vírgula por ponto
    notaDigitada = notaDigitada.replace(',', '.');

    // Verifica se é um número válido
    if (!isNaN(notaDigitada) && notaDigitada !== '') {
        let nota = parseFloat(notaDigitada); // Converte para número

        // Adiciona ao array
        notas.push(nota);

        // Atualiza o textarea mostrando as notas adicionadas
        textodenotas.value = notas
            .map((nota, index) => `Nota ${index + 1}: ${nota.toFixed(2)}`)
            .join('\n');

        // Limpa o input
        notaInput.value = '';
    } else {
        alert('Por favor, entre com uma nota válida');
    }
});

// Função que calcula a média
mediabotao.addEventListener('click', function() {
    if (notas.length === 0) {
        alert('Por favor, adicione algumas notas antes de calcular a média');
        return;
    }

    // Calcula a soma e a média
    const sum = notas.reduce((acc, nota) => acc + nota, 0);
    const average = (sum / notas.length).toFixed(2);

    // Exibe a média
    mediafinal.textContent = `A média é: ${average}`;
});
