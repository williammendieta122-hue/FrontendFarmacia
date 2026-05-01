const modal = document.getElementById("brandModal");
const btnOpen = document.getElementById("btnOpenModal");
const btnClose = document.getElementById("btnCloseModal");

btnOpen.onclick = () => modal.classList.add("active");
btnClose.onclick = () => modal.classList.remove("active");

window.onclick = (event) => {
  if (event.target == modal) {
    modal.classList.remove("active");
  }
};
