
  document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    title.style.opacity = "0";
    title.style.transform = "translateY(-50px)";
    
    setTimeout(() => {
      title.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 500);
  });

  document.getElementById("menu-button").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  const openIcon = document.querySelector(".open-icon");
  const closedIcon = document.querySelector(".closed-icon");

  // Toggle the menu visibility
  menu.classList.toggle("hidden");

  // Swap the icons
  openIcon.classList.toggle("hidden");
  closedIcon.classList.toggle("hidden");

  // Toggle aria-expanded
  const isExpanded = this.getAttribute("aria-expanded") === "true";
  this.setAttribute("aria-expanded", !isExpanded);
});