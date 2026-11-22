// All site copy lives here. Each string has an English and a Romanian version.
// Work at Kautex is described by role and stack only: project details are confidential.

export type Lang = 'en' | 'ro'
export type L = { en: string; ro: string }

export const links = {
  email: 'your.email@example.com', // TODO: replace with the address you want public
  linkedin: 'https://www.linkedin.com/in/dariamaria-giotina/',
  github: 'https://github.com/DariaGiotina',
  roblox: 'https://www.roblox.com/games/79222239890394',
  cv: 'cv/Daria_Giotina_CV.pdf',
}

export const ui = {
  downloadCv: { en: 'Download CV', ro: 'Descarcă CV' },
  emailMe: { en: 'Email me', ro: 'Scrie-mi' },
  email: { en: 'Email', ro: 'Email' },
  menu: { en: 'Menu', ro: 'Meniu' },
  status: {
    en: 'Graduating June 2027 · Open to junior software, ML & game dev roles',
    ro: 'Absolvire iunie 2027 · Deschisă la roluri junior în software, ML și game dev',
  },
  statusShort: { en: 'Open to junior roles · June 2027', ro: 'Deschisă la roluri junior · 2027' },
  stack: { en: 'Stack', ro: 'Tehnologii' },
  myPart: { en: 'My part', ro: 'Partea mea' },
  pickTrack: { en: 'Pick what you’re hiring for.', ro: 'Alege ce cauți.' },
  alsoOnGithub: { en: 'Also on GitHub', ro: 'Tot pe GitHub' },
  tryDemo: { en: 'Try the demo', ro: 'Încearcă demo-ul' },
  scroll: { en: 'scroll', ro: 'derulează' },
  artBy: { en: 'Art by', ro: 'Artă de' },
  footerRight: { en: 'Built with React, three.js and too much coffee', ro: 'Construit cu React, three.js și prea multă cafea' },
}

export const nav: { id: string; label: L }[] = [
  { id: 'work', label: { en: 'Work', ro: 'Muncă' } },
  { id: 'projects', label: { en: 'Projects', ro: 'Proiecte' } },
  { id: 'motivation', label: { en: 'Motivation', ro: 'Motivație' } },
  { id: 'experience', label: { en: 'Experience', ro: 'Experiență' } },
  { id: 'highlights', label: { en: 'Highlights', ro: 'Repere' } },
  { id: 'skills', label: { en: 'Skills', ro: 'Competențe' } },
  { id: 'gallery', label: { en: 'Gallery', ro: 'Galerie' } },
  { id: 'contact', label: { en: 'Contact', ro: 'Contact' } },
]

export const hero = {
  name: 'Daria Giotina',
  stickers: [
    { kind: 'accent', title: { en: 'AI & Data Science × Software', ro: 'AI & Data Science × Software' } },
    { kind: 'card', title: { en: 'Kautex Textron', ro: 'Kautex Textron' }, sub: { en: 'AI & Data Science Engineer', ro: 'Inginer AI & Data Science' } },
    { kind: 'card', title: { en: 'University of Craiova', ro: 'Universitatea din Craiova' }, sub: { en: 'B.Eng. Software Engineering ’27', ro: 'Inginerie Software ’27' } },
    { kind: 'ghost', title: { en: 'CRA ⇄ BONN', ro: 'CRA ⇄ BONN' } },
    { kind: 'small', title: { en: 'RO · EN · C1', ro: 'RO · EN · C1' } },
  ] as { kind: 'accent' | 'card' | 'ghost' | 'small'; title: L; sub?: L }[],
}

export const band: L[] = [
  { en: 'AI & Data Science', ro: 'AI & Data Science' },
  { en: 'Software Engineering', ro: 'Inginerie Software' },
  { en: 'Machine Learning', ro: 'Machine Learning' },
  { en: 'Game Development', ro: 'Dezvoltare de jocuri' },
  { en: 'Craiova ⇄ Bonn', ro: 'Craiova ⇄ Bonn' },
]

export const statement: L[] = [
  { en: 'I turn engineering data into tools people actually use.', ro: 'Transform datele de inginerie în instrumente pe care oamenii chiar le folosesc.' },
  { en: 'Software engineering student · AI & data science engineer at Kautex.', ro: 'Studentă la Inginerie Software · inginer AI & data science la Kautex.' },
]

export const work = {
  label: { en: '02 · Work', ro: '02 · Muncă' },
  title: { en: 'Work', ro: 'Muncă' },
  current: { en: 'Current · Dec 2025 – now', ro: 'Prezent · dec. 2025 – acum' },
  role: { en: 'AI & Data Science Engineer', ro: 'Inginer AI & Data Science' },
  org: { en: 'Kautex Textron · Kautex Development Program (KDP) · Craiova, hybrid', ro: 'Kautex Textron · Kautex Development Program (KDP) · Craiova, hibrid' },
  before: { en: 'Before: AI & Data Science Intern · Sep – Nov 2025', ro: 'Înainte: Intern AI & Data Science · sep. – nov. 2025' },
  rotations: [
    { en: 'Data Science', ro: 'Data Science' },
    { en: 'Advanced Manufacturing', ro: 'Advanced Manufacturing' },
    { en: 'Design', ro: 'Design' },
  ],
  program: { en: '12-month rotational program · three engineering teams', ro: 'Program rotațional de 12 luni · trei echipe de inginerie' },
  note: {
    en: 'The projects I work on are confidential, so instead of case studies, here is the stack I use every day.',
    ro: 'Proiectele la care lucrez sunt confidențiale, așa că în loc de studii de caz, iată tehnologiile pe care le folosesc zilnic.',
  },
  noteSub: { en: 'Happy to talk about how I work in an interview.', ro: 'Îți povestesc cu drag cum lucrez, la un interviu.' },
  pipeline: [
    { t: 'Raw data', s: 'sensors · logs · files' },
    { t: 'ETL', s: 'Azure · SQL' },
    { t: 'Analysis', s: 'Python · pandas' },
    { t: 'ML', s: 'scikit-learn · PyTorch' },
    { t: 'Dashboards', s: 'Plotly · Power BI' },
  ],
  pipelineCaption: {
    en: 'From raw data to a decision. The tools stay the same, the problems change.',
    ro: 'De la date brute la o decizie. Instrumentele rămân aceleași, problemele se schimbă.',
  },
  stack: [
    { t: { en: 'Data & pipelines', ro: 'Date & pipeline-uri' }, items: ['Python', 'pandas', 'NumPy', 'SQL', 'ETL', 'Microsoft Azure'] },
    { t: { en: 'Machine learning', ro: 'Machine learning' }, items: ['scikit-learn', 'PyTorch', 'YOLO', 'Anomaly detection', 'Clustering', 'Statistics'] },
    { t: { en: 'Quality & process data', ro: 'Date de calitate & proces' }, items: ['Statistical Process Control', 'Control charts', 'Drift detection', 'Traceability'] },
    { t: { en: 'Dashboards & apps', ro: 'Dashboard-uri & aplicații' }, items: ['Plotly', 'Power BI', 'Flutter', 'Polarion KPIs'] },
    { t: { en: 'AI & agents', ro: 'AI & agenți' }, items: ['Copilot Studio', 'M365 Agent Builder', 'Generative AI', 'Prompt design'] },
    { t: { en: 'Engineering tools', ro: 'Unelte de inginerie' }, items: ['CATIA V5', '3DEXPERIENCE', 'Git', 'Unit testing'] },
  ],
}

export type Visual = 'phone' | 'rov' | 'browser' | 'parallel' | 'shops' | 'shot'
export type Project = {
  title: string
  tags: string[]
  status: L
  paras: L[]
  part: L
  stack: string
  link?: { label: L; href: string }
  visual: Visual
  shot?: { file: string; label: string; chip: L; live?: boolean; caption: L }
  credit?: boolean
}
export type Track = { key: string; letter: string; name: L; sub: L; projects: Project[] }

const gh = (repo: string) => `https://github.com/DariaGiotina/${repo}`

export const projectsIntro = {
  label: { en: '03 · Personal projects', ro: '03 · Proiecte personale' },
  title: { en: 'Projects', ro: 'Proiecte' },
}

export const artist = {
  name: '[Artist name]', // TODO: your artist friend's name
  school: { en: 'National University of Arts Bucharest', ro: 'Universitatea Națională de Arte București' },
}

export const tracks: Track[] = [
  {
    key: 'ai', letter: 'A', name: { en: 'AI & Data', ro: 'AI & Date' }, sub: { en: 'For ML · data science · AI roles', ro: 'Pentru roluri de ML · data science · AI' },
    projects: [
      {
        title: 'AI Skincare Companion', tags: ['Machine learning', 'Computer vision', 'Full-stack'], status: { en: 'Bachelor thesis · 2027', ro: 'Lucrare de licență · 2027' },
        paras: [
          { en: 'A skin-concern classifier trained on 1,800+ labelled cases. I tested whether questionnaire answers improve a photo model. They didn’t, and I proved it with control checks instead of hiding it. Then I shipped a calibrated DINOv2 model that abstains when it isn’t sure.', ro: 'Un clasificator pentru afecțiuni ale pielii, antrenat pe peste 1.800 de cazuri etichetate. Am testat dacă răspunsurile la un chestionar îmbunătățesc un model pe fotografii. Nu au făcut-o, iar asta am demonstrat cu verificări de control, nu am ascuns-o. Apoi am livrat un model DINOv2 calibrat care se abține când nu e sigur.' },
          { en: 'Accuracy checked by skin tone over 10 seeds, leakage tests on every split, exported to ONNX and served through FastAPI to a React Native app.', ro: 'Acuratețe verificată pe tonuri de piele, pe 10 seed-uri, teste de leakage la fiecare împărțire, export în ONNX și servit prin FastAPI către o aplicație React Native.' },
        ],
        part: { en: 'Solo: research, model, API and app', ro: 'Individual: cercetare, model, API și aplicație' },
        stack: 'PyTorch · DINOv2 · scikit-learn · FastAPI · ONNX · React Native', link: { label: { en: 'View on GitHub →', ro: 'Vezi pe GitHub →' }, href: gh('Bachelor_Thesis') }, visual: 'phone',
      },
      {
        title: 'Underwater Vision & ROV Sensors', tags: ['Computer vision', 'Embedded', 'Erasmus+'], status: { en: '2024 · 2025', ro: '2024 · 2025' },
        paras: [
          { en: 'Two Erasmus+ programmes on underwater robots and AI at the International Hellenic University. I put leak, rain and pH sensors on Arduino and Raspberry Pi, ran CNN ablation studies (LeNet, AlexNet, VGG) and built a YOLOv8 demo that detects and counts fish in video.', ro: 'Două programe Erasmus+ despre roboți subacvatici și AI la International Hellenic University. Am integrat senzori de scurgere, ploaie și pH pe Arduino și Raspberry Pi, am rulat studii de ablație pe rețele CNN (LeNet, AlexNet, VGG) și am construit un demo YOLOv8 care detectează și numără pești în video.' },
          { en: 'All in mixed Romanian, Croatian and Greek student teams.', ro: 'Totul în echipe mixte de studenți români, croați și greci.' },
        ],
        part: { en: 'Sensor integration, CNN experiments, detection demo', ro: 'Integrarea senzorilor, experimente CNN, demo de detecție' },
        stack: 'Python · PyTorch · YOLOv8 · Arduino · Raspberry Pi · C', visual: 'rov',
      },
    ],
  },
  {
    key: 'software', letter: 'B', name: { en: 'Software', ro: 'Software' }, sub: { en: 'For software engineering · full-stack roles', ro: 'Pentru roluri de inginerie software · full-stack' },
    projects: [
      {
        title: 'Venue Booking System', tags: ['Full-stack', 'Web', 'Team of 3'], status: { en: 'University · 2026', ro: 'Facultate · 2026' },
        paras: [
          { en: 'A booking platform for event venues with role-based dashboards for clients, venue owners and admins, secure login, and a full software requirements specification written before a line of code.', ro: 'O platformă de rezervări pentru locații de evenimente, cu dashboard-uri pe roluri pentru clienți, proprietari și administratori, autentificare securizată și o specificație completă a cerințelor scrisă înainte de prima linie de cod.' },
          { en: 'Built as a team of three with a React front end, a Node and Express API and SQL Server.', ro: 'Construită în echipă de trei, cu front-end React, API Node și Express și SQL Server.' },
        ],
        part: { en: '[Add what you built]', ro: '[Adaugă ce ai construit]' }, // TODO
        stack: 'React 19 · Node.js · Express · SQL Server · JWT · bcrypt', link: { label: { en: 'View on GitHub →', ro: 'Vezi pe GitHub →' }, href: gh('Application-for-venue-booking') }, visual: 'browser',
      },
      {
        title: 'Parallel Image Processing', tags: ['Java', 'Concurrency', 'Performance'], status: { en: 'University · 2025', ro: 'Facultate · 2025' },
        paras: [
          { en: 'Gaussian blur, grayscale and Sobel edge detection, rewritten with Java’s Fork/Join framework. Every parallel output is checked pixel for pixel against the sequential version.', ro: 'Blur Gaussian, tonuri de gri și detecție de margini Sobel, rescrise cu framework-ul Fork/Join din Java. Fiecare rezultat paralel e verificat pixel cu pixel față de versiunea secvențială.' },
          { en: 'Measured 2.3×, 1.4× and 2.5× speed-ups on 20 threads, with an honest write-up of why it stops scaling: the sequential share and memory contention.', ro: 'Accelerări măsurate de 2,3×, 1,4× și 2,5× pe 20 de fire de execuție, cu o analiză sinceră a motivelor pentru care nu mai scalează: partea secvențială și contenția de memorie.' },
        ],
        part: { en: 'Solo', ro: 'Individual' },
        stack: 'Java · Fork/Join · benchmarking', link: { label: { en: 'View on GitHub →', ro: 'Vezi pe GitHub →' }, href: gh('Proiect_APD') }, visual: 'parallel',
      },
      {
        title: 'E-commerce Storefronts', tags: ['Backend', 'C#', 'Node.js'], status: { en: 'University · 2025', ro: 'Facultate · 2025' },
        paras: [
          { en: 'Two shops built on two stacks. An ASP.NET Core 8 storefront with Entity Framework: cart, wishlist, coupons and orders. And an Express 5 shop with server-rendered EJS, SQLite, admin and customer roles, and automated tests.', ro: 'Două magazine pe două tehnologii. Un magazin ASP.NET Core 8 cu Entity Framework: coș, favorite, cupoane și comenzi. Și un magazin Express 5 cu EJS randat pe server, SQLite, roluri de admin și client, și teste automate.' },
          { en: 'Same problem twice, which taught me more about trade-offs between frameworks than either one alone.', ro: 'Aceeași problemă de două ori, ceea ce m-a învățat mai mult despre compromisurile dintre framework-uri decât oricare dintre ele separat.' },
        ],
        part: { en: 'Solo', ro: 'Individual' },
        stack: 'C# · ASP.NET Core 8 · Entity Framework · Express 5 · EJS · SQLite · node:test', link: { label: { en: 'View on GitHub →', ro: 'Vezi pe GitHub →' }, href: gh('Shopping-website') }, visual: 'shops',
      },
    ],
  },
  {
    key: 'games', letter: 'C', name: { en: 'Games', ro: 'Jocuri' }, sub: { en: 'For gameplay · game dev roles', ro: 'Pentru roluri de gameplay · game dev' },
    projects: [
      {
        title: 'Push or Fall', tags: ['Multiplayer', 'Luau', 'Live-ops'], status: { en: 'Live on Roblox', ro: 'Live pe Roblox' },
        paras: [
          { en: 'A 12-player arena brawler, live on Roblox. Server-authoritative combat and knockback, a round state machine, bots, 11 ability cards, a session-locked economy, daily rewards, quests and anti-cheat.', ro: 'Un joc de luptă în arenă pentru 12 jucători, live pe Roblox. Luptă și knockback validate pe server, o mașină de stări pentru runde, boți, 11 cărți de abilități, o economie cu sesiuni blocate, recompense zilnice, misiuni și anti-cheat.' },
          { en: 'About 52,000 lines of strictly typed Luau with 199 unit tests, plus a scripted Blender pipeline that takes art from the modelling file into the game.', ro: 'Aproximativ 52.000 de linii de Luau strict tipizat, cu 199 de teste unitare, plus un pipeline Blender scriptat care duce arta din fișierul de modelare direct în joc.' },
        ],
        part: { en: 'Game design, all code, Blender pipeline, live-ops', ro: 'Game design, tot codul, pipeline Blender, live-ops' },
        stack: 'Luau (strict) · Rojo · TestEZ · Blender Python · StyLua / Selene', link: { label: { en: 'Play on Roblox →', ro: 'Joacă pe Roblox →' }, href: links.roblox }, visual: 'shot', credit: true,
        shot: { file: 'push-or-fall.jpg', label: 'Gameplay screenshot', chip: { en: 'Live on Roblox', ro: 'Live pe Roblox' }, live: true, caption: { en: 'Round 3, seven players left', ro: 'Runda 3, au mai rămas șapte jucători' } },
      },
      {
        title: 'Snack Heist', tags: ['Stealth', 'Luau', 'AI'], status: { en: 'In development', ro: 'În dezvoltare' },
        paras: [
          { en: 'A steal-and-escape game in progress. Validated, rate-limited server calls so players can’t cheat, guardian AI that patrols and chases, and an economy layer.', ro: 'Un joc de tip „fură și fugi”, în lucru. Apeluri către server validate și limitate, ca jucătorii să nu poată trișa, gardieni AI care patrulează și urmăresc, și un strat de economie.' },
          { en: 'About 24,000 lines of strictly typed Luau and 170+ automated tests so far.', ro: 'Aproximativ 24.000 de linii de Luau strict tipizat și peste 170 de teste automate până acum.' },
        ],
        part: { en: 'Game design and all code', ro: 'Game design și tot codul' },
        stack: 'Luau (strict) · Rojo · TestEZ · Blender Python', visual: 'shot', credit: true,
        shot: { file: 'snack-heist.jpg', label: 'Concept art or work-in-progress shot', chip: { en: 'In development', ro: 'În dezvoltare' }, caption: { en: 'A first look, more soon', ro: 'O primă privire, urmează mai mult' } },
      },
      {
        title: 'Kintsugi', tags: ['Game jam', 'Unity', 'Team of 7'], status: { en: '2nd place · 72 h', ro: 'Locul 2 · 72 h' },
        paras: [
          { en: 'A Unity platformer built in 72 hours at a winter-school game jam in Bucharest, placing 2nd of 15+ teams.', ro: 'Un platformer Unity construit în 72 de ore la un game jam de iarnă în București, pe locul 2 din peste 15 echipe.' },
          { en: 'I was lead programmer and team lead: player movement, combat, several enemy types and the core “find your missing body parts” mechanic.', ro: 'Am fost programator principal și lider de echipă: mișcarea jucătorului, lupta, mai multe tipuri de inamici și mecanica centrală de „găsește-ți părțile corpului pierdute”.' },
        ],
        part: { en: 'Lead programmer', ro: 'Programator principal' },
        stack: 'Unity · C#', link: { label: { en: 'View the code →', ro: 'Vezi codul →' }, href: gh('game_jam_winterschool') }, visual: 'shot',
        shot: { file: 'kintsugi.jpg', label: 'Screenshot from the pitch deck', chip: { en: '2nd of 15+ teams', ro: 'Locul 2 din 15+' }, caption: { en: 'Gold seams, like the pottery', ro: 'Cusături de aur, ca în ceramică' } },
      },
    ],
  },
]

export const alsoOnGithub = [
  { label: 'C++ RPG with SFML', href: gh('Proiect-OOP') },
  { label: 'C++ STL exercises', href: gh('STL_Course') },
  { label: 'E-commerce lab', href: gh('Laborator_e-commerce') },
  { label: 'E-commerce project', href: gh('Proiect_e-commerce') },
]

export const motivation = {
  label: { en: '04 · Motivation', ro: '04 · Motivație' },
  title: { en: 'Motivation', ro: 'Motivație' },
  quote: { en: 'Good engineering data should end in a decision, not a spreadsheet.', ro: 'Datele bune de inginerie ar trebui să ducă la o decizie, nu la un tabel.' },
  paras: [
    { en: 'I came into automotive from software, seeing parts only as numbers. Working across validation, manufacturing and design teams changed that: I saw where the data and parameters I work with actually come from, and it made me better on the data side.', ro: 'Am ajuns în industria auto venind din software, văzând piesele doar ca numere. Lucrul cu echipe de validare, producție și design a schimbat asta: am văzut de unde vin de fapt datele și parametrii cu care lucrez, iar asta m-a făcut mai bună pe partea de date.' },
    { en: 'What I enjoy most is the moment a messy pile of measurements becomes something an engineer can trust and act on. That is the job I want to keep doing, with better tools and bigger problems.', ro: 'Cel mai mult îmi place momentul în care un morman dezordonat de măsurători devine ceva în care un inginer poate avea încredere și pe baza căruia poate acționa. Asta vreau să fac în continuare, cu unelte mai bune și probleme mai mari.' },
    { en: 'Outside work I build games, and shipping a live multiplayer game taught me more about testing, security and keeping promises to real users than any course.', ro: 'În afara muncii construiesc jocuri, iar lansarea unui joc multiplayer live m-a învățat mai multe despre testare, securitate și ținerea promisiunilor față de utilizatori reali decât orice curs.' },
    { en: 'Where I’m heading: senior data scientist. The person an engineer brings a problem and a pile of data to, and trusts to see it through from start to finish.', ro: 'Unde mă îndrept: senior data scientist. Persoana la care un inginer vine cu o problemă și un morman de date, și în care are încredere că o duce la capăt.' },
  ],
  carLabels: [
    { en: 'sensor data', ro: 'date de la senzori' },
    { en: 'features', ro: 'caracteristici' },
    { en: 'decision', ro: 'decizie' },
  ],
}

export const mindset = {
  label: { en: '05 · Mindset', ro: '05 · Mentalitate' },
  title: { en: 'Mindset', ro: 'Mentalitate' },
  items: [
    { t: { en: 'Data before models.', ro: 'Întâi datele, apoi modelele.' }, s: { en: 'Most of the value is in getting the data right.', ro: 'Cea mai mare parte din valoare stă în a avea datele corecte.' } },
    { t: { en: 'Build tools people actually use.', ro: 'Construiesc unelte pe care oamenii chiar le folosesc.' }, s: { en: 'If engineers go back to Excel, I’m not done.', ro: 'Dacă inginerii se întorc la Excel, nu am terminat.' } },
    { t: { en: 'If it isn’t tested, it isn’t done.', ro: 'Ce nu e testat, nu e gata.' }, s: { en: 'Unit tests, leakage checks, calibration. Evidence over guesswork.', ro: 'Teste unitare, verificări de leakage, calibrare. Dovezi, nu presupuneri.' } },
  ],
}

export const experience = {
  label: { en: '06 · Experience', ro: '06 · Experiență' },
  title: { en: 'Experience', ro: 'Experiență' },
  items: [
    { when: { en: 'Current', ro: 'Prezent' }, current: true, title: { en: 'AI & Data Science Engineer', ro: 'Inginer AI & Data Science' }, org: 'Kautex Textron · KDP · Dec 2025 – now', desc: { en: '12-month rotational engineering program across data science, advanced manufacturing and design. Python, ML, dashboards and AI agents.', ro: 'Program rotațional de inginerie de 12 luni în data science, advanced manufacturing și design. Python, ML, dashboard-uri și agenți AI.' } },
    { when: { en: 'Current', ro: 'Prezent' }, current: true, title: { en: 'B.Eng. Software Engineering', ro: 'Licență în Inginerie Software' }, org: 'University of Craiova · 2023 – Jun 2027', desc: { en: 'Faculty of Automation, Computer Science and Electronics. Thesis on calibrated, fair skin-concern classification.', ro: 'Facultatea de Automatică, Calculatoare și Electronică. Lucrare de licență despre clasificarea calibrată și echitabilă a afecțiunilor pielii.' } },
    { when: { en: '2025', ro: '2025' }, title: { en: 'AI & Data Science Intern', ro: 'Intern AI & Data Science' }, org: 'Kautex Textron · Sep – Nov 2025', desc: { en: 'Python data pipelines and machine learning in a global validation team. Contributed to a Flutter app and KPI dashboards.', ro: 'Pipeline-uri de date în Python și machine learning într-o echipă globală de validare. Am contribuit la o aplicație Flutter și la dashboard-uri KPI.' } },
    { when: { en: '2025', ro: '2025' }, title: { en: 'Erasmus+ · ROVs & AI', ro: 'Erasmus+ · ROV-uri & AI' }, org: 'International Hellenic University · May 2025', desc: { en: 'CNN ablation studies, YOLOv8 detection on video and ROV sensors, in an international team.', ro: 'Studii de ablație CNN, detecție YOLOv8 pe video și senzori pentru ROV, într-o echipă internațională.' } },
    { when: { en: '2025', ro: '2025' }, title: { en: 'Game Jam · 2nd place', ro: 'Game Jam · locul 2' }, org: 'Winter school · Bucharest · Feb 2025', desc: { en: 'Lead programmer and team lead of seven. Shipped Kintsugi in 72 hours.', ro: 'Programator principal și lider al unei echipe de șapte. Am lansat Kintsugi în 72 de ore.' } },
    { when: { en: '2024', ro: '2024' }, title: { en: 'Erasmus+ · AI, IoT & ROVs', ro: 'Erasmus+ · AI, IoT & ROV-uri' }, org: 'International Hellenic University · Jul 2024', desc: { en: 'First blended intensive programme on underwater robots, IoT and AI.', ro: 'Primul program intensiv mixt despre roboți subacvatici, IoT și AI.' } },
  ],
}

export const highlights = {
  label: { en: '07 · Highlights', ro: '07 · Repere' },
  title: { en: 'Highlights', ro: 'Repere' },
  photos: [
    { file: 'highlight-bonn.jpg', label: 'AI agent workshop, Bonn' },
    { file: 'highlight-team.jpg', label: 'Game jam team' },
  ],
  items: [
    { t: { en: 'Teaching AI agents in Bonn', ro: 'Agenți AI predați la Bonn' }, s: { en: 'Co-hosted an agent-building workshop at a European graduate-program gathering. About 8 colleagues each built their own AI agent.', ro: 'Am co-organizat un workshop de construit agenți la o întâlnire europeană a programului pentru absolvenți. Aproximativ 8 colegi și-au construit fiecare propriul agent AI.' } },
    { t: { en: '2nd place at a game jam', ro: 'Locul 2 la un game jam' }, s: { en: 'Lead programmer and team lead for Kintsugi, out of 15+ teams, in 72 hours.', ro: 'Programator principal și lider de echipă pentru Kintsugi, din peste 15 echipe, în 72 de ore.' } },
    { t: { en: 'Two summers in Thessaloniki', ro: 'Două veri la Salonic' }, s: { en: 'Two Erasmus+ programmes on underwater robots and AI, with Romanian, Croatian and Greek students.', ro: 'Două programe Erasmus+ despre roboți subacvatici și AI, cu studenți români, croați și greci.' } },
    { t: { en: 'Shipping a live game', ro: 'Un joc lansat live' }, s: { en: 'Push or Fall went live on Roblox with real players, receipts, daily rewards and ongoing updates.', ro: 'Push or Fall a fost lansat pe Roblox, cu jucători reali, achiziții, recompense zilnice și actualizări constante.' } },
    { t: { en: 'C++, properly', ro: 'C++, cum trebuie' }, s: { en: 'C++ STL course (NetRom Software) and Competitive Programming in C++ (University of Craiova), both 2025.', ro: 'Cursul C++ STL (NetRom Software) și Programare Competitivă în C++ (Universitatea din Craiova), ambele în 2025.' } },
    { t: { en: 'Beyond code', ro: 'Dincolo de cod' }, s: { en: 'Cambridge C1 Advanced English (2022) and a Social Enterprise Manager certificate (2025).', ro: 'Cambridge C1 Advanced (2022) și certificat de Manager de Întreprindere Socială (2025).' } },
  ],
}

export const skills = {
  label: { en: '08 · Skills', ro: '08 · Competențe' },
  title: { en: 'Skills and Interests', ro: 'Competențe și interese' },
  interests: { label: { en: 'Interests', ro: 'Interese' }, items: ['Applied ML for Engineering', 'Data Products', 'AI Agents & LLM Tooling', 'Computer Vision', 'Game Systems'] },
  groups: [
    { label: { en: 'Languages', ro: 'Limbaje' }, items: ['Python', 'SQL', 'TypeScript / JavaScript', 'Java', 'C++', 'C#', 'Luau', 'C'] },
    { label: { en: 'AI & data', ro: 'AI & date' }, items: ['PyTorch', 'scikit-learn', 'pandas / NumPy', 'Plotly', 'DINOv2 / ViT', 'YOLO', 'ONNX', 'Statistics & SPC', 'ETL', 'Microsoft Azure'] },
    { label: { en: 'Software', ro: 'Software' }, items: ['FastAPI', 'REST APIs', 'React / React Native', 'Node.js / Express', 'ASP.NET Core', 'SQL Server · PostgreSQL · MongoDB', 'pytest & unit tests', 'Git'] },
    { label: { en: 'Games & 3D', ro: 'Jocuri & 3D' }, items: ['Roblox Studio', 'Luau (strict)', 'Unity', 'Blender (Python)', 'Rojo', 'TestEZ'] },
    { label: { en: 'AI tooling', ro: 'Unelte AI' }, items: ['Copilot Studio', 'AI agents', 'MCP servers', 'Claude Code'] },
  ],
  spoken: { label: { en: 'Spoken', ro: 'Limbi vorbite' }, items: [{ n: 'Română', l: { en: 'Native', ro: 'Nativ' } }, { n: 'English', l: { en: 'C1 · Cambridge', ro: 'C1 · Cambridge' } }] },
}

export const gallery = {
  words: [{ en: 'Build', ro: 'Construiesc' }, { en: 'Learn', ro: 'Învăț' }],
  photos: [
    { file: 'gallery-1.jpg', label: 'At my desk' },
    { file: 'gallery-2.jpg', label: 'ROV lab · Thessaloniki' },
    { file: 'gallery-3.jpg', label: 'Game jam team' },
    { file: 'gallery-4.jpg', label: 'Bonn' },
    { file: 'gallery-5.jpg', label: 'Craiova' },
    { file: 'gallery-6.jpg', label: 'Blender WIP' },
  ],
}

export const socials = {
  title: { en: 'Say Hello', ro: 'Salut' },
  sub: { en: 'On the internet', ro: 'Pe internet' },
  items: [
    { n: 'LinkedIn', h: 'dariamaria-giotina', href: links.linkedin },
    { n: 'GitHub', h: 'DariaGiotina', href: links.github },
    { n: 'Roblox', h: 'Push or Fall', href: links.roblox },
  ],
}

export const contact = {
  label: { en: '11 · Contact', ro: '11 · Contact' },
  title: { en: 'LET’S CONNECT', ro: 'HAI SĂ VORBIM' },
}
