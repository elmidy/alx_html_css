document.addEventListener("DOMContentLoaded", function () {
  // Create hamburger icon
  const hamburger = document.createElement("button");
  hamburger.setAttribute("id", "hamburger-menu");
  hamburger.setAttribute("aria-label", "Open navigation menu");
  hamburger.innerHTML = `
        <span style="display:block;width:25px;height:3px;background:#333;margin:5px 0;"></span>
        <span style="display:block;width:25px;height:3px;background:#333;margin:5px 0;"></span>
        <span style="display:block;width:25px;height:3px;background:#333;margin:5px 0;"></span>
    `;
  hamburger.style.display = "none";
  hamburger.style.background = "none";
  hamburger.style.border = "none";
  hamburger.style.cursor = "pointer";

  // Find navigation
  const nav = document.querySelector("nav");
  if (!nav) return;

  // Insert hamburger before nav
  nav.parentNode.insertBefore(hamburger, nav);

  // Responsive toggle function
  function handleResize() {
    if (window.innerWidth <= 480) {
      hamburger.style.display = "block";
      nav.style.display = "none";
    } else {
      hamburger.style.display = "none";
      nav.style.display = "";
    }
  }

  // Hamburger click event
  hamburger.addEventListener("click", function () {
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
      nav.style.position = "absolute";
      nav.style.background = "#fff";
      nav.style.top = hamburger.offsetTop + hamburger.offsetHeight + "px";
      nav.style.right = "10px";
      nav.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
      nav.style.zIndex = "1000";
    }
  });

  // Listen for resize
  window.addEventListener("resize", handleResize);

  // Initial check
  handleResize();
});
