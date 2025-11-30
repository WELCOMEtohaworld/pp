const root = document.documentElement;
const modeBtn = document.querySelector(".modeBtn");

const light = {
  "--c-btn": "#000",
};

const dark = {
  "--c-btn": "#fff",
};

let isDark = false;

modeBtn.addEventListener("click", () => {
  const theme = isDark ? light : dark;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  isDark = !isDark;
});
