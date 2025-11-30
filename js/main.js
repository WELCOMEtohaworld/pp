const root = document.documentElement;

function toggleTheme() {
  root.setAttribute(
    "data-theme",
    root.getAttribute("data-theme") === "dark" ? "light" : "dark"
  );
}

document.querySelector(".theme-button").addEventListener("click", toggleTheme);

function mainEffect() {
  const profileBox = document.querySelector(".hero");

  // PC hover
  profileBox.addEventListener("mouseenter", () => {
    profileBox.classList.add("active");
  });

  profileBox.addEventListener("mouseleave", () => {
    profileBox.classList.remove("active");
  });

  // 모바일 click toggle
  profileBox.addEventListener("click", () => {
    profileBox.classList.toggle("active");
  });
}
mainEffect();
