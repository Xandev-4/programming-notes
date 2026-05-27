/* ── Theme Toggle ── */
const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const statusTheme = document.getElementById("statusTheme");
let isDark = false;

function applyTheme(dark) {
  isDark = dark;
  if (dark) {
    body.classList.add("dark-theme");
    themeBtn.textContent = "☽ Dark";
    statusTheme.textContent = "Dark Mode";
  } else {
    body.classList.remove("dark-theme");
    themeBtn.textContent = "☀ Light";
    statusTheme.textContent = "Light Mode";
  }
  localStorage.setItem("notesTheme", dark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("notesTheme");
if (savedTheme === "dark") applyTheme(true);
else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
)
  applyTheme(true);

themeBtn.addEventListener("click", () => applyTheme(!isDark));

/* ── Sidebar Toggle ── */
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("sidebarOverlay");
const isMobile = () => window.innerWidth <= 640;
let sidebarOpen = true;

function setSidebar(open) {
  sidebarOpen = open;
  if (isMobile()) {
    sidebar.classList.toggle("open", open);
    overlay.classList.toggle("active", open);
    overlay.setAttribute("aria-hidden", String(!open));
  } else {
    sidebar.classList.toggle("collapsed", !open);
  }
  menuBtn.setAttribute("aria-expanded", String(open));
}

menuBtn.addEventListener("click", () => setSidebar(!sidebarOpen));
overlay.addEventListener("click", () => setSidebar(false));

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMobile()) setSidebar(false);
  });
});

/* ── Level 1: Lecture collapse ── */
document.querySelectorAll(".nav-lecture-title").forEach((title) => {
  const lecture = title.closest(".nav-lecture");
  if (lecture.classList.contains("nav-lecture--soon")) return;
  title.addEventListener("click", () => {
    lecture.classList.toggle("collapsed");
  });
});

/* ── Level 2: Group collapse ── */
document.querySelectorAll(".nav-group-title").forEach((title) => {
  const group = title.closest(".nav-group");
  title.addEventListener("click", () => {
    group.classList.toggle("collapsed");
  });
});

/* ── Active Nav Link + Breadcrumb ── */
const navLinks = document.querySelectorAll(".nav-links li:not(.soon)");
const breadcrumb = document.getElementById("breadcrumbCurrent");

navLinks.forEach((li) => {
  li.querySelector("a").addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    li.classList.add("active");
    const label = this.dataset.label || this.textContent;
    if (breadcrumb) breadcrumb.textContent = label;
  });
});

/* ── Status Bar Clock ── */
const statusTime = document.getElementById("statusTime");
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  statusTime.textContent = `${h}:${m}`;
}
updateClock();
setInterval(updateClock, 10000);

/* ── Smooth Scroll ── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
