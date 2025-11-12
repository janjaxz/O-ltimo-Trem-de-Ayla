const botoes = document.querySelectorAll(".btn-proximo");
const passos = document.querySelectorAll(".passo");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const proximoPasso = botao.getAttribute("data-proximo");
    const passoAtual = document.querySelector(".passo.ativo");
    const proximoElemento = document.getElementById(`passo-${proximoPasso}`);

    passoAtual.classList.remove("ativo");
    proximoElemento.classList.add("ativo");
  });
});
