const icone1 = document.querySelector("#icone1");
const imagem1 = document.querySelector("#imagem1");

icone1.addEventListener("mouseenter", () => {
  imagem1.src = "assets/imgs-projetos/projeto_helpup.png";
  icone1.style.display = "none";
});

imagem1.addEventListener("mouseleave", () => {
  imagem1.src = "assets/imgs-projetos/projeto_campo_minado.png";
  icone1.style.display = "block";
});


const icone2 = document.querySelector("#icone2");
const imagem2 = document.querySelector("#imagem2");

icone2.addEventListener("mouseenter", () => {
  imagem2.src = "assets/imgs-projetos/projeto_campo_minado.png";
  icone2.style.display = "none";
});

imagem2.addEventListener("mouseleave", () => {
  imagem2.src = "assets/imgs-projetos/projeto_helpup.png";
  icone2.style.display = "block";
});