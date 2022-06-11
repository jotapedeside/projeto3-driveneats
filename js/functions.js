function togglePrato(prato) {
  const pratoClicada = document.querySelector(".prato.selected");
  if (pratoClicada !== null) {
    pratoClicada.classList.remove("selected");
  }
  prato.classList.add("selected");
}

function toggleBebida(bebida) {
  const bebidaClicada = document.querySelector(".bebida.selected");
  if (bebidaClicada !== null) {
    bebidaClicada.classList.remove("selected");
  }
  bebida.classList.add("selected");
}

function toggleSobremesa(sobremesa) {
  const sobremesaClicada = document.querySelector(".sobremesa.selected");
  if (sobremesaClicada !== null) {
    sobremesaClicada.classList.remove("selected");
  }
  sobremesa.classList.add("selected");
}

if (pratoClicada == null && bebidaClicada == null && sobremesaClicada == null) {
  const btn = document.querySelector(".checkout");
  classList.add(".btn-disabler");
}
