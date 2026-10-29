(function () {
  'use strict';
  const root = document.documentElement;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  /* ── French strings (English lives in the HTML) ── */
  const FR = {
    'nav.about': 'À propos', 'nav.focus': 'Domaines', 'nav.exp': 'Expérience', 'nav.projects': 'Projets',
    'nav.journey': 'Parcours', 'nav.edu': 'Formation', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Ingénieure Machine Learning · IA &amp; Cybersécurité',
    'hero.hi': 'Bonjour, je suis Eya',
    'chip.research': 'Sur quoi porte ta recherche ?', 'chip.phd': 'Tu cherches une thèse ?',
    'chip.projects': 'Montre-moi tes projets', 'chip.stack': 'Tes outils ?', 'chip.contact': 'Comment te contacter ?',
    'ask.label': 'Poser une question à Eya', 'ask.ph': 'Écris quelque chose à Eya…',
    'ask.note': "Les réponses viennent d'un assistant IA qui connaît mon CV. Pour tout ce qui est important, écris-moi.",
    'cta.cv': 'Télécharger le CV',
    'focus.ttl': 'Ce que je fais',
    'f1.t': 'Graph ML &amp; détection d\'anomalies',
    'f1.d': 'Réseaux de neurones sur graphes pour la détection d\'intrusions, et détection d\'anomalies dans des séries temporelles multivariées en combinant ACP, Dynamic Time Warping et GNN sur le jeu de données industriel SWaT.',
    'f2.t': 'Machine learning pour la cybersécurité',
    'f2.d': 'Chaînes de prétraitement pour des jeux de données de sécurité volumineux et bruités, et protocoles d\'évaluation reproductibles, construits pendant mon stage de recherche au CNAM Paris.',
    'f3.t': 'Vision par ordinateur &amp; ML appliqué',
    'f3.d': 'Classification d\'images médicales au-delà de 90 % de précision, un serveur de classification d\'images et une chaîne de maintenance prédictive sur NASA CMAPSS.',
    'f4.t': 'Systèmes embarqués &amp; IoT',
    'f4.d': 'Du firmware ESP32 et du traitement de signaux EMG aux objets Arduino Wi-Fi : j\'aime les modèles qui rencontrent de vrais capteurs.',
    'tool.ttl': 'Boîte à outils', 'tool.lang': 'Langages', 'tool.ml': 'ML &amp; IA', 'tool.sec': 'Sécurité', 'tool.sys': 'Systèmes &amp; Web',
    'tool.ts': 'Séries temporelles', 'tool.ids': 'Détection d\'intrusions', 'tool.net': 'Sécurité réseau',
    'tool.for': 'Forensique', 'tool.mal': 'Analyse de malwares', 'tool.web': 'Sécurité web',
    'exp.ttl': 'Expérience',
    'j1.date': 'sept. 2025 - mars 2026', 'j1.role': 'Ingénieure Machine Learning, stage de recherche',
    'j1.b1': 'Construction d\'une chaîne de prétraitement de séries temporelles de cybersécurité, qui détecte et filtre les anomalies liées aux attaques sur 4 jeux de données de référence.',
    'j1.b2': 'Mise en place d\'un protocole d\'entraînement et d\'évaluation pour des modèles GNN de détection d\'intrusions, validé sur 4 types d\'attaques.',
    'j1.b3': 'Conception de protocoles d\'évaluation reproductibles comparant des stratégies de filtrage, et présentation du travail au séminaire de l\'équipe ROC.',
    'j2.date': 'juin 2023 - juil. 2023', 'j2.role': 'Développeuse full stack, stage',
    'j2.b1': 'Développement d\'une plateforme e-commerce Laravel (50+ produits) avec authentification sécurisée, panier, suivi de commande et profils.',
    'j2.b2': 'Interface responsive avec parcours de commande complet et gestion des rôles.',
    'j3.date': 'févr. 2022 - juin 2022', 'j3.role': 'Ingénieure systèmes embarqués &amp; IoT, stage',
    'j3.b1': 'Conception d\'un système portable de mesure EMG : firmware ESP32, capteurs Grove-EMG sur 2 groupes musculaires et application Flutter synchronisée en temps réel avec Firebase.',
    'j3.b2': 'Traitement et visualisation des signaux EMG sous MATLAB sur plus de 20 sessions de tests.',
    'j4.date': 'juin 2021 - juil. 2021', 'j4.role': 'Stage en développement embarqué',
    'j4.b1': 'Réalisation d\'un afficheur publicitaire intelligent sur Arduino, avec Wi-Fi et une interface web de contrôle en temps réel.',
    'j5.date': 'juil. 2020', 'j5.role': 'Stage données',
    'j5.b1': 'Gestion d\'une base de données de consommation énergétique et automatisation de son analyse avec VBA et Excel.',
    'talk.ttl': 'Séminaires', 'talk.meta': 'CNAM · Séminaire de l\'équipe ROC · 10 décembre 2025 · Paris',
    'talk.d': 'J\'ai présenté mon travail sur la détection d\'anomalies dans des données réseau, avec des réseaux de neurones sur graphes combinés à l\'ACP et au Dynamic Time Warping.',
    'talk.tag': 'Détection d\'anomalies', 'talk.link': 'Voir la page du séminaire →',
    'proj.ttl': 'Projets', 'p.site': 'Voir le site ↗',
    'p1.d': 'Chaîne de maintenance prédictive sur les données CMAPSS : ingestion, prétraitement, modèles et interface de prédiction de durée de vie restante.',
    'p2.d': 'Serveur de classification d\'images avec des modèles TorchVision : upload, transformations, histogrammes et résultats téléchargeables.',
    'p3.d': 'Classification de mots de passe faibles, moyens et forts avec TF-IDF et comparaison de modèles supervisés.',
    'p4.d': 'Plateforme e-commerce Laravel pour une boutique tech : catalogue, panier, commande, contact et tableau de bord.',
    'jr.ttl': 'D\'une rive à l\'autre', 'jr.sub': 'Fais défiler pour suivre le parcours · Sfax → Cagliari → Paris → Cagliari',
    's1.t': 'Sfax, Tunisie', 's1.a': 'ENETCOM : Licence ICT (IoT), puis Master 1 Systèmes embarqués', 's1.b': 'Stages chez STEG, IGL Distribution, ESSE et Exadev',
    's2.t': 'Cagliari, Sardaigne', 's2.w': 'oct. 2023 - août 2024', 's2.a': 'Master en génie informatique, IA &amp; Machine Learning', 's2.b': 'Projet de classification d\'images médicales, sélection Erasmus pour Paris',
    's3.t': 'Paris, France', 's3.w': 'sept. 2024 - mars 2026', 's3.a': 'Semestre Erasmus au CNAM : big data, sécurité réseau, forensique, malwares', 's3.b': 'Stage de recherche de six mois au CNAM sur la détection d\'anomalies par GNN',
    's4.t': 'Cagliari, puis Paris', 's4.a': 'Master obtenu en septembre 2026', 's4.b': 'De retour à Paris, ouverte aux thèses et aux postes en ML',
    'edu.ttl': 'Formation',
    'e1.d': 'Master en génie informatique, Intelligence Artificielle &amp; Machine Learning', 'e1.l': 'Cagliari, Italie',
    'e2.d': 'Semestre d\'échange Erasmus : big data, sécurité réseau, forensique, sécurité web, analyse de malwares',
    'e3.h': 'ENETCOM, École Nationale d\'Électronique et des Télécommunications de Sfax',
    'e3.d': 'Master 1 Systèmes embarqués · Licence ICT, spécialité IoT (2022)', 'e3.l': 'Sfax, Tunisie',
    'c.ttl': 'Envie de travailler ensemble ?', 'c.d': 'Je suis ouverte aux propositions de thèse et aux postes en machine learning en France.',
    'c.mail': 'Email :', 'c.web': 'En ligne :',
  };

  const GREETING = {
    en: "Hey, I'm Eya! A machine learning engineer working on graph neural networks and anomaly detection for cybersecurity. Ask me anything below.",
    fr: "Salut, je suis Eya ! Ingénieure machine learning, je travaille sur les réseaux de neurones sur graphes et la détection d'anomalies pour la cybersécurité. Pose-moi une question.",
  };

  /* Prepared answers: used for the chips when the AI is unavailable. */
  const CANNED = {
    en: {
      research: "During my research internship at CNAM Paris I worked on anomaly detection for cybersecurity: a preprocessing pipeline over 4 benchmark datasets and a training and evaluation workflow for graph neural network intrusion detection. My thesis combined PCA, Dynamic Time Warping and GNNs on multivariate time series from the SWaT industrial dataset.",
      phd: "Yes! I finished my M.Sc. in AI and Machine Learning in September 2026 and I'm looking for a funded PhD in France, ideally around graph ML, anomaly detection, time series or ML for security. I'm based in Paris and available now.",
      projects: "A few of them: AeroRUL (predictive maintenance on NASA CMAPSS), VisionLab (an image classification server with TorchVision), PassGuard (password strength classification) and Zedify (a Laravel e-commerce platform). They're all in the Projects section with live links.",
      stack: "Mostly Python with PyTorch, scikit-learn, pandas and NumPy, plus TensorFlow/Keras. I also work with C/C++, MATLAB, Laravel and Flutter, and on the hardware side ESP32, Arduino and Raspberry Pi.",
      contact: "The easiest is email: eyazineddine902@gmail.com. You can also find me on LinkedIn (linkedin.com/in/eyazineddine).",
      offline: "My assistant is offline right now. The best way to ask me is by email: eyazineddine902@gmail.com.",
      busy: "That's a lot of questions at once! Give it a minute, or email me at eyazineddine902@gmail.com.",
    },
    fr: {
      research: "Pendant mon stage de recherche au CNAM Paris, j'ai travaillé sur la détection d'anomalies pour la cybersécurité : une chaîne de prétraitement sur 4 jeux de données de référence et un protocole d'entraînement et d'évaluation de modèles GNN pour la détection d'intrusions. Mon mémoire combinait ACP, Dynamic Time Warping et GNN sur les séries temporelles du jeu de données industriel SWaT.",
      phd: "Oui ! J'ai obtenu mon Master en IA et Machine Learning en septembre 2026 et je cherche une thèse financée en France, idéalement autour du graph ML, de la détection d'anomalies, des séries temporelles ou du ML pour la sécurité. Je suis à Paris et disponible dès maintenant.",
      projects: "Quelques-uns : AeroRUL (maintenance prédictive sur NASA CMAPSS), VisionLab (serveur de classification d'images avec TorchVision), PassGuard (classification de la robustesse des mots de passe) et Zedify (plateforme e-commerce Laravel). Tout est dans la section Projets, avec les liens.",
      stack: "Surtout Python avec PyTorch, scikit-learn, pandas et NumPy, et aussi TensorFlow/Keras. Je travaille aussi en C/C++, MATLAB, Laravel et Flutter, et côté matériel avec ESP32, Arduino et Raspberry Pi.",
      contact: "Le plus simple est l'email : eyazineddine902@gmail.com. Tu peux aussi me trouver sur LinkedIn (linkedin.com/in/eyazineddine).",
      offline: "Mon assistant est hors ligne pour le moment. Le mieux est de m'écrire : eyazineddine902@gmail.com.",
      busy: "Beaucoup de questions d'un coup ! Réessaie dans une minute, ou écris-moi à eyazineddine902@gmail.com.",
    },
  };

  /* ── Language ── */
  const EN = {};
  document.querySelectorAll('[data-i18n]').forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { EN[el.dataset.i18nPh] = el.placeholder; });
  let lang = root.lang === 'fr' ? 'fr' : 'en';
  const langBtn = document.getElementById('langBtn');

  function applyLang() {
    const dict = lang === 'fr' ? FR : EN;
    document.querySelectorAll('[data-i18n]').forEach(el => { const v = dict[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { const v = dict[el.dataset.i18nPh]; if (v != null) el.placeholder = v; });
    root.lang = lang;
    langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
    langBtn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
  }
  langBtn.addEventListener('click', () => {
    lang = lang === 'fr' ? 'en' : 'fr';
    store.set('lang', lang);
    applyLang();
    if (!history.length) typeInto(GREETING[lang]);
  });
  applyLang();

  /* ── Theme ── */
  document.getElementById('themeBtn').addEventListener('click', () => {
    const light = root.classList.toggle('light');
    store.set('theme', light ? 'light' : 'dark');
    if (window._setTiles) window._setTiles(light);
  });

  /* ── Speech bubble ── */
  const bubble = document.getElementById('bubble');
  const bubbleText = document.getElementById('bubbleText');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let typingTimer = null;

  function typeInto(text) {
    clearInterval(typingTimer);
    bubble.classList.remove('thinking');
    if (reduced) { bubbleText.textContent = text; return; }
    let i = 0;
    bubbleText.textContent = '';
    const step = Math.max(1, Math.round(text.length / 220));
    typingTimer = setInterval(() => {
      i += step;
      bubbleText.textContent = text.slice(0, i);
      if (i >= text.length) clearInterval(typingTimer);
    }, 22);
  }
  function thinking() {
    clearInterval(typingTimer);
    bubble.classList.add('thinking');
    bubbleText.innerHTML = '<span class="dots" aria-label="…"><span></span><span></span><span></span></span>';
  }
  typeInto(GREETING[lang]);

  /* ── Chat ── */
  const history = [];
  const form = document.getElementById('askForm');
  const input = document.getElementById('askInput');
  const sendBtn = document.getElementById('askBtn');
  let busy = false;

  async function ask(question, cannedKey) {
    if (busy || !question.trim()) return;
    busy = true; sendBtn.disabled = true;
    thinking();
    let answer = null;
    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, history: history.slice(-6), lang }),
      });
      if (r.status === 429) answer = CANNED[lang].busy;
      else if (r.ok) { const d = await r.json(); answer = (d && d.answer) || null; }
    } catch (e) { /* network or no backend: fall through */ }
    if (!answer) answer = cannedKey ? CANNED[lang][cannedKey] : CANNED[lang].offline;
    history.push({ role: 'user', content: question }, { role: 'assistant', content: answer });
    typeInto(answer);
    busy = false; sendBtn.disabled = false;
  }

  document.getElementById('chips').addEventListener('click', e => {
    const b = e.target.closest('.chip');
    if (b) ask(b.textContent.trim(), b.dataset.q);
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    input.value = '';
    ask(q, null);
  });

  /* ── Active nav link ── */
  const links = [...document.querySelectorAll('.nav a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href')));
  function markNav() {
    const y = window.scrollY + 140;
    let cur = 0;
    sections.forEach((s, i) => { if (s && s.offsetTop <= y) cur = i; });
    links.forEach((a, i) => a.classList.toggle('active', i === cur));
  }
  window.addEventListener('scroll', markNav, { passive: true });
  markNav();

  /* ── Reveal on scroll (content is visible by default; only below-the-fold items animate in) ── */
  if (!reduced && 'IntersectionObserver' in window) {
    const ro = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.remove('pending'); ro.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(el => {
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add('pending'); ro.observe(el); }
    });
  }

  /* ── Journey map ── */
  if (window.L && document.getElementById('leaflet-map')) {
    const STOPS = [
      { name: 'Sfax', lat: 34.74, lng: 10.76, z: 9 },
      { name: 'Cagliari', lat: 39.22, lng: 9.11, z: 9 },
      { name: 'Paris', lat: 48.86, lng: 2.35, z: 9 },
      { name: 'Cagliari → Paris', lat: 44.2, lng: 5.8, z: 5 },
    ];
    const TILES = {
      dark: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      light: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    };
    const map = L.map('leaflet-map', {
      center: [41.5, 7], zoom: 5, zoomControl: false, scrollWheelZoom: false,
      dragging: false, touchZoom: false, doubleClickZoom: false, keyboard: false,
    });
    const opts = { maxZoom: 16, attribution: 'Tiles © <a href="https://www.esri.com">Esri</a>, © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors' };
    let layer = L.tileLayer(root.classList.contains('light') ? TILES.light : TILES.dark, opts).addTo(map);
    window._setTiles = light => { map.removeLayer(layer); layer = L.tileLayer(light ? TILES.light : TILES.dark, opts).addTo(map); };

    const route = [[34.74, 10.76], [39.22, 9.11], [48.86, 2.35]];
    L.polyline(route, { color: '#8b5cf6', weight: 2, opacity: .8, dashArray: '6 8' }).addTo(map);
    route.forEach((p, i) => {
      L.circleMarker(p, { radius: 7, color: '#fff', weight: 2, fillColor: '#6366f1', fillOpacity: 1 })
        .addTo(map).bindTooltip(['Sfax', 'Cagliari', 'Paris'][i], { permanent: true, direction: 'top', offset: [0, -8], className: 'map-tip' });
    });

    const stops = [...document.querySelectorAll('.stop')];
    let current = -1;
    function go(i) {
      if (i === current) return;
      current = i;
      stops.forEach((s, k) => s.classList.toggle('on', k === i));
      const s = STOPS[i];
      if (reduced) map.setView([s.lat, s.lng], s.z); else map.flyTo([s.lat, s.lng], s.z, { duration: 1.6 });
    }
    const so = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) go(+en.target.dataset.i); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    stops.forEach(s => so.observe(s));
    stops[0].classList.add('on');
  }
})();
