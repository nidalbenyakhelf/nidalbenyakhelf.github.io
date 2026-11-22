// نظام الترجمة متعدد اللغات
const translations = {
  ar: {
    name: "محمد نضال بنيخلف",
    bio: "مطور برمجيات وصانع أفلام وثائقية من المدية، الجزائر. أؤمن بأن التكنولوجيا والفن أداتان لربط الناس وخدمة المجتمع، وأبني أدوات بسيطة ذات تأثير حقيقي.",
    nav_about: "نبذة",
    nav_projects: "المشاريع",
    nav_platforms: "المنصات",
    nav_contact: "تواصل",
    about_title: "نبذة عني",
    about_text: "أؤمن بأن التكنولوجيا والفن أداتان لربط الناس وخدمة المجتمع. هنا أوثق رحلتي في بناء أدوات برمجية بسيطة ذات تأثير حقيقي، وإنتاج أعمال سينمائية تعكس واقعنا.",
    projects_title: "المشاريع البرمجية",
    project_wasel: "منصة وصل (Wasel)",
    project_wasel_desc: "منصة ويب تقدمية (PWA) مصممة لربط المتطوعين والجهات المانعة مع الجمعيات المحلية.",
    project_yoobify: "Yoobify",
    project_yoobify_desc: "تطبيق ويب لاكتشاف الموسيقى عبر الثقافات واللغات المختلفة.",
    project_nuru: "دعم لغة Nuru",
    project_nuru_desc: "إضافة رسمية لتوفير دعم تلوين الصيغة للغة Nuru في محرر VS Code.",
    project_codestats: "Codestats",
    project_codestats_desc: "أداة خفيفة مبنية بـ Python لتحليل إحصائيات أكواد البرمجة.",
    view_project: "زيارة المشروع ↗",
    platforms_title: "أين تجدني",
    contact_title: "تواصل معي",
    contact_text: "هل لديك فكرة، سؤال، أو مجرد تحية؟ صندوق الوارد الخاص بي مفتوح دائماً.",
    email_me: "راسلني عبر البريد",
    send_email: "إرسال رسالة ✉️",
    footer_about_title: "عن الموقع",
    footer_about_text: "موقع شخصي يوثق رحلة محمد نضال بنيخلف في البرمجة وصناعة الأفلام. مبني بـ Jekyll على GitHub Pages.",
    footer_links_title: "روابط سريعة",
    footer_contact_title: "تواصل",
    footer_made_with: "صُنع بـ",
    footer_and: "و"
  },
  en: {
    name: "Mohamed Nidhal Benyakhelf",
    bio: "Software developer and documentary filmmaker from Medea, Algeria. I believe technology and art are tools to connect people and serve communities, building simple tools with real impact.",
    nav_about: "About",
    nav_projects: "Projects",
    nav_platforms: "Platforms",
    nav_contact: "Contact",
    about_title: "About Me",
    about_text: "I believe technology and art are tools to connect people and serve communities. Here I document my journey in building simple software tools with real impact, and producing cinematic works that reflect our reality.",
    projects_title: "Software Projects",
    project_wasel: "Wasel Platform",
    project_wasel_desc: "A progressive web app (PWA) designed to connect volunteers and donors with local associations.",
    project_yoobify: "Yoobify",
    project_yoobify_desc: "A web app to discover music across different cultures and languages.",
    project_nuru: "Nuru Language Support",
    project_nuru_desc: "Official extension providing syntax highlighting for Nuru language in VS Code.",
    project_codestats: "Codestats",
    project_codestats_desc: "A lightweight Python tool for analyzing code statistics across projects.",
    view_project: "View Project ↗",
    platforms_title: "Find Me On",
    contact_title: "Get In Touch",
    contact_text: "Have an idea, a question, or just want to say hi? My inbox is always open.",
    email_me: "Email Me",
    send_email: "Send Message ✉️",
    footer_about_title: "About This Site",
    footer_about_text: "A personal website documenting Mohamed Nidhal Benyakhelf's journey in programming and filmmaking. Built with Jekyll on GitHub Pages.",
    footer_links_title: "Quick Links",
    footer_contact_title: "Contact",
    footer_made_with: "Made with",
    footer_and: "and"
  },
  fr: {
    name: "Mohamed Nidhal Benyakhelf",
    bio: "Développeur logiciel et réalisateur de documentaires de Médéa, Algérie. Je crois que la technologie et l'art sont des outils pour connecter les gens et servir les communautés.",
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_platforms: "Plateformes",
    nav_contact: "Contact",
    about_title: "À Propos de Moi",
    about_text: "Je crois que la technologie et l'art sont des outils pour connecter les gens et servir les communautés. Ici, je documente mon parcours dans la création d'outils logiciels simples avec un impact réel.",
    projects_title: "Projets Logiciels",
    project_wasel: "Plateforme Wasel",
    project_wasel_desc: "Une application web progressive (PWA) conçue pour connecter bénévoles et donateurs avec les associations locales.",
    project_yoobify: "Yoobify",
    project_yoobify_desc: "Une application web pour découvrir de la musique à travers différentes cultures et langues.",
    project_nuru: "Support Langue Nuru",
    project_nuru_desc: "Extension officielle fournissant la coloration syntaxique pour le langage Nuru dans VS Code.",
    project_codestats: "Codestats",
    project_codestats_desc: "Un outil Python léger pour analyser les statistiques de code à travers les projets.",
    view_project: "Voir le Projet ↗",
    platforms_title: "Où Me Trouver",
    contact_title: "Me Contacter",
    contact_text: "Vous avez une idée, une question, ou voulez juste dire bonjour? Ma boîte de réception est toujours ouverte.",
    email_me: "Envoyez-moi un Email",
    send_email: "Envoyer un Message ✉️",
    footer_about_title: "À Propos du Site",
    footer_about_text: "Un site personnel documentant le parcours de Mohamed Nidhal Benyakhelf en programmation et cinéma. Construit avec Jekyll sur GitHub Pages.",
    footer_links_title: "Liens Rapides",
    footer_contact_title: "Contact",
    footer_made_with: "Fait avec",
    footer_and: "et"
  }
};

// تطبيق الترجمة
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // تحديث الزر والقائمة
  const langNames = { ar: 'العربية', en: 'English', fr: 'Français' };
  document.getElementById('currentLang').textContent = langNames[lang];
  
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // حفظ الاختيار
  localStorage.setItem('preferredLang', lang);
}

// تهيئة زر اللغة
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  
  // تحميل اللغة المحفوظة
  const savedLang = localStorage.getItem('preferredLang') || 'ar';
  setLanguage(savedLang);
  
  // تبديل القائمة
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
  });
  
  // اختيار لغة
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
      langDropdown.classList.remove('active');
    });
  });
  
  // إغلاق القائمة عند النقر خارجها
  document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
  });
  
  langDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// التمرير السلس للروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
