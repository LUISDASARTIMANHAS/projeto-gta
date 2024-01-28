const btn = document.querySelector(".btn-plataforma");
const elemPlataformas = document.querySelector(".btn-plataforma .plataformas")

btn.addEventListener("click", (event) => {
    elemPlataformas.classList.toggle("ativo");
});