// Função para formatar o input no padrão desejado
function formatZipCode(input) {
  // Remove todos os caracteres que não são dígitos
  let sanitizedInput = input.replace(/\D/g, '');

  // Adiciona o hífen no quinto caractere se o comprimento for maior que 5
  if (sanitizedInput.length > 5) {
    sanitizedInput = sanitizedInput.replace(/(\d{5})(\d{0,3})/, '$1-$2');
  }

  // Limita o comprimento total para 9 caracteres
  return sanitizedInput.slice(0, 9);
}

// Obter o elemento com o ID "shippingField"
var shippingField = document.getElementById('shippingField');

// Verificar se o elemento existe antes de usar o manipulador
if (shippingField) {
  // Manipulador de evento que formata o input enquanto o usuário escreve
  shippingField.addEventListener('input', function (event) {
    // Obter o valor atual do input
    let inputValue = event.target.value;

    // Formatar o valor como desejado
    let formattedValue = formatZipCode(inputValue);

    // Atualizar o valor do input
    event.target.value = formattedValue;
  });
} else {
  console.log('Elemento #shippingField não encontrado. A função não será executada.');
}

// Função para configurar os contadores
function setupCounter(minusButtonID, plusButtonID, inputFieldID) {
  const minusButton = document.getElementById(minusButtonID);
  const plusButton = document.getElementById(plusButtonID);
  const inputField = document.getElementById(inputFieldID);

  // Verificar se os elementos foram encontrados
  if (minusButton && plusButton && inputField) {
    minusButton.addEventListener('click', function (event) {
      event.preventDefault();
      const currentValue = Number(inputField.value) || 0;
      if (currentValue > 1) {
        inputField.value = currentValue - 1;
      }
    });

    plusButton.addEventListener('click', function (event) {
      event.preventDefault();
      const currentValue = Number(inputField.value) || 0;
      inputField.value = currentValue + 1;
    });
  }
}

// Para os elementos sem "c" no final
setupCounter('minus', 'plus', 'input');

// Para os elementos com "a" no final
setupCounter('minusa', 'plusa', 'inputa');

// Para os elementos com "a" no final
setupCounter('minusc', 'plusc', 'inputc');

// Função para o drawer (gaveta) do carrinho
function drawer() {
  // Seletor para o botão com o ID "minicartIcon"
  var openButton = document.getElementById('minicartIcon');

  // Seletor para o elemento com o ID "minicartDrawer"
  var minicartDrawer = document.getElementById('minicartDrawer');

  // Seletor para os elementos com os IDs "minicartClose" e "minicartCloseButton"
  var closeButton = document.querySelectorAll('#minicartClose, #minicartCloseButton');

  // Seletor para o elemento com o ID "bgLock"
  var bgLock = document.getElementById('bgLock');

  // Verificar se o botão "minicartIcon" foi encontrado
  if (openButton) {
    // Função para adicionar a classe "open" e remover a classe "dn" do carrinho
    function openCart() {
      minicartDrawer.classList.remove('dn');
      minicartDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      bgLock.classList.remove('dn');
      bgLock.classList.add('df');
    }

    // Função para fechar o carrinho
    function closeCart() {
      minicartDrawer.classList.remove('open');
      minicartDrawer.classList.add('dn');
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
      bgLock.classList.remove('df');
      bgLock.classList.add('dn');
    }

    // Adicionar ouvinte de eventos para o botão "minicartIcon"
    openButton.addEventListener('click', openCart);

    // Adicionar ouvinte de eventos para os botões de fechar
    closeButton.forEach(function (button) {
      button.addEventListener('click', closeCart);
    });

    // Adicionar ouvinte de eventos para o elemento "bgLock"
    bgLock.addEventListener('click', closeCart);
  } else {
    console.log('Elemento #minicartIcon não encontrado. A função não será executada.');
  }

  // Mais funcionalidades aqui conforme necessário
}

drawer();