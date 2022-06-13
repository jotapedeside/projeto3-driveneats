let arr = [false, false, false];

function togglePrato(prato) {
  const pratoClicada = document.querySelector(".prato.selected");
  if (pratoClicada !== null) {
    pratoClicada.classList.remove("selected");
  }
  prato.classList.add("selected");
  arr[0] = true;
  checkSelected();
}

function toggleBebida(bebida) {
  const bebidaClicada = document.querySelector(".bebida.selected");
  if (bebidaClicada !== null) {
    bebidaClicada.classList.remove("selected");
  }
  bebida.classList.add("selected");
  arr[1] = true;
  checkSelected();
}

function toggleSobremesa(sobremesa) {
  const sobremesaClicada = document.querySelector(".sobremesa.selected");
  if (sobremesaClicada !== null) {
    sobremesaClicada.classList.remove("selected");
  }
  sobremesa.classList.add("selected");
  arr[2] = true;
  checkSelected();
}

function btnClicked() {
  if (checkSelected() === true) {
    const chk = document.querySelector(".check-order");
    chk.classList.add("check");
    const ord = document.querySelector(".confirm-order");
    ord.classList.add("confirmed");
  }
}

function checkSelected() {
  if (arr[0] == true && arr[1] == true && arr[2] == true) {
    const btn = document.querySelector(".checkout-btn");
    btn.classList.add("btn-changer");
    btn.innerHTML = "<p>Fechar pedido</p>";
    return true;
  }
}
