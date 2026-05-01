document.addEventListener("DOMContentLoaded", () => {
  const layoutContainer = document.querySelector("#layout-placeholder");

  if (layoutContainer) {
    fetch("/pages/components/sidebar.html")
      .then((response) => response.text())
      .then((data) => {
        layoutContainer.innerHTML = data;
      })
      .catch((err) => console.error("Error al cargar el menú:", err));
  }
});
