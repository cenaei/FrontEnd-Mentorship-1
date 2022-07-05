const loaderEl = document.querySelector(".loader-el")
const splashScreen = document.querySelector(".splash-screen")

window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    splashScreen.classList.add("hidden")
  }, 2000)
});