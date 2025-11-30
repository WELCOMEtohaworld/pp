//메뉴 토글, 호버
function subMenuShow() {
  const menus = document.querySelectorAll(".menu-title");

  menus.forEach((menu) => {
    const subMenu = menu.querySelector(".sub-box");
    if (!subMenu) return;

    menu.addEventListener("mouseenter", () => {
      subMenu.classList.add("show");
    });

    menu.addEventListener("mouseleave", () => {
      subMenu.classList.remove("show");
    });

    menu.addEventListener("click", () => {
      subMenu.classList.toggle("show");
    });
  });
}

subMenuShow();
