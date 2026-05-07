document.addEventListener("DOMContentLoaded", () => {
  const topbarContainer = document.querySelector("#topbar-placeholder");

  if (topbarContainer) {
    fetch("/pages/components/topbar.html")
      .then((response) => response.text())
      .then((data) => {
        topbarContainer.innerHTML = data;
      })
      .catch((err) => console.error("Error al cargar el top bar:", err));
  }
});
