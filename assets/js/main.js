const translations = {
  ar: { 
    name: "محمد نضال بنيخلف", bio: "مطور برمجيات وصانع أفلام وثائقية من المدية، الجزائر.", 
    nav_home: "الرئيسية", nav_projects: "المشاريع", nav_partners: "الشركاء", nav_cv: "السيرة الذاتية", 
    about_title: "نبذة سريعة", about_text: "أوثق هنا رحلتي في بناء أدوات برمجية مفتوحة المصدر، وإنتاج أعمال سينمائية تعكس واقعنا.", 
    explore_title: "استكشف الأقسام", card_projects: "المشاريع البرمجية", card_projects_desc: "Wasel, Yoobify, Nuru والمزيد.", 
    card_films: "الأعمال السينمائية", card_films_desc: "أفلام وثائقية وسيناريوهات مستقلة.", view_all: "عرض الكل", platforms_title: "تواصل معي", 
    partners_title: "الشركاء والجهات", partner_medea_talents: "منتدى مدية مواهب", partner_medea_desc: "دعم المواهب الشابة وتنظيم الفعاليات الثقافية.",
    partner_university: "النادي العلمي الجامعي", partner_uni_desc: "ورش عمل تقنية ومسابقات برمجة.",
    projects_title: "أحدث المشاريع", view_more_github: "عرض كل المشاريع على GitHub", 
    films_title: "عدسة الواقع", film_upcoming: "أعمال قيد الإنتاج", film_upcoming_desc: "مساحة مخصصة لعرض أحدث الأعمال الوثائقية.", coming_soon: "قريباً..." 
  },
  en: { 
    name: "Mohamed Nidhal Benyakhelf", bio: "Software developer and documentary filmmaker from Medea, Algeria.", 
    nav_home: "Home", nav_projects: "Projects", nav_partners: "Partners", nav_cv: "CV", 
    about_title: "Quick About", about_text: "Documenting my journey in building open-source software tools and producing cinematic works.", 
    explore_title: "Explore Sections", card_projects: "Software Projects", card_projects_desc: "Wasel, Yoobify, Nuru and more.", 
    card_films: "Filmmaking Works", card_films_desc: "Documentaries and independent screenplays.", view_all: "View All", platforms_title: "Connect With Me", 
    partners_title: "Partners & Organizations", partner_medea_talents: "Medea Talents Forum", partner_medea_desc: "Supporting young talents and organizing cultural events.",
    partner_university: "University Science Club", partner_uni_desc: "Technical workshops and programming competitions.",
    projects_title: "Latest Projects", view_more_github: "View All Projects on GitHub", 
    films_title: "Lens of Reality", film_upcoming: "Works in Progress", film_upcoming_desc: "Space dedicated to latest documentaries.", coming_soon: "Coming Soon..." 
  },
  fr: { 
    name: "Mohamed Nidhal Benyakhelf", bio: "Développeur logiciel et réalisateur de documentaires de Médéa, Algérie.", 
    nav_home: "Accueil", nav_projects: "Projets", nav_partners: "Partenaires", nav_cv: "CV", 
    about_title: "À Propos", about_text: "Je documente mon parcours dans la création d'outils logiciels open-source et d'œuvres cinématographiques.", 
    explore_title: "Explorer", card_projects: "Projets Logiciels", card_projects_desc: "Wasel, Yoobify, Nuru et plus.", 
    card_films: "Œuvres Cinématographiques", card_films_desc: "Documentaires et scénarios indépendants.", view_all: "Voir Tout", platforms_title: "Me Contacter", 
    partners_title: "Partenaires et Organisations", partner_medea_talents: "Forum des Talents de Médéa", partner_medea_desc: "Soutien aux jeunes talents et organisation d'événements culturels.",
    partner_university: "Club Scientifique Universitaire", partner_uni_desc: "Ateliers techniques et compétitions de programmation.",
    projects_title: "Derniers Projets", view_more_github: "Voir Tous les Projets sur GitHub", 
    films_title: "Objectif Réalité", film_upcoming: "Travaux en Cours", film_upcoming_desc: "Espace dédié aux derniers documentaires.", coming_soon: "Bientôt..." 
  }
};

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
  // Language Switcher
  const btn = document.getElementById('langBtn'), drop = document.getElementById('langDropdown');
  setLanguage(localStorage.getItem('preferredLang') || 'ar');
  
  btn.addEventListener('click', e => { e.stopPropagation(); drop.classList.toggle('active'); });
  document.querySelectorAll('.lang-option').forEach(b => b.addEventListener('click', () => { setLanguage(b.dataset.lang); drop.classList.remove('active'); }));
  document.addEventListener('click', () => drop.classList.remove('active'));
  drop.addEventListener('click', e => e.stopPropagation());

  // Dropdown Menu Fix for Touch Devices
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dd => {
    dd.addEventListener('click', e => {
      if(window.innerWidth <= 768) {
        e.preventDefault();
        dd.querySelector('.dropdown-content').classList.toggle('active-mobile');
      }
    });
  });

  // Custom Cursor
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>';
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', e => { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; });
    document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
    document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));
  }

  // Visitor Flag
  fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) }).then(r => r.json()).then(data => {
    document.getElementById('flagImg').src = `https://flagcdn.com/w40/${data.country_code.toLowerCase()}.png`;
    document.getElementById('countryName').textContent = data.country_name;
    document.getElementById('visitorFlag').style.opacity = '1';
  }).catch(() => document.getElementById('visitorFlag').style.display = 'none');

  // Fetch Random GitHub Projects
  const projContainer = document.getElementById('githubProjects');
  if (projContainer) {
    fetch('https://api.github.com/users/nidalbenyakhelf/repos?sort=updated&per_page=30', { signal: AbortSignal.timeout(5000) })
      .then(r => r.json()).then(repos => {
        const shuffled = repos.sort(() => 0.5 - Math.random()).slice(0, 4);
        const colors = ['card-green', 'card-blue', 'card-pink', 'card-purple'];
        projContainer.innerHTML = shuffled.map((r, i) => `
          <a href="${r.html_url}" target="_blank" rel="noopener" class="duo-card ${colors[i % 4]}">
            <h3><svg class="icon" style="width:20px;height:20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> ${r.name}</h3>
            <p>${r.description || 'مشروع مفتوح المصدر'}</p>
            <span class="card-action">
              <svg style="width:14px;height:14px;fill:currentColor;stroke:none;" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${r.stargazers_count}
              <svg style="width:14px;height:14px;fill:currentColor;stroke:none;margin-right:4px;" viewBox="0 0 24 24"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg> ${r.forks_count}
            </span>
          </a>`).join('');
      }).catch(() => projContainer.innerHTML = '<p style="color:var(--text-secondary)">تعذر تحميل المشاريع.</p>');
  }
});
