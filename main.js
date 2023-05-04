const reserveBtn = document.querySelector(".reserve");
const engrus = document.querySelectorAll(".language_list");
const englist = document.querySelector(".eng");
const langdiv = document.querySelectorAll(".lang_icons");
const englang = document.querySelector(".eng");
const ruslang = document.querySelector(".rus");
const geolang = document.querySelector(".geo");
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".hamburger_info ");
const mobileLanguage = document.querySelector(".lang_icons_mobile");
const sendMail = document.querySelector(".mail");
window.addEventListener(
  "scroll",
  () => {
    const scrollTop =
      window.pageYOffset * 0.02 || document.documentElement.scrollTop * 0.1;
    reserveBtn.style.transform = `translateY(${scrollTop}px)`;
  },
  { passive: true }
);

langdiv.forEach((element) => {
  element.addEventListener("mouseover", () => {
    if (geolang.classList.contains("mainlang")) {
      englang.classList.add("active_eng");
      ruslang.classList.add("active_rus");
    }
  });
});

console.log(englang);
langdiv.forEach((e) => {
  e.addEventListener("mouseout", () => {
    if (geolang.classList.contains("mainlang")) {
      englang.classList.remove("active_eng");
      ruslang.classList.remove("active_rus");
    }
  });
});

langdiv.forEach((e) => {
  e.addEventListener("mouseover", () => {
    if (englang.classList.contains("mainlang")) {
      geolang.classList.add("active_eng");
      ruslang.classList.add("active_rus");
    }
  });
});

langdiv.forEach((e) => {
  e.addEventListener("mouseout", () => {
    if (englang.classList.contains("mainlang")) {
      geolang.classList.remove("active_eng");
      ruslang.classList.remove("active_rus");
    }
    console.log("hey");
  });
});
langdiv.forEach((e) => {
  e.addEventListener("mouseover", () => {
    if (ruslang.classList.contains("mainlang")) {
      geolang.classList.add("active_eng");
      englang.classList.add("active_rus");
    }
    console.log("hey");
  });
  e.addEventListener("click", () => {
    if (ruslang.classList.contains("mainlang")) {
      geolang.classList.add("active_eng");
      englang.classList.add("active_rus");
    }
  });
});

langdiv.forEach((e) => {
  e.addEventListener("mouseout", () => {
    if (ruslang.classList.contains("mainlang")) {
      geolang.classList.remove("active_eng");
      englang.classList.remove("active_rus");
    }
    console.log("hey");
  });
});
hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("active");
});
console.log(langdiv);
