const projects = [
  { 
    title: "LunaBrew — Landing per caffè",
    desc: "Landing elegante per un coffee shop con menù e microinterazioni.",
    tags: ["HTML","CSS","JS","Responsive"],
    link: "lunaBrew.html"
  },
  { 
    title: "Aurum Studio — Portfolio creativo",
    desc: "Portfolio per un fotografo con gallery filtrabile.",
    tags: ["HTML","CSS","UX"],
    link: "aurumStudio.html"

  
  },
  {
  title: "Velvet Menu — Ristorante moderno",
  desc: "Menu interattivo con sezione eventi.",
  tags: ["HTML","CSS Grid"],
  link: "velvetMenu.html"
},
  { 
    title: "Nebula Cards — Mini web app",
    desc: "Schede dinamiche con animazioni e API fetch.",
    tags: ["JS","Fetch","Animations"],
    link: "NebulaCards.html"
  }
];

const grid = document.getElementById("projects-grid");

projects.forEach((p, index) => {
  const card = document.createElement("article");
  card.className = "card reveal";
  card.style.transitionDelay = `${index * 0.1}s`;

  if (p.link) {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      window.location.href = p.link; // apre lunaBrew.html
    });
  }

  card.innerHTML = `
    <h4 class="project-title">${p.title}</h4>
    <p class="project-desc">${p.desc}</p>
    <div class="tags">
      ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
  `;

  grid.appendChild(card);
});
// PROFILO
const STORAGE_KEY = "portfolio_profile_v1";
const inputName = document.getElementById("input-name");
const inputRole = document.getElementById("input-role");
const inputBio = document.getElementById("input-bio");
const displayName = document.getElementById("display-name");
const displayRole = document.getElementById("display-role");
const inlineName = document.getElementById("inline-name");
const bioPreview = document.getElementById("bio-preview");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");

const defaults = {
  name: "Andrea",
  role: "Web developer • HTML/CSS/JS",
  bio: "Sono un ragazzo di 16 anni appassionato di web, creo siti con HTML, CSS e JS e voglio iniziare a guadagnare con le mie competenze."
};

function loadProfile() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const data = saved ? JSON.parse(saved) : defaults;
  if (inputName) inputName.value = data.name;
  if (inputRole) inputRole.value = data.role;
  if (inputBio) inputBio.value = data.bio;
  apply(data);
}

function apply(d) {
  if (displayName) displayName.textContent = d.name;
  if (inlineName) inlineName.textContent = d.name;
  if (displayRole) displayRole.textContent = d.role;
  if (bioPreview) bioPreview.textContent = d.bio;
}

if (saveBtn) saveBtn.onclick = () => {
  const data = { name: inputName.value, role: inputRole.value, bio: inputBio.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  apply(data);
};

if (resetBtn) resetBtn.onclick = () => {
  localStorage.removeItem(STORAGE_KEY);
  loadProfile();
};

loadProfile();

// SMOOTH SCROLL + CLICK FEEDBACK
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    link.classList.add('clicked');
    setTimeout(() => link.classList.remove('clicked'), 300);
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ANIMAZIONI ON SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, .card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
projects.forEach((p, index) => {
  const card = document.createElement("article");
  card.className = "card reveal";
  card.style.transitionDelay = `${index * 0.1}s`;

  if (p.link) {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      window.location.href = p.link; // stessa tab
      // oppure window.open(p.link, "_blank"); // nuova tab
    });
  }

  card.innerHTML = `
    <h4 class="project-title">${p.title}</h4>
    <p class="project-desc">${p.desc}</p>
    <div class="tags">
      ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
  `;

  grid.appendChild(card);
});