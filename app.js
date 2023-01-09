const switchBtn = document.querySelector(".switch");

const body = document.querySelector("body");
const card = document.querySelector(".card");
const cardHeader = document.querySelector(".card__header");
const cardText = document.querySelector(".card__text");
const qrCode = document.querySelector(".card__img");

const addTheme = (color) => {
  body.classList.add(`${color}-theme`);
  card.classList.add(`${color}-theme`);
  cardHeader.classList.add(`${color}-theme`);
  cardText.classList.add(`${color}-theme`);
};

const removeTheme = (color) => {
  body.classList.remove(`${color}-theme`);
  card.classList.remove(`${color}-theme`);
  cardHeader.classList.remove(`${color}-theme`);
  cardText.classList.remove(`${color}-theme`);
};

const matchSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

let theme = localStorage.getItem("theme") || matchSystemTheme();

// Theme preferences

switchBtn.addEventListener("click", () => {
  if (theme === "dark") {
    removeTheme("dark");
    addTheme("light");
    theme = "light";
  } else {
    removeTheme("light");
    addTheme("dark");
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

if (theme === "dark") addTheme("dark");
else if (theme === "light") addTheme("light");
else matchSystemTheme();

// img enlarging

qrCode.addEventListener("click", () =>
  qrCode.classList.toggle("card__img--zoomed")
);
