const alertContainer = document.querySelector(".alert-container");
const sendBtn = document.querySelector(".send");
const okBtn = document.querySelector(".ok");
sendBtn.addEventListener("click", () => {
alertContainer.style.display = "flex";
});
okBtn.addEventListener("click", () => {
alertContainer.style.display = "none";
});
alertContainer.addEventListener("click", () => {
alertContainer.style.display = "none";
});