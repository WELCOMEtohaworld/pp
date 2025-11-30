let mainEffectAction = false;

function mainEffect() {
  // hero 이벤트 등록
  const hero = document.querySelector(".hero");
  const aboutMeBtn = document.querySelector(".menu-title.aboutme");

  aboutMeBtn.addEventListener("mouseenter", () => {
    hero.classList.add("active");
  });
  aboutMeBtn.addEventListener("click", () => {
    hero.classList.add("active");
  });

  hero.addEventListener("mouseenter", () => {
    hero.classList.add("active");
  });
  hero.addEventListener("mouseleave", () => {
    hero.classList.remove("active");
  });
  hero.addEventListener("click", () => {
    hero.classList.add("active");
  });

  // 실행 확인 플래그 true로 변경
  mainEffectAction = true;
}

mainEffect(); // 실행해야 아래 이벤트가 유효해짐

// 실행 됐을 때만 작동할 이벤트
const box = document.querySelector(".hero");
const profileTxtBox = document.querySelector(".profile-txt-box");
const aboutMeBtn = document.querySelector(".menu-title.aboutme");

box.addEventListener("click", () => {
  if (!mainEffectAction) return;
  profileTxtBox.classList.toggle("top");
});

aboutMeBtn.addEventListener("click", () => {
  profileTxtBox.classList.toggle("top");
});
