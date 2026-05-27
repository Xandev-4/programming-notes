// ── Theme Toggle ──────────────────────────────
const themeBtn = document.getElementById("themeToggle");
const body = document.documentElement; // target <html> so .dark-theme cascades everywhere

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme"); // or swap to <html> if preferred
  themeBtn.textContent = "☀️ Light Mode";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ── Mobile Sidebar Toggle ─────────────────────
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("active");
  hamburger.setAttribute("aria-expanded", "true");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", () => {
  sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
});

// Tap the backdrop to close
sidebarOverlay.addEventListener("click", closeSidebar);

// Close sidebar when a nav link is tapped (navigating away)
sidebar.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeSidebar);
});
