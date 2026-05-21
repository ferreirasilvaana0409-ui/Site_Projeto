```javascript
// ===============================
// NERDVERSE - script.js
// ===============================

// Mensagem de boas-vindas
window.addEventListener("load", () => {
  console.log("Bem-vindo ao NerdVerse!");
  alert("🚀 Bem-vindo ao NerdVerse!");
});

// ===============================
// Botão Explorar
// ===============================

const botao = document.querySelector(".btn");

if (botao) {
  botao.addEventListener("click", (e) => {
    e.preventDefault();

    alert("🔥 Você entrou no universo nerd!");
  });
}

// ===============================
// Cards Interativos
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 20px #00c3ff";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.5)";
  });
});

// ===============================
// Tema Escuro / Claro
// ===============================

const temaBtn = document.createElement("button");

temaBtn.innerText = "🌙 Alternar Tema";

temaBtn.style.position = "fixed";
temaBtn.style.bottom = "20px";
temaBtn.style.right = "20px";
temaBtn.style.padding = "12px 18px";
temaBtn.style.border = "none";
temaBtn.style.borderRadius = "10px";
temaBtn.style.background = "#6a00ff";
temaBtn.style.color = "white";
temaBtn.style.cursor = "pointer";
temaBtn.style.fontWeight = "bold";
temaBtn.style.zIndex = "1000";

document.body.appendChild(temaBtn);

let darkMode = true;

temaBtn.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.background = "#0d0d0d";
    document.body.style.color = "white";
    temaBtn.innerText = "🌙 Alternar Tema";
  } else {
    document.body.style.background = "#f4f4f4";
    document.body.style.color = "#111";
    temaBtn.innerText = "☀️ Alternar Tema";
  }
});

// ===============================
// Notícias Nerd Automáticas
// ===============================

const noticias = [
  "🎮 Novo jogo RPG anunciado para 2026!",
  "🦸 Filme da Marvel bate recorde de bilheteria!",
  "⚔️ Novo anime de fantasia estreia esta semana!",
  "👾 Console retrô volta à moda entre gamers!",
  "🚀 Evento geek internacional confirmado!"
];

function mostrarNoticia() {
  const indice = Math.floor(Math.random() * noticias.length);

  console.log(noticias[indice]);
}

setInterval(mostrarNoticia, 5000);

// ===============================
// Relógio Nerd
// ===============================

const relogio = document.createElement("div");

relogio.style.position = "fixed";
relogio.style.top = "20px";
relogio.style.right = "20px";
relogio.style.background = "#111";
relogio.style.padding = "10px 15px";
relogio.style.borderRadius = "10px";
relogio.style.color = "#00e1ff";
relogio.style.fontWeight = "bold";
relogio.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";

document.body.appendChild(relogio);

function atualizarRelogio() {
  const agora = new Date();

  const hora = agora.toLocaleTimeString("pt-BR");

  relogio.innerText = `🕒 ${hora}`;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();
```

