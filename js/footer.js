document.addEventListener("DOMContentLoaded", () => {
  const layoutContainer = document.querySelector("#footer");

  if (layoutContainer) {
    fetch("/pages/components/footer.html")
      .then((response) => response.text())
      .then((data) => {
        layoutContainer.innerHTML = data;
      })
      .catch((err) => console.error("Error al cargar el menú:", err));
  }
});
