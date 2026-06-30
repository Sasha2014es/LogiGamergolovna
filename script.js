document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.createElement("button");
    themeBtn.textContent = "🌙 Тема";
    themeBtn.style.position = "fixed";
    themeBtn.style.bottom = "20px";
    themeBtn.style.right = "20px";
    themeBtn.style.padding = "10px";
    themeBtn.style.zIndex = "1000";
    document.body.appendChild(themeBtn);

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        themeBtn.textContent = document.body.classList.contains("dark-theme") ? "☀️ Тема" : "🌙 Тема";
    });
});
