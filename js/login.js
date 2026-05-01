document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const btnSignIn = document.getElementById("btn-sign-in");
  const btnSignUp = document.getElementById("btn-sign-up");
  const btnLoginSubmit = document.getElementById("btn-login-submit");

  if (btnSignIn && container) {
    btnSignIn.addEventListener("click", () => {
      container.classList.remove("toggle");
    });
  }

  if (btnSignUp && container) {
    btnSignUp.addEventListener("click", () => {
      container.classList.add("toggle");
    });
  }

  if (btnLoginSubmit) {
    btnLoginSubmit.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "/pages/home.html";
    });
  }
});
