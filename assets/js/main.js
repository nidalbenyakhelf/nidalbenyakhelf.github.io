// === Translations ===
const translations = {
  ar: {
    name: "محمد نضال بنيخلف",
    bio: "مطور برمجيات وصانع أفلام وثائقية من المدية، الجزائر. أؤمن بأن التكنولوجيا والفن أداتان لربط الناس وخدمة المجتمع.",
    nav_home: "الرئيسية", nav_projects: "المشاريع", nav_films: "الأفلام", nav_cv: "السيرة الذاتية",
    about_title: "نبذة سريعة", about_text: "أوثق هنا رحلتي في بناء أدوات برمجية مفتوحة المصدر، وإنتاج أعمال سينمائية تعكس واقعنا.",
    explore_title: "استكشف الأقسام", card_projects: "المشاريع البرمجية", card_projects_desc: "Wasel, Yoobify, Nuru والمزيد.",
    card_films: "الأعمال السينمائية", card_films_desc: "أفلام وثائقية، سيناريوهات، ومشاريع إخراجية.",
    view_all: "عرض الكل ←", platforms_title: "منصاتي",
    projects_title: "أحدث المشاريع", view_more_github: "عرض كل المشاريع على GitHub",
    films_title: "عدسة الواقع", film_upcoming: "أعمال قيد الإنتاج", film_upcoming_desc: "مساحة مخصصة لعرض أحدث الأعمال الوثائقية.",
    coming_soon: "قريباً..."
  },
  en: {
    name: "Mohamed Nidhal Benyakhelf",
    bio: "Software developer and documentary filmmaker from Medea, Algeria. Building open-source tools and cinematic works.",
    nav_home: "Home", nav_projects: "Projects", nav_films: "Films", nav_cv: "CV",
    about_title: "Quick About", about_text: "Documenting my journey in building open-source software tools and producing cinematic works that reflect our reality.",
    explore_title: "Explore Sections", card_projects: "Software Projects", card_projects_desc: "Wasel, Yoobify, Nuru and more open-source tools.",
    card_films: "Filmmaking Works", card_films_desc: "Documentaries, screenplays, and independent directing projects.",
    view_all: "View All ←", platforms_title: "My Platforms",
    projects_title: "Latest Projects", view_more_github: "View All Projects on GitHub",
    films_title: "Lens of Reality", film_upcoming: "Works in Progress", film_upcoming_desc: "Space dedicated to showcasing latest documentaries and behind-the-scenes.",
    coming_soon: "Coming Soon..."
  },
  fr: {
    name: "Mohamed Nidhal Benyakhelf",
    bio: "Développeur logiciel et réalisateur de documentaires de Médéa, Algérie. Je crée des outils open-source et des œuvres cinématographiques.",
    nav_home: "Accueil", nav_projects: "Projets", nav_films: "Films", nav_cv: "CV",
    about_title: "À Propos", about_text: "Je documente mon parcours dans la création d'outils logiciels open-source et la production d'œuvres cinématographiques.",
    explore_title: "Explorer", card_projects: "Projets Logiciels", card_projects_desc: "Wasel, Yoobify, Nuru et plus d'outils open-source.",
    card_films: "Œuvres Cinématographiques", card_films_desc: "Documentaires, scénarios et projets de réalisation indépendants.",
    view_all: "Voir Tout ←", platforms_title: "Mes Plateformes",
    projects_title: "Derniers Projets", view_more_github: "Voir Tous les Projets sur GitHub",
    films_title: "Objectif Réalité", film_upcoming: "Travaux en Cours", film_upcoming_desc: "Espace dédié aux derniers documentaires et coulisses.",
    coming_soon: "Bientôt..."
  }
};

// === Language System ===
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) el.textContent = translations[lang][key];
  });
  const names = { ar: 'العربية', en: 'English', fr: 'Français' };
  document.getElementById('currentLang').textContent = names[lang];
  document.querySelectorAll('.lang-option').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem('preferredLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  // Lang Switcher
  const btn = document.getElementById('langBtn'), drop = document.getElementById('langDropdown');
  setLanguage(localStorage.getItem('preferredLang') || 'ar');
  btn.addEventListener('click', e => { e.stopPropagation(); drop.classList.toggle('active'); });
  document.querySelectorAll('.lang-option').forEach(b => b.addEventListener('click', () => { setLanguage(b.dataset.lang); drop.classList.remove('active'); }));
  document.addEventListener('click', () => drop.classList.remove('active'));
  drop.addEventListener('click', e => e.stopPropagation());

  // Custom Cursor
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>';
  document.body.appendChild(cursor);
  document.addEventListener('mousemove', e => { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; });
  document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));

  // Visitor Flag (Using ipapi.co free tier)
  fetch('https://ipapi.co/json/')
    .then(r => r.json())
    .then(data => {
      const flag = document.getElementById('visitorFlag');
      document.getElementById('flagImg').src = `https://flagcdn.com/w40/${data.country_code.toLowerCase()}.png`;
      document.getElementById('countryName').textContent = data.country_name;
      flag.style.opacity = '1';
    })
    .catch(() => document.getElementById('visitorFlag').style.display = 'none');

  // Fetch Random GitHub Projects
  const projContainer = document.getElementById('githubProjects');
  if (projContainer) {
    fetch('https://api.github.com/users/nidalbenyakhelf/repos?sort=updated&per_page=100')
      .then(r => r.json())
      .then(repos => {
        // Shuffle and pick 4
        const shuffled = repos.sort(() => 0.5 - Math.random()).slice(0, 4);
        const colors = ['card-green', 'card-blue', 'card-pink', 'card-purple'];
        projContainer.innerHTML = shuffled.map((r, i) => `
          <a href="${r.html_url}" target="_blank" rel="noopener" class="duo-card ${colors[i % 4]}">
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              ${r.name}
            </h3>
            <p>${r.description || 'مشروع مفتوح المصدر'}</p>
            <span class="card-action">⭐ ${r.stargazers_count} · 🍴 ${r.forks_count}</span>
          </a>
        `).join('');
      })
      .catch(() => projContainer.innerHTML = '<p style="color:var(--text-secondary)">تعذر تحميل المشاريع. <a href="https://github.com/nidalbenyakhelf" style="color:var(--duo-green)">زيارة GitHub مباشرة</a></p>');
  }
});
