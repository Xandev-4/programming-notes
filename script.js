// ── Theme Toggle ──────────────────────────────
const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  if (themeBtn) themeBtn.textContent = "☀️ Light Mode";
}

themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ── Sidebar Collapse ──────────────────────────
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebarClose"); // ◀ inside header
const sidebarOpen = document.getElementById("sidebarOpen"); // ☰ fixed tab
const sidebarOverlay = document.getElementById("sidebarOverlay"); // mobile backdrop

const isMobile = () => window.innerWidth <= 640;

function openSidebar() {
  if (isMobile()) {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("active");
  } else {
    sidebar.classList.remove("collapsed");
    document.body.classList.remove("sidebar-collapsed");
  }
}

function closeSidebar() {
  if (isMobile()) {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
  } else {
    sidebar.classList.add("collapsed");
    document.body.classList.add("sidebar-collapsed");
  }
}

sidebarClose?.addEventListener("click", closeSidebar);
sidebarOpen?.addEventListener("click", openSidebar);
sidebarOverlay?.addEventListener("click", closeSidebar);

// Close sidebar on mobile when a nav link is tapped
sidebar?.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMobile()) closeSidebar();
  });
});

// Restore collapsed state across page loads
if (localStorage.getItem("sidebarCollapsed") === "true" && !isMobile()) {
  sidebar.classList.add("collapsed");
  document.body.classList.add("sidebar-collapsed");
}

// Persist collapsed state
sidebarClose?.addEventListener("click", () =>
  localStorage.setItem("sidebarCollapsed", "true"),
);
sidebarOpen?.addEventListener("click", () =>
  localStorage.setItem("sidebarCollapsed", "false"),
);
