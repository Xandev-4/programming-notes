const toggleBtn = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

// 1. Check for saved user preference on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  htmlElement.classList.add("dark-theme");
  toggleBtn.textContent = "Light Mode";
}

// 2. Add click event listener
toggleBtn.addEventListener("click", () => {
  htmlElement.classList.toggle("dark-theme");

  // 3. Save preference and update button text
  if (htmlElement.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "Dark Mode";
  }
});
