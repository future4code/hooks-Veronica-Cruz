
const botaoMobile = document.getElementById('botao-menu');

function toggleMenu () {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

botaoMobile.addEventListener('click',toggleMenu );

const botaoAddProduto = document.querySelector("#send")

botaoAddProduto.addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.querySelector("#descricao");

    const value = name.value

    localStorage.setItem('valueText', text);
});

botaoAddProduto.addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.querySelector("#preco");

    const value = name.value

    localStorage.setItem('valueText', text);
});

botaoAddProduto.addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.querySelector("#quantidade");

    const value = name.value

    localStorage.setItem('valueText', text);
});

botaoAddProduto.addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.querySelector("#link-foto");

    const value = name.value

    localStorage.setItem('valueText', text);
});

exibirNoEstoque = document.querySelector("#inputButton2");

exibirNoEstoque.addEventListener("click", function(){
    const novoProduto = document.querySelector("#viewSessionSotorage");
    novoProduto.textContent = localStorage.getItem('valueText')
})
