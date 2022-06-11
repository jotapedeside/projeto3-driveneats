function togglePrato(prato) {
  const pratoClicada = document.querySelector(".selected");
  if (pratoClicada !== null) {
    pratoClicada.classList.remove("selected");
  }

  prato.classList.add("selected");
}

function toggleBebida(bebida) {
  const bebidaClicada = document.querySelector(".selected");
  if (bebidaClicada !== null) {
    bebidaClicada.classList.remove("selected");
  }

  bebida.classList.add("selected");
}

function toggleSobremesa(sobremesa) {
  const sobremesaClicada = document.querySelector(".selected");
  if (sobremesaClicada !== null) {
    sobremesaClicada.classList.remove("selected");
  }

  sobremesa.classList.add("selected");
}
