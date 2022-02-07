const botao = document.getElementById("mode-selector");
const footer = document.getElementById("footer");
const body = document.getElementsByTagName("body")[0];
const titulo = document.getElementById("page-title");

// body.style.display="none";
botao.addEventListener("click", trocarCor);

body.innerHTML

function trocarCor(){
    botao.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    trocarTexto();
}

function trocarTexto(){
    if (botao.innerHTML == "Dark Mode"){
        botao.innerHTML = "Light Mode";
        titulo.innerHTML = "Dark Mode ON"
    } else{
        botao.innerHTML == "Light Mode"
        botao.innerHTML = "Dark Mode";
        titulo.innerHTML = "Light Mode ON"
    }
}