//토글 누르면 나옴
const btn = document.querySelector(".toggle");
const panel = document.querySelector("#mobile-preview");
const icon = btn.querySelector(".toggle-icon");
const text = btn.querySelector(".toggle-text");

btn.addEventListener("click", () => {
  const isOpen = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!isOpen));
  panel.hidden = isOpen;

  icon.textContent = isOpen ? "▲" : "▼";
  text.textContent = isOpen ? "View Mobile Screen" : "Close Mobile Preview";
});

//링크
document.querySelectorAll(".project-link").forEach((item) => {
  item.addEventListener("mouseenter", () => item.classList.add("is-hover"));
  item.addEventListener("mouseleave", () => item.classList.remove("is-hover"));
});
