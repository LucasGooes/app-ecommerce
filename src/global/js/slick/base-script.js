$(document).ready(function () {
  function setupCounter(minusButtonID, plusButtonID, inputFieldID) {
    const minusButton = document.getElementById(minusButtonID);
    const plusButton = document.getElementById(plusButtonID);
    const inputField = document.getElementById(inputFieldID);

    // Verifica se os elementos foram encontrados
    if (minusButton && plusButton && inputField) {
      minusButton.addEventListener("click", (event) => {
        event.preventDefault();
        const currentValue = Number(inputField.value) || 0;
        if (currentValue > 1) {
          inputField.value = currentValue - 1;
        }
      });

      plusButton.addEventListener("click", (event) => {
        event.preventDefault();
        const currentValue = Number(inputField.value) || 0;
        inputField.value = currentValue + 1;
      });
    }
  }

  function drawer() {
    // Seletor para o botão com o ID "minicartIcon"
    var openButton = $("#minicartIcon");

    // Seletor para o elemento com o ID "minicartDrawer"
    var minicartDrawer = $("#minicartDrawer");

    // Seletor para os elementos com os IDs "#minicartClose" e "#minicartCloseButton"
    var closeButton = $("#minicartClose, #minicartCloseButton");

    // Seletor para o elemento com o ID "bgLock"
    var bgLock = $("#bgLock");

    // Verifica se o botão "minicartIcon" foi encontrado
    if (openButton.length === 0) {
      console.log(
        "Elemento #minicartIcon não encontrado. A função não será executada."
      );
      return;
    }

    // Função para adicionar a classe "open" e remover a classe "dn" do carrinho
    function openCart() {
      minicartDrawer.removeClass("dn");
      minicartDrawer.addClass("open");
      $("body").css("overflow", "hidden");
      bgLock.removeClass("dn").addClass("df");
    }

    // Função para fechar o carrinho
    function closeCart() {
      minicartDrawer.removeClass("open");
      minicartDrawer.addClass("dn");
      $("body").css({ overflowY: "auto", overflowX: "hidden" });
      bgLock.removeClass("df").addClass("dn");
    }

    // Adicionar ouvinte de eventos para o botão "minicartIcon"
    openButton.on("click", openCart);

    // Adicionar ouvinte de eventos para os botões de fechar
    closeButton.on("click", closeCart);

    // Adicionar ouvinte de eventos para o elemento "bgLock"
    bgLock.on("click", closeCart);

    // Mais funcionalidades aqui conforme necessário
  }

  // Para os elementos com "c" no final
  setupCounter("minusc", "plusc", "inputc");

  // Para os elementos sem "c" no final
  setupCounter("minus", "plus", "input");

  drawer();
});
