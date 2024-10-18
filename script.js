const botaoEnlouquecer = document.getElementById('enlouquecer');
const camaroBug = document.getElementById('camaro-bug');

botaoEnlouquecer.addEventListener('click', () => {
  const url = document.getElementById('site-url').value;

  if (!url) {
    alert('Por favor, insira um link válido!');
    return;
  }

  // Abre a página em uma nova aba
  const novaJanela = window.open(url);

  // Espera a página carregar e injeta o caos
  novaJanela.onload = () => {
    novaJanela.document.body.style.transition = 'all 0.3s';
    setInterval(() => {
      // Alterna cores de fundo e texto
      novaJanela.document.body.style.backgroundColor = corAleatoria();
      novaJanela.document.body.style.color = corAleatoria();
      // Embaralha todo o texto da página
      novaJanela.document.body.innerHTML = embaralharTexto(novaJanela.document.body.innerHTML);
    }, 500);

    // Ativa o "bug do Camaro"
    camaroBug.style.display = 'block';
    setTimeout(() => camaroBug.style.display = 'none', 3000);
  };
});

// Função para gerar uma cor aleatória
function corAleatoria() {
  return `rgb(${aleatorio(255)}, ${aleatorio(255)}, ${aleatorio(255)})`;
}

// Função para gerar um número aleatório até o valor máximo
function aleatorio(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Função para embaralhar um texto
function embaralharTexto(texto) {
  return texto.split('').sort(() => Math.random() - 0.5).join('');
}
