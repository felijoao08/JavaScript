// Função para embaralhar o array
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Seleciona um índice aleatório
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

// Criando um array de países com seus respectivos arquivos de imagem
let paises = ['Brasil.png', 'Alemanha.png', 'Argentina.png', 'França.png', 'Espanha.png', 'EUA.png', 'Brasil.png', 'Alemanha.png', 'Argentina.png', 'França.png', 'Espanha.png', 'EUA.png'];
console.log('Array original:', paises);

// Embaralha o array de países
let paisesEmbaralhados = embaralhar(paises);
console.log('Array embaralhado:', paisesEmbaralhados);

// Variáveis globais para armazenar o estado das cartas viradas
let cartasViradas = []; // Armazena as cartas atualmente viradas
let numCartasViradas = 0; // Conta o número de cartas viradas

// Função para gerar o tabuleiro
function createBoard() {
    // Seleciona o elemento div onde as imagens serão adicionadas
    var tb = document.getElementById('game-board');
    
    for (let i = 0; i < paisesEmbaralhados.length; i++) {
        // Cria uma nova div para a carta
        var tabuleiro = document.createElement('div');
        tabuleiro.className = 'card'; // Adiciona a classe CSS para estilização
        
        // Define o nome da imagem associada à carta 
        tabuleiro.dataset.image = paisesEmbaralhados[i];
        tabuleiro.dataset.flipped = 'false'; // Define o estado inicial da carta como não virada
        
        // Adiciona um evento para quando a carta for clicada
        tabuleiro.addEventListener('click', flipCard);

        // Adiciona a carta ao tabuleiro
        tb.appendChild(tabuleiro);
    }
}

// Função para virar a carta
function flipCard(event) {
    var card = event.currentTarget;
    
    if (card.dataset.flipped === 'true') return; // Ignora se a carta já estiver virada

    // Muda a imagem de fundo para a imagem associada
    card.style.backgroundImage = `url('imagens/${card.dataset.image}')`;
    card.dataset.flipped = 'true'; // Marca a carta como virada

    // Adiciona a carta à lista de cartas viradas
    cartasViradas.push(card);
    numCartasViradas++;

    // Checa se há um par a ser verificado
    if (numCartasViradas === 2) {
        checkForMatch();
    }
}

// Função para verificar se as cartas viradas formam um par
function checkForMatch() {
    if (numCartasViradas !== 2) return; // Garante que exatamente duas cartas estão viradas

    // Obtém as duas últimas cartas viradas
    const [primeiraCarta, segundaCarta] = cartasViradas;
    
    // Checa se as imagens das duas cartas são iguais
    if (primeiraCarta.dataset.image === segundaCarta.dataset.image) {
        // As cartas formam um par
        console.log('Par encontrado');
        primeiraCarta.removeEventListener('click', flipCard); 
        segundaCarta.removeEventListener('click', flipCard); 
        primeiraCarta.classList.add('match');
        segundaCarta.classList.add('match'); 
    } else {
        // As cartas não formam um par
        console.log('Não é um par.');
        setTimeout(() => {
            primeiraCarta.style.backgroundImage = 'url("imagens/verso.png")'; // Reverte a carta
            segundaCarta.style.backgroundImage = 'url("imagens/verso.png")'; // Reverte a carta
            primeiraCarta.dataset.flipped = 'false'; // Marca como não virada
            segundaCarta.dataset.flipped = 'false'; // Marca como não virada
        }, 500); // Aguarda 1 segundo antes de reverter
    }
    
    // Limpa a lista de cartas viradas e o contador
    cartasViradas = [];
    numCartasViradas = 0;
}
// Função para reiniciar
function reiniciar() {
    location.reload(); // Recarrega a página atual
}


// Inicializa o tabuleiro quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    createBoard();
});
