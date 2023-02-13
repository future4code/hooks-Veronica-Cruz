function abrirMenu() {
  let barraMenuAberto = document.getElementById("barra-menu");
  if (barraMenuAberto.style.width === "0px") {
    barraMenuAberto.style.width = "180px";
  } else {
    barraMenuAberto.style.width = "0px";
  }
}


function botaoVoltar() {
  window.location = "index.html";
}


function saberMais() {
    document.getElementById("contato");
    console.log(saberMais());
}

