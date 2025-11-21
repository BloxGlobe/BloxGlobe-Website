async function loadModule(name) {
  const app = document.getElementById("app");
  const path = `src/modules/${name}/${name}.html`;

  try {
    const response = await fetch(path);

    if (!response.ok) throw new Error("Not found");

    const html = await response.text();
    app.innerHTML = html;

  } catch (err) {
    load404();
  }
}

async function load404() {
  const app = document.getElementById("app");
  const response = await fetch("src/modules/404/404.html");
  const html = await response.text();
  app.innerHTML = html;
}

// Sidebar navigation loading
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    loadModule(btn.dataset.module);
  });
});

// Block direct index.html access and load 404 instead
const url = window.location.href;
if (url.includes("index.html") && !url.endsWith("index.html")) {
  load404();
}
