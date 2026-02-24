// --- CONFIGURATION ---
const TEACHER_ENDPOINT = "https://formspree.io/f/YOUR_CODE_HERE"; // <--- PASTE LINK HERE
const KEY = 'fei_art_history_v1';

// --- DATA: THE 20 ERAS ---
const CURRICULUM = [
  {
    id: 1, title: "The Dawn (Prehistoric)", era: "30,000 BCE",
    lecture: "<h3>Art for Survival</h3><p>Art began deep in caves. Artists used <strong>Earth Pigments</strong> (Ochre, Charcoal) mixed with animal fat.</p><p>They used the <strong>rock's natural shape</strong> to give animals 3D volume.</p>",
    mission: "Find a crumpled paper bag. Use charcoal to draw a bison, using the wrinkles to shape the muscles.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lascaux_painting.jpg/640px-Lascaux_painting.jpg"],
    quiz: [{q:"Why paint in caves?", opts:["Decor","Ritual","Hide"], ans:1}, {q:"Paint used?", opts:["Oil","Pigment/Fat","Acrylic"], ans:1}, {q:"Venus of Willendorf?", opts:["Queen","Fertility","Doll"], ans:1}, {q:"Subject?", opts:["Trees","Animals","Houses"], ans:1}, {q:"Tool?", opts:["Spray Can","Hollow Bone","Brush"], ans:1}]
  },
  {
    id: 2, title: "Mesopotamia", era: "3500 BCE",
    lecture: "<h3>Order from Chaos</h3><p>They built <strong>Ziggurats</strong> to reach the gods and invented <strong>Cuneiform</strong> writing.</p><p>The <strong>Ishtar Gate</strong> was blue glazed brick.</p>",
    mission: "Create a geometric border pattern using only Blue and Gold.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ishtar_Gate_at_Berlin_Museum.jpg/640px-Ishtar_Gate_at_Berlin_Museum.jpg"],
    quiz: [{q:"Ziggurat?", opts:["Temple","House","Tomb"], ans:0}, {q:"Writing?", opts:["English","Cuneiform","Hieroglyphs"], ans:1}, {q:"Gate Color?", opts:["Red","Blue","Green"], ans:1}, {q:"Focus?", opts:["Kings/Power","Nature","Fun"], ans:0}, {q:"Material?", opts:["Wood","Glazed Brick","Iron"], ans:1}]
  },
  {
    id: 3, title: "Ancient Egypt", era: "3000 BCE",
    lecture: "<h3>The Afterlife</h3><p>Art ensured the soul survived. Figures were drawn in <strong>Composite View</strong> (Face side, Eye front).</p>",
    mission: "Draw a self-portrait using Composite View rules.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Tutanchamun_Maske.jpg/300px-Tutanchamun_Maske.jpg"],
    quiz: [{q:"Purpose?", opts:["Decor","Afterlife","Fun"], ans:1}, {q:"Pharaoh Size?", opts:["Small","Huge","Normal"], ans:1}, {q:"View?", opts:["Front","Side","Composite"], ans:2}, {q:"Tombs?", opts:["Gifts for dead","Trash","Empty"], ans:0}, {q:"Shape?", opts:["Triangle","Square","Circle"], ans:0}]
  },
  {
    id: 4, title: "Ancient Greece", era: "500 BCE",
    lecture: "<h3>Perfection</h3><p>Greeks valued <strong>Humanism</strong>. They invented <strong>Contrapposto</strong> (weight shift) to make statues look alive.</p>",
    mission: "Stand in a mirror and pose in Contrapposto (S-Curve).",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Parthenon_from_west.jpg/320px-Parthenon_from_west.jpg"],
    quiz: [{q:"Goal?", opts:["Chaos","Ideal Beauty","Fear"], ans:1}, {q:"Contrapposto?", opts:["Column","Relaxed Pose","Tool"], ans:1}, {q:"Pottery?", opts:["Red/Black","Blue/Gold","Pink"], ans:0}, {q:"Parthenon?", opts:["Temple","House","Market"], ans:0}, {q:"Statues were?", opts:["White","Painted","Black"], ans:1}]
  },
  {
    id: 5, title: "Ancient Rome", era: "100 CE",
    lecture: "<h3>Engineering</h3><p>Romans invented <strong>Concrete</strong> and the <strong>Arch</strong>. Their portraits were realistic (Verism), showing warts and wrinkles.</p>",
    mission: "Build an arch using books.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Colosseo_2020.jpg/320px-Colosseo_2020.jpg"],
    quiz: [{q:"Invention?", opts:["Concrete","Plastic","Steel"], ans:0}, {q:"Shape?", opts:["Triangle","Arch","Square"], ans:1}, {q:"Portraits?", opts:["Realistic","Idealized","Abstract"], ans:0}, {q:"Pantheon?", opts:["Dome","Spire","Pyramid"], ans:0}, {q:"Use?", opts:["Power","Religion","Fun"], ans:0}]
  },
  {
    id: 6, title: "Byzantine", era: "500 CE",
    lecture: "<h3>Heaven on Earth</h3><p><strong>Gold backgrounds</strong> symbolized the spiritual realm. Mosaics were the main art form. Figures looked flat and floating.</p>",
    mission: "Create a paper mosaic.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hagia_Sophia_Mars_2013.jpg/320px-Hagia_Sophia_Mars_2013.jpg"],
    quiz: [{q:"Background?", opts:["Blue","Gold","Red"], ans:1}, {q:"Medium?", opts:["Mosaic","Oil","Watercolor"], ans:0}, {q:"Figures?", opts:["Flat","Muscular","Real"], ans:0}, {q:"Found in?", opts:["Churches","Homes","Caves"], ans:0}, {q:"Symbolism?", opts:["Spirit","Nature","War"], ans:0}]
  },
  {
    id: 7, title: "Islamic Art", era: "700 CE",
    lecture: "<h3>Geometry</h3><p>Avoided human figures in religious art. Mastered <strong>Complex Geometry</strong> and <strong>Calligraphy</strong>.</p>",
    mission: "Draw a radial geometric pattern.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Great_Mosque_of_Kairouan_prayer_hall.jpg/320px-Great_Mosque_of_Kairouan_prayer_hall.jpg"],
    quiz: [{q:"Avoided?", opts:["Figures","Colors","Words"], ans:0}, {q:"Key Element?", opts:["Calligraphy","Portraits","Statues"], ans:0}, {q:"Patterns?", opts:["Geometric","Chaotic","Simple"], ans:0}, {q:"Material?", opts:["Tiles","Canvas","Plastic"], ans:0}, {q:"Focus?", opts:["Order","Story","Politics"], ans:0}]
  },
  {
    id: 8, title: "Romanesque", era: "1000 CE",
    lecture: "<h3>Fortress of God</h3><p>Churches looked like fortresses: Thick walls, small windows, rounded arches.</p>",
    mission: "Draw a heavy stone castle.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Toulouse_Basilique_Saint-Sernin_Chevet.jpg/320px-Toulouse_Basilique_Saint-Sernin_Chevet.jpg"],
    quiz: [{q:"Walls?", opts:["Thick","Thin","Glass"], ans:0}, {q:"Arch?", opts:["Round","Pointed","Flat"], ans:0}, {q:"Mood?", opts:["Dark","Bright","Open"], ans:0}, {q:"Purpose?", opts:["Pilgrimage","Housing","Trade"], ans:0}, {q:"Windows?", opts:["Small","Huge","None"], ans:0}]
  },
  {
    id: 9, title: "Gothic", era: "1150 CE",
    lecture: "<h3>Height & Light</h3><p>Invented the <strong>Pointed Arch</strong> and <strong>Flying Buttress</strong> to allow massive Stained Glass windows.</p>",
    mission: "Design a stained glass window.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Notre-Dame_de_Paris_2013-07-24.jpg/320px-Notre-Dame_de_Paris_2013-07-24.jpg"],
    quiz: [{q:"Arch?", opts:["Pointed","Round","Square"], ans:0}, {q:"Innovation?", opts:["Flying Buttress","Concrete","Dome"], ans:0}, {q:"Windows?", opts:["Stained Glass","Clear","None"], ans:0}, {q:"Goal?", opts:["Height/Light","Safety","Warmth"], ans:0}, {q:"Feeling?", opts:["Awe","Fear","Boredom"], ans:0}]
  },
  {
    id: 10, title: "Proto-Renaissance", era: "1300 CE",
    lecture: "<h3>The Awakening</h3><p><strong>Giotto</strong> began painting figures with weight and emotion. Blue skies returned.</p>",
    mission: "Draw a face showing grief.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Giotto_-_Scrovegni_-_-36-_-_Lamentation_%28The_Mourning_of_Christ%29.jpg/320px-Giotto_-_Scrovegni_-_-36-_-_Lamentation_%28The_Mourning_of_Christ%29.jpg"],
    quiz: [{q:"Artist?", opts:["Giotto","Picasso","Monet"], ans:0}, {q:"Innovation?", opts:["Emotion","Abstract","Gold"], ans:0}, {q:"Sky?", opts:["Blue","Gold","Black"], ans:0}, {q:"Figures?", opts:["Solid","Floating","Flat"], ans:0}, {q:"Location?", opts:["Italy","France","Egypt"], ans:0}]
  },
  {
    id: 11, title: "Early Renaissance", era: "1400 CE",
    lecture: "<h3>Perspective</h3><p>Brunelleschi discovered <strong>Linear Perspective</strong>. Donatello revived the nude statue.</p>",
    mission: "Draw a room using 1-point perspective.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Masaccio_trinity.jpg/250px-Masaccio_trinity.jpg"],
    quiz: [{q:"Discovery?", opts:["Perspective","Oil","Camera"], ans:0}, {q:"Artist?", opts:["Masaccio","Dali","Warhol"], ans:0}, {q:"City?", opts:["Florence","Rome","Paris"], ans:0}, {q:"Sculpture?", opts:["David","Thinker","Zeus"], ans:0}, {q:"Focus?", opts:["Math/Realism","Dreams","Color"], ans:0}]
  },
  {
    id: 12, title: "High Renaissance", era: "1500 CE",
    lecture: "<h3>The Masters</h3><p>Leonardo, Michelangelo, Raphael. <strong>Pyramid Composition</strong> and <strong>Sfumato</strong> (smoky shading).</p>",
    mission: "Shade a sphere using Sfumato.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/250px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"],
    quiz: [{q:"Master?", opts:["Leonardo","Van Gogh","Banksy"], ans:0}, {q:"Technique?", opts:["Sfumato","Splatter","Collage"], ans:0}, {q:"Composition?", opts:["Pyramid","Circle","Random"], ans:0}, {q:"Work?", opts:["Mona Lisa","Scream","Sunflowers"], ans:0}, {q:"Goal?", opts:["Harmony","Shock","Speed"], ans:0}]
  },
  {
    id: 13, title: "Mannerism", era: "1520 CE",
    lecture: "<h3>Distortion</h3><p>Elongated bodies, strange colors, and unbalanced compositions to create tension.</p>",
    mission: "Draw a figure with a very long neck.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Parmigianino_-_Madonna_dal_collo_lungo_-_Google_Art_Project.jpg/250px-Parmigianino_-_Madonna_dal_collo_lungo_-_Google_Art_Project.jpg"],
    quiz: [{q:"Style?", opts:["Distorted","Perfect","Simple"], ans:0}, {q:"Colors?", opts:["Acidic","Natural","Black"], ans:0}, {q:"Why?", opts:["Break Rules","Mistake","Lazy"], ans:0}, {q:"Composition?", opts:["Unbalanced","Stable","Empty"], ans:0}, {q:"Feeling?", opts:["Tension","Calm","Happy"], ans:0}]
  },
  {
    id: 14, title: "Baroque", era: "1600 CE",
    lecture: "<h3>Drama</h3><p><strong>Chiaroscuro</strong> (extreme light/dark). Frozen action and high emotion. (Caravaggio, Bernini).</p>",
    mission: "Draw a scene lit by a single candle.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/The_Calling_of_Saint_Matthew-Caravaggio_%281599-1600%29.jpg/320px-The_Calling_of_Saint_Matthew-Caravaggio_%281599-1600%29.jpg"],
    quiz: [{q:"Light?", opts:["Chiaroscuro","Flat","Bright"], ans:0}, {q:"Mood?", opts:["Dramatic","Boring","Quiet"], ans:0}, {q:"Artist?", opts:["Caravaggio","Monet","Klimt"], ans:0}, {q:"Action?", opts:["Frozen","Still","Sleeping"], ans:0}, {q:"Patron?", opts:["Church","No one","Farmers"], ans:0}]
  },
  {
    id: 15, title: "Rococo", era: "1700 CE",
    lecture: "<h3>Pastel Play</h3><p>Light, fluffy, pastel colors. Focused on the aristocracy, love, and leisure.</p>",
    mission: "Draw a garden using pastels.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/The_Swing_%28Fragonard%29.jpg/250px-The_Swing_%28Fragonard%29.jpg"],
    quiz: [{q:"Colors?", opts:["Pastel","Dark","Neon"], ans:0}, {q:"Subject?", opts:["Aristocrats","War","Religion"], ans:0}, {q:"Mood?", opts:["Light","Heavy","Sad"], ans:0}, {q:"Location?", opts:["France","China","Egypt"], ans:0}, {q:"Ended by?", opts:["Revolution","Plague","Nothing"], ans:0}]
  },
  {
    id: 16, title: "Neoclassicism", era: "1750 CE",
    lecture: "<h3>Logic Returns</h3><p>Looked back to Rome/Greece for patriotism and seriousness. Clean lines.</p>",
    mission: "Draw a hero in a strong pose.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/320px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg"],
    quiz: [{q:"Inspiration?", opts:["Rome","Fantasy","Nature"], ans:0}, {q:"Values?", opts:["Duty","Fun","Money"], ans:0}, {q:"Lines?", opts:["Clean","Blurry","Messy"], ans:0}, {q:"Artist?", opts:["David","Pollock","Miro"], ans:0}, {q:"Context?", opts:["Revolution","Peace","Party"], ans:0}]
  },
  {
    id: 17, title: "Romanticism", era: "1800 CE",
    lecture: "<h3>Emotion</h3><p>Power of nature, nightmares, and intense feeling. (Goya, Turner).</p>",
    mission: "Draw a stormy sea.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Caspar_David_Friedrich_032.jpg/320px-Caspar_David_Friedrich_032.jpg"],
    quiz: [{q:"Focus?", opts:["Emotion","Logic","Math"], ans:0}, {q:"Nature?", opts:["Powerful","Tamed","Small"], ans:0}, {q:"Subject?", opts:["Nightmares","Picnics","Fruit"], ans:0}, {q:"Artist?", opts:["Goya","Raphael","Warhol"], ans:0}, {q:"Reaction to?", opts:["Industry","Farming","Nothing"], ans:0}]
  },
  {
    id: 18, title: "Realism", era: "1850 CE",
    lecture: "<h3>The Truth</h3><p>Painted only what could be seen. Peasants and laborers, no angels.</p>",
    mission: "Draw your messy desk exactly as it is.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Gustave_Courbet_-_Le_D%C3%A9sespoir_%281843-1845%29.jpg/320px-Gustave_Courbet_-_Le_D%C3%A9sespoir_%281843-1845%29.jpg"],
    quiz: [{q:"Subject?", opts:["Real Life","Myths","Kings"], ans:0}, {q:"Rule?", opts:["Only seen","Pretty","Angels"], ans:0}, {q:"Artist?", opts:["Courbet","Dali","Michelangelo"], ans:0}, {q:"Colors?", opts:["Earthy","Neon","Gold"], ans:0}, {q:"Politics?", opts:["Common Man","Royalist","None"], ans:0}]
  },
  {
    id: 19, title: "Impressionism", era: "1870 CE",
    lecture: "<h3>Capturing Light</h3><p>Painted outdoors (En Plein Air). Quick brushstrokes to capture fleeting moments.</p>",
    mission: "Paint a tree using only dabs of color.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/320px-Monet_-_Impression%2C_Sunrise.jpg"],
    quiz: [{q:"Location?", opts:["Outdoors","Studio","Church"], ans:0}, {q:"Technique?", opts:["Dabs","Blending","Outlines"], ans:0}, {q:"Artist?", opts:["Monet","Da Vinci","Goya"], ans:0}, {q:"Subject?", opts:["Light","War","Death"], ans:0}, {q:"Critics?", opts:["Hated it","Loved it","Ignored"], ans:0}]
  },
  {
    id: 20, title: "Modern Art", era: "1945",
    lecture: "<h3>Shattering Reality</h3><p><strong>Cubism</strong> broke objects. <strong>Surrealism</strong> explored dreams. Art expressed the mind, not the eye.</p>",
    mission: "Draw a face with features in the wrong places.",
    images: ["https://upload.wikimedia.org/wikipedia/en/7/74/Picasso_Guernica.jpg"],
    quiz: [{q:"Cubism?", opts:["Shattered","Real","Soft"], ans:0}, {q:"Surrealism?", opts:["Dreams","History","Math"], ans:0}, {q:"Artist?", opts:["Picasso","Monet","Giotto"], ans:0}, {q:"Goal?", opts:["Expression","Copying","Money"], ans:0}, {q:"Event?", opts:["War","Plague","Peace"], ans:0}]
  }
];

// --- LOGIC ---
let state = { name: "", unlocked: 1, completed: [] };
let currentLevelId = null;

function init() {
  const saved = localStorage.getItem(KEY);
  if (saved) {
    state = JSON.parse(saved);
    if (state.name) showMap();
  }
  buildLivingCover();

  document.getElementById('btn-start').onclick = startApp;
  document.getElementById('btn-reset').onclick = resetApp;
  document.getElementById('btn-close').onclick = closeModal;
  document.querySelectorAll('.fei-tab').forEach(btn => btn.onclick = () => switchTab(btn.dataset.tab));

  renderMap();
}

function buildLivingCover() {
  const wall = document.getElementById('fei-art-wall');
  if(!wall) return;
  const imgs = CURRICULUM.flatMap(c => c.images);
  const fill = [...imgs, ...imgs, ...imgs].slice(0, 30);
  wall.innerHTML = fill.map(src => `<img src="${src}" class="fei-wall-img" referrerpolicy="no-referrer">`).join('');
}

function startApp() {
  const name = document.getElementById('reg-name').value;
  if (!name) return alert("Please enter your name.");
  
  // 1. SAVE LOCAL
  state.name = name;
  saveState();

  // 2. SEND TO TEACHER (FORMSPREE)
  if (TEACHER_ENDPOINT && TEACHER_ENDPOINT.includes("formspree")) {
      const btn = document.getElementById('btn-start');
      const original = btn.innerText;
      btn.innerText = "ENTERING...";
      fetch(TEACHER_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ student: name, date: new Date().toLocaleDateString() })
      }).then(() => {
          showMap();
      }).catch(() => {
          showMap(); // Enter anyway if error
      });
  } else {
      showMap();
  }
}

function showMap() {
  document.getElementById('fei-cover').classList.add('fei-hidden');
  document.getElementById('fei-map-view').classList.remove('fei-hidden');
  document.getElementById('display-name').innerText = state.name;
  renderMap();
}

function saveState() { localStorage.setItem(KEY, JSON.stringify(state)); }
function resetApp() { if (confirm("Reset History?")) { localStorage.removeItem(KEY); location.reload(); } }

function renderMap() {
  const container = document.getElementById('map-container');
  if(!container) return;
  Array.from(container.querySelectorAll('.fei-node-row')).forEach(r => r.remove());
  document.getElementById('progress-display').innerText = `${state.completed.length}/20 Credits`;

  CURRICULUM.forEach((level) => {
    const row = document.createElement('div');
    row.className = 'fei-node-row';
    const card = document.createElement('div');
    card.className = 'fei-node-card';

    const isUnlocked = level.id <= state.unlocked;
    const isDone = state.completed.includes(level.id);

    if (isDone) card.classList.add('completed');
    else if (isUnlocked) card.classList.add('unlocked');
    else card.classList.add('locked');

    card.innerHTML = `<div class="fei-node-num">${level.id}</div><h4>${level.title}</h4><p>${level.era}</p>`;
    card.onclick = () => { if (isUnlocked) openLevel(level); };
    row.appendChild(card);
    container.appendChild(row);
  });
  setTimeout(drawPath, 200);
}

function drawPath() {
  const svg = document.getElementById('path-svg');
  if(!svg) return;
  const cards = document.querySelectorAll('.fei-node-card');
  const container = document.getElementById('map-container');
  const cRect = container.getBoundingClientRect();
  let d = "";
  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) - cRect.left;
    const y = (rect.top + rect.height / 2) - cRect.top;
    if (i === 0) d += `M ${x} ${y}`; else d += ` L ${x} ${y}`;
  });
  svg.innerHTML = `<path d="${d}" stroke="#000" stroke-width="1" stroke-dasharray="4,4" fill="none" opacity="0.2" />`;
}

function openLevel(data) {
  currentLevelId = data.id;
  document.getElementById('fei-modal').classList.remove('fei-hidden');
  switchTab('study');

  document.getElementById('m-title').innerText = data.title;
  document.getElementById('m-era').innerText = data.era;
  document.getElementById('m-lecture-content').innerHTML = data.lecture;
  document.getElementById('m-mission-text').innerText = data.mission;

  const gallery = document.getElementById('m-images');
  gallery.innerHTML = (data.images || []).map(src => `<div class="fei-img-box"><img src="${src}" referrerpolicy="no-referrer"></div>`).join('');

  const qList = document.getElementById('m-quiz-list');
  qList.innerHTML = '';
  document.getElementById('m-feedback').innerText = '';

  data.quiz.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'fei-quiz-item';
    div.innerHTML = `<p>${i + 1}. ${q.q}</p>`;
    q.opts.forEach((opt, oIdx) => {
      const btn = document.createElement('button');
      btn.className = 'fei-quiz-opt';
      btn.innerText = opt;
      btn.dataset.idx = oIdx;
      btn.onclick = (e) => {
        div.querySelectorAll('.fei-quiz-opt').forEach(b => b.classList.remove('selected'));
        e.target.classList.add('selected');
      };
      div.appendChild(btn);
    });
    qList.appendChild(div);
  });
}

function switchTab(tabName) {
  document.querySelectorAll('.fei-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.fei-view').forEach(v => v.classList.remove('active'));
  document.querySelector(`.fei-tab[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');
}

function closeModal() { document.getElementById('fei-modal').classList.add('fei-hidden'); }

document.getElementById('btn-submit').onclick = () => {
  const data = CURRICULUM.find(l => l.id === currentLevelId);
  const items = document.querySelectorAll('.fei-quiz-item');
  let correct = 0, answered = 0;

  items.forEach((item, i) => {
    const selected = item.querySelector('.selected');
    if (selected) {
      answered++;
      if (parseInt(selected.dataset.idx) === data.quiz[i].ans) {
        correct++; selected.classList.add('correct');
      } else { selected.classList.add('wrong'); }
    }
  });

  if (answered < data.quiz.length) return alert("Answer all questions.");
  const fb = document.getElementById('m-feedback');

  if (correct >= 4) {
    fb.innerHTML = `<div style="background:#E8F8F5; color:#27AE60; padding:15px; border-radius:6px; margin-top:20px; font-weight:bold;">Passed! Credit Earned.</div>`;
    if (!state.completed.includes(currentLevelId)) {
      state.completed.push(currentLevelId);
      if (state.unlocked === currentLevelId && state.unlocked < 20) state.unlocked++;
      saveState(); renderMap(); setTimeout(closeModal, 2500);
    }
  } else {
    fb.innerHTML = `<div style="background:#FDEDEC; color:#C0392B; padding:15px; border-radius:6px; margin-top:20px; font-weight:bold;">Score: ${correct}/${data.quiz.length}. Try again.</div>`;
  }
};

// Initialize
init();
