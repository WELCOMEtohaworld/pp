const root = document.documentElement;
const modeBtn = document.querySelector(".modeBtn");
const modeIcon = document.querySelector(".modeBtn > img");

function toggleTheme() {
  const darkMode = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", darkMode ? "light" : "dark");

  modeIcon.src = darkMode ? "img/light_border.png" : "img/dark.png";
}

modeBtn.addEventListener("click", toggleTheme);
