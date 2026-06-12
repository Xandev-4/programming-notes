/* ════════════════════════════════════════
SIDEBAR DATA
─────────────────────────────────────
HOW TO ADD A NEW LECTURE:
1. Copy one of the lecture objects below and paste it at the end of the array.
2. Set a unique "id" — this must match the CURRENT_LECTURE value in your HTML file.
3. Set "label" to the display name shown in the sidebar (e.g. "Lec 7 — Your Topic").
4. Inside "groups", add one or more group objects:
   { label: "Group Name", topics: [ ... ] }
5. Inside "topics", add topic objects:
   { href: "lecX.html#section-id", label: "Section Label" }
   The href must match the <section id="..."> in your HTML.
════════════════════════════════════════ */

const SIDEBAR_DATA = [
  /* ── LECTURE 1 ─────────────────────── */
  {
    id: "lecture-1",
    label: "Lec 1 — Intro &amp; Setup",
    groups: [
      {
        label: "JavaScript Basics",
        topics: [
          { href: "lec1.html#what-is-js", label: "What is JavaScript?" },
          { href: "lec1.html#js-history", label: "History of JS" },
          { href: "lec1.html#env-setup", label: "Environment Setup" },
        ],
      },
      {
        label: "Including Scripts",
        topics: [
          { href: "lec1.html#including-scripts", label: "Ways to Include JS" },
          { href: "lec1.html#async-defer", label: "async vs defer" },
          { href: "lec1.html#nodejs-server", label: "JS on Server (Node.js)" },
          { href: "lec1.html#key-takeaways", label: "Key Takeaways" },
        ],
      },
    ],
  },

  /* ── LECTURE 2 ─────────────────────── */
  {
    id: "lecture-2",
    label: "Lec 2 — Variables &amp; Data Types",
    groups: [
      {
        label: "Variables",
        topics: [
          {
            href: "lec2.html#what-are-variables",
            label: "What are Variables?",
          },
          { href: "lec2.html#value-assignment", label: "Value Assignment" },
          {
            href: "lec2.html#naming-rules",
            label: "Naming Rules & Conventions",
          },
          { href: "lec2.html#let-var-const", label: "let, var, and const" },
          { href: "lec2.html#comments", label: "Comments" },
        ],
      },
      {
        label: "Data Types & Memory",
        topics: [
          { href: "lec2.html#primitive-types", label: "Primitive Data Types" },
          {
            href: "lec2.html#non-primitive-types",
            label: "Non-Primitive Types",
          },
          {
            href: "lec2.html#pass-by-value-reference",
            label: "Pass by Value vs Reference",
          },
          { href: "lec2.html#variables-in-memory", label: "Stack vs Heap" },
          { href: "lec2.html#how-js-reads-code", label: "How JS Reads Code" },
          { href: "lec2.html#key-takeaways", label: "Key Takeaways" },
        ],
      },
    ],
  },

  /* ── LECTURE 3 ─────────────────────── */
  {
    id: "lecture-3",
    label: "Lec 3 — Operators &amp; Expressions",
    groups: [
      {
        label: "Foundations",
        topics: [
          {
            href: "lec3.html#operands-operators-expressions",
            label: "Operands, Operators, Expressions",
          },
          {
            href: "lec3.html#arithmetic-operators",
            label: "Arithmetic Operators",
          },
          {
            href: "lec3.html#assignment-operators",
            label: "Assignment Operators",
          },
          {
            href: "lec3.html#comparison-operators",
            label: "Comparison Operators",
          },
        ],
      },
      {
        label: "Logic & Special Ops",
        topics: [
          {
            href: "lec3.html#logical-operators",
            label: "Logical Operators (&amp;&amp; || ?? !)",
          },
          { href: "lec3.html#ternary-operator", label: "Ternary Operator" },
          { href: "lec3.html#bitwise-operators", label: "Bitwise Operators" },
          {
            href: "lec3.html#relational-operators",
            label: "Relational Operators",
          },
          {
            href: "lec3.html#grouping-precedence",
            label: "Grouping &amp; Precedence",
          },
          { href: "lec3.html#typeof-operator", label: "typeof Operator" },
          {
            href: "lec3.html#instanceof-operator",
            label: "instanceof Operator",
          },
          {
            href: "lec3.html#falsy-truthy",
            label: "Falsy &amp; Truthy Values",
          },
          { href: "lec3.html#key-takeaways", label: "Key Takeaways" },
        ],
      },
    ],
  },

  /* ── LECTURE 4 ─────────────────────── */
  {
    id: "lecture-4",
    label: "Lec 4 — Control Flow",
    groups: [
      {
        label: "Branching Basics",
        topics: [
          {
            href: "lec4.html#what-is-control-flow",
            label: "What is Control Flow?",
          },
          { href: "lec4.html#if-statement", label: "The if Statement" },
          {
            href: "lec4.html#if-else-statement",
            label: "The if-else Statement",
          },
          { href: "lec4.html#else-if-chain", label: "else-if Chain" },
          { href: "lec4.html#nested-if-else", label: "Nested if-else" },
        ],
      },
      {
        label: "switch & Decisions",
        topics: [
          { href: "lec4.html#switch-case", label: "switch-case Statement" },
          { href: "lec4.html#break-keyword", label: "The break Keyword" },
          { href: "lec4.html#fall-through", label: "Intentional Fall-Through" },
          {
            href: "lec4.html#if-else-vs-switch",
            label: "if-else vs switch-case",
          },
          {
            href: "lec4.html#ternary-control-flow",
            label: "Ternary in Control Flow",
          },
          { href: "lec4.html#code-quizzes", label: "Code Quizzes" },
          { href: "lec4.html#key-takeaways", label: "Key Takeaways" },
        ],
      },
    ],
  },

  /* ── LECTURE 5 ─────────────────────── */
  {
    id: "lecture-5",
    label: "Lec 5 — Loops &amp; Iterations",
    groups: [
      {
        label: "Loop Basics",
        topics: [
          { href: "lec5.html#what-are-loops", label: "What are Loops?" },
          { href: "lec5.html#for-loop", label: "The for Loop" },
          { href: "lec5.html#nested-loops", label: "Nested Loops" },
          { href: "lec5.html#break-and-continue", label: "break and continue" },
          { href: "lec5.html#multiple-counters", label: "Multiple Counters" },
        ],
      },
      {
        label: "Other Loops",
        topics: [
          { href: "lec5.html#while-loop", label: "The while Loop" },
          { href: "lec5.html#do-while-loop", label: "The do-while Loop" },
          { href: "lec5.html#infinite-loops", label: "Infinite Loops" },
          { href: "lec5.html#which-loop-when", label: "Which Loop to Use" },
          { href: "lec5.html#code-quizzes", label: "Code Quizzes" },
          { href: "lec5.html#key-takeaways", label: "Key Takeaways" },
        ],
      },
    ],
  },

  /* ── LECTURE 6 ─────────────────────── */
  {
    id: "lecture-6",
    label: "Lec 6 — Functions",
    groups: [
      {
        label: "Function Basics",
        topics: [
          { href: "lec6.html#what-is-function", label: "What is a Function?" },
          {
            href: "lec6.html#defining-invoking",
            label: "Defining &amp; Invoking",
          },
          {
            href: "lec6.html#function-expression",
            label: "Function Expression",
          },
          {
            href: "lec6.html#parameters-arguments",
            label: "Parameters &amp; Arguments",
          },
          { href: "lec6.html#return-statement", label: "The return Statement" },
          { href: "lec6.html#default-parameters", label: "Default Parameters" },
          {
            href: "lec6.html#rest-parameter",
            label: "Rest Parameter (...rest)",
          },
          { href: "lec6.html#nested-functions", label: "Nested Functions" },
        ],
      },
      {
        label: "Advanced Concepts",
        topics: [
          { href: "lec6.html#callback-function", label: "Callback Function" },
          { href: "lec6.html#pure-function", label: "Pure Function" },
          {
            href: "lec6.html#higher-order-function",
            label: "Higher Order Function (HOF)",
          },
          { href: "lec6.html#arrow-function", label: "Arrow Function" },
          { href: "lec6.html#iife", label: "IIFE" },
          { href: "lec6.html#call-stack", label: "Call Stack" },
          { href: "lec6.html#recursion", label: "Recursion" },
          { href: "lec6.html#key-takeaways", label: "Key Takeaways" },
        ],
      },
    ],
  },

  /* ── LECTURE 7 ─────────────────────── */
  {
    id: "lecture-7",
    label: "Lec 7 — JS Projects",
    groups: [
      {
        label: "Foundations",
        topics: [
          {
            href: "lec7.html#project-approach",
            label: "How to Approach a Project",
          },
          { href: "lec7.html#browser-apis", label: "prompt() &amp; alert()" },
          {
            href: "lec7.html#random-numbers",
            label: "Random Number Generation",
          },
        ],
      },
      {
        label: "Projects",
        topics: [
          {
            href: "lec7.html#project-rps-overview",
            label: "Project 1 — RPS Overview",
          },
          {
            href: "lec7.html#project-rps-code",
            label: "Project 1 — RPS Full Code",
          },
          {
            href: "lec7.html#project-guess-overview",
            label: "Project 2 — Guess Overview",
          },
          {
            href: "lec7.html#project-guess-code",
            label: "Project 2 — Guess Full Code",
          },
          {
            href: "lec7.html#concepts-applied",
            label: "Concepts From Lec 1–6 Applied",
          },
          { href: "lec7.html#common-bugs", label: "Common Bugs &amp; Fixes" },
          { href: "lec7.html#key-takeaways", label: "Key Takeaways" },
        ],
      },
    ],
  },

  /* ── LECTURE 8 ─────────────────────── */
  {
    id: "lecture-8",
    label: "Lec 8 — Execution Context",
    groups: [
      {
        label: "EC Foundations",
        topics: [
          {
            href: "lec8.html#why-execution-context",
            label: "Why Execution Context Matters",
          },
          {
            href: "lec8.html#lexical-environment",
            label: "Lexical Environment",
          },
          { href: "lec8.html#what-is-ec", label: "What is Execution Context?" },
          {
            href: "lec8.html#global-execution-context",
            label: "Global Execution Context (GEC)",
          },
          {
            href: "lec8.html#function-execution-context",
            label: "Function Execution Context (FEC)",
          },
          {
            href: "lec8.html#complex-ec-example",
            label: "Complex EC Trace — Full Walkthrough",
          },
        ],
      },
      {
        label: "Memory & Internals",
        topics: [
          { href: "lec8.html#call-stack", label: "Call Stack" },
          { href: "lec8.html#stack-vs-heap", label: "Stack vs Heap Memory" },
          { href: "lec8.html#garbage-collection", label: "Garbage Collection" },
          {
            href: "lec8.html#ec-phases-summary",
            label: "EC Phases — Complete Summary",
          },
          { href: "lec8.html#hoisting-preview", label: "Hoisting Preview" },
          {
            href: "lec8.html#your-task",
            label: "Your Task — EC Tracing Practice",
          },
          { href: "lec8.html#key-takeaways", label: "Key Takeaways" },
        ],
      },
    ],
  },

  /* ── LECTURE 9 ─────────────────────── */
  {
    id: "lecture-9",
    label: "Lec 9 — Hoisting &amp; TDZ",
    groups: [
      {
        label: "Hoisting",
        topics: [
          {
            href: "lec9.html#misconception-hoisting",
            label: "The Misconception About Hoisting",
          },
          {
            href: "lec9.html#var-hoisting",
            label: "Variable Hoisting with var",
          },
          { href: "lec9.html#let-hoisting", label: "Hoisting with let" },
          { href: "lec9.html#const-hoisting", label: "Hoisting with const" },
          {
            href: "lec9.html#function-declaration-hoisting",
            label: "Function Declaration Hoisting",
          },
          {
            href: "lec9.html#function-expression-hoisting",
            label: "Function Expression — The Trap",
          },
          {
            href: "lec9.html#hoisting-inside-functions",
            label: "Hoisting Inside Functions",
          },
        ],
      },
      {
        label: "TDZ & Practice",
        topics: [
          {
            href: "lec9.html#temporal-dead-zone",
            label: "Temporal Dead Zone (TDZ)",
          },
          {
            href: "lec9.html#interview-answers",
            label: "Interview Quizzes (7 Questions)",
          },
          {
            href: "lec9.html#real-hoisting-definition",
            label: "The Real Hoisting Definition",
          },
          { href: "lec9.html#key-takeaways", label: "Key Takeaways" },
        ],
      },
    ],
  },

  /* ── LECTURE 10 ────────────────────── */
  {
    id: "lecture-10",
    label: "Lec 10 — Scope &amp; Scope Chain",
    groups: [
      {
        label: "Scope Types",
        topics: [
          { href: "lec10.html#what-is-scope", label: "What is Scope?" },
          { href: "lec10.html#global-scope", label: "Global Scope" },
          { href: "lec10.html#function-scope", label: "Function Scope" },
          { href: "lec10.html#block-scope", label: "Block Scope" },
          {
            href: "lec10.html#scope-comparison-table",
            label: "var vs let vs const Table",
          },
        ],
      },
      {
        label: "Scope Chain & Practice",
        topics: [
          { href: "lec10.html#scope-chain", label: "Scope Chain" },
          {
            href: "lec10.html#variable-shadowing",
            label: "Variable Shadowing",
          },
          { href: "lec10.html#var-let-in-loops", label: "var vs let in Loops" },
          {
            href: "lec10.html#scope-quizzes",
            label: "Test Your Knowledge (6 Quizzes)",
          },
          { href: "lec10.html#key-takeaways", label: "Key Takeaways" },
        ],
      },
    ],
  },
];

/* ════════════════════════════════════════
SIDEBAR RENDERER — no edits needed below
════════════════════════════════════════ */
function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  const currentId =
    typeof CURRENT_LECTURE !== "undefined" ? CURRENT_LECTURE : null;

  let html = '<h2 class="nav-title">Lectures</h2>';

  SIDEBAR_DATA.forEach((lecture) => {
    const isCurrentLecture = lecture.id === currentId;

    html += `<div class="nav-lecture${isCurrentLecture ? " is-open" : ""}" data-active="${isCurrentLecture}">`;
    html += `<div class="nav-lecture-title">${lecture.label}</div>`;
    html += `<div class="nav-lecture-body" style="max-height:${isCurrentLecture ? "none" : "0"}">`;

    lecture.groups.forEach((group) => {
      html += `<div class="nav-group">`;
      html += `<div class="nav-group-title">${group.label}</div>`;
      html += `<div class="nav-group-body">`;
      html += `<ul class="nav-links">`;

      group.topics.forEach((topic) => {
        const soonClass = topic.soon ? ' class="soon"' : "";
        html += `<li${soonClass}><a href="${topic.href}" data-label="${topic.label}">${topic.label}</a></li>`;
      });

      html += `</ul>`;
      html += `</div>`;
      html += `</div>`;
    });

    html += `</div>`;
    html += `</div>`;
  });

  html += '<div class="nav-footer">v1.0 · study notes</div>';
  sidebar.innerHTML = html;
}

/* ════════════════════════════════════════
ACCORDION LOGIC — no edits needed below
════════════════════════════════════════ */
function setOpen(el, open) {
  el.classList.toggle("is-open", open);
  const body = el.querySelector(
    ":scope > .nav-lecture-body, :scope > .nav-group-body",
  );
  if (!body) return;
  if (open) {
    body.style.maxHeight = body.scrollHeight + "px";
    body.addEventListener(
      "transitionend",
      () => {
        if (el.classList.contains("is-open")) body.style.maxHeight = "none";
      },
      { once: true },
    );
  } else {
    body.style.maxHeight = body.scrollHeight + "px";
    requestAnimationFrame(() => {
      body.style.maxHeight = "0";
    });
  }
}

function initAccordion() {
  const activeLink = document.querySelector(".nav-links li.active a");

  document.querySelectorAll(".nav-lecture").forEach((lecture) => {
    const isCurrentLecture =
      lecture.dataset.active === "true" || lecture.contains(activeLink);
    const body = lecture.querySelector(":scope > .nav-lecture-body");
    if (body) body.style.maxHeight = isCurrentLecture ? "none" : "0";
    lecture.classList.toggle("is-open", isCurrentLecture);

    if (isCurrentLecture) {
      lecture.querySelectorAll(".nav-group").forEach((group, idx) => {
        const groupBody = group.querySelector(":scope > .nav-group-body");
        const shouldOpen = group.contains(activeLink) || idx === 0;
        if (groupBody) groupBody.style.maxHeight = shouldOpen ? "none" : "0";
        group.classList.toggle("is-open", shouldOpen);
      });
    } else {
      lecture.querySelectorAll(".nav-group .nav-group-body").forEach((gb) => {
        gb.style.maxHeight = "0";
      });
    }

    const title = lecture.querySelector(":scope > .nav-lecture-title");
    if (title) {
      title.addEventListener("click", () => {
        const willOpen = !lecture.classList.contains("is-open");
        if (willOpen) {
          document.querySelectorAll(".nav-lecture").forEach((l) => {
            if (l !== lecture) setOpen(l, false);
          });
        }
        setOpen(lecture, willOpen);
      });
    }
  });

  document.querySelectorAll(".nav-group").forEach((group) => {
    const title = group.querySelector(":scope > .nav-group-title");
    if (title) {
      title.addEventListener("click", () => {
        setOpen(group, !group.classList.contains("is-open"));
      });
    }
  });
}

/* ════════════════════════════════════════
ACTIVE LINK + BREADCRUMB — no edits needed below
════════════════════════════════════════ */
function initNavLinks() {
  const isMobile = () => window.innerWidth <= 640;
  const navLinks = document.querySelectorAll(".nav-links li:not(.soon)");
  const breadcrumb = document.getElementById("breadcrumbCurrent");

  navLinks.forEach((li) => {
    li.querySelector("a").addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      li.classList.add("active");
      const label = this.dataset.label || this.textContent.trim();
      if (breadcrumb) breadcrumb.textContent = label;
      if (isMobile()) setSidebar(false);
    });
  });
}

/* ════════════════════════════════════════
BOOT
════════════════════════════════════════ */
renderSidebar();
initAccordion();
initNavLinks();
