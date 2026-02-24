// --- CONFIGURATION ---
const KEY = 'fei_art_history_v4'; // New key to clear old local test data

// --- APP LOGIC (THE BRAIN) ---
let state = { name: "", unlocked: 1, completed: [] };
let currentLevelId = null;

function init() {
  const saved = localStorage.getItem(KEY);
  if (saved) { state = JSON.parse(saved); if (state.name) showMap(); }
  document.getElementById('btn-start').onclick = startApp;
  document.getElementById('btn-reset').onclick = resetApp;
  document.getElementById('btn-close').onclick = closeModal;
  document.querySelectorAll('.fei-tab').forEach(btn => btn.onclick = () => switchTab(btn.dataset.tab));
  renderMap();
}

function startApp() {
  const name = document.getElementById('reg-name').value;
  if (!name) return alert("Please enter your name.");
  state.name = name; saveState(); showMap();
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
  
  const videoBox = document.getElementById('m-video-box');
  if(data.videoUrl) {
    videoBox.innerHTML = `<iframe width="100%" height="100%" src="${data.videoUrl}" frameborder="0" allowfullscreen style="border-radius:8px;"></iframe>`;
    videoBox.style.display = "block";
  } else { videoBox.style.display = "none"; }
  
  document.getElementById('m-lecture-content').innerHTML = data.lecture;
  document.getElementById('m-images').innerHTML = (data.images || []).map(src => `<div class="fei-img-box"><img src="${src}" referrerpolicy="no-referrer"></div>`).join('');
  document.getElementById('m-resources').innerHTML = (data.resources || []).map(r => `<a href="${r.url}" target="_blank" class="fei-resource-link">📚 ${r.name} ➔</a>`).join('');
  document.getElementById('m-critical-text').innerText = data.criticalThinking;
  document.getElementById('m-mission-text').innerText = data.mission;

  const qList = document.getElementById('m-quiz-list');
  qList.innerHTML = ''; document.getElementById('m-feedback').innerText = '';
  data.quiz.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'fei-quiz-item';
    div.innerHTML = `<p>${i + 1}. ${q.q}</p>`;
    q.opts.forEach((opt, oIdx) => {
      const btn = document.createElement('button');
      btn.className = 'fei-quiz-opt';
      btn.innerText = opt;
      btn.onclick = (e) => {
        div.querySelectorAll('.fei-quiz-opt').forEach(b => b.classList.remove('selected'));
        e.target.classList.add('selected');
      };
      btn.dataset.idx = oIdx;
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

function closeModal() { document.getElementById('fei-modal').classList.add('fei-hidden'); document.getElementById('m-video-box').innerHTML = ""; }

// Initialization
function handleSubmit() {
  const data = CURRICULUM.find(l => l.id === currentLevelId);
  if (!data) return;

  const items = document.querySelectorAll('.fei-quiz-item');
  let correct = 0, answered = 0;

  items.forEach((item, i) => {
    const selected = item.querySelector('.selected');
    if (selected) {
      answered++;
      const picked = Number(selected.dataset.idx);
      if (picked === data.quiz[i].ans) {
        correct++;
        selected.classList.add('correct');
      } else {
        selected.classList.add('wrong');
      }
    }
  });

  if (answered < data.quiz.length) return alert("Please answer all questions.");

  const fb = document.getElementById('m-feedback');
  if (correct >= 4) {
    fb.innerHTML = `<div style="background:#E8F8F5; color:#27AE60; padding:15px; border-radius:6px; margin-top:20px; font-weight:bold;">Passed! Credit Earned.</div>`;

    if (!state.completed.includes(currentLevelId)) {
      state.completed.push(currentLevelId);

      const total = CURRICULUM.length;
      state.unlocked = Math.max(state.unlocked, Math.min(total, currentLevelId + 1));

      saveState();
      renderMap();
      setTimeout(closeModal, 800);
    }
  } else {
    fb.innerHTML = `<div style="background:#FDEDEC; color:#C0392B; padding:15px; border-radius:6px; margin-top:20px; font-weight:bold;">Score: ${correct}/${data.quiz.length}. Try again.</div>`;
  }
}
function init() {
  const saved = localStorage.getItem(KEY);
  if (saved) { state = JSON.parse(saved); if (state.name) showMap(); }

  document.getElementById('btn-start').onclick = startApp;
  document.getElementById('btn-reset').onclick = resetApp;
  document.getElementById('btn-close').onclick = closeModal;

  const submitBtn = document.getElementById('btn-submit');
  if (submitBtn) submitBtn.onclick = handleSubmit;

  document.querySelectorAll('.fei-tab').forEach(btn => btn.onclick = () => switchTab(btn.dataset.tab));
  renderMap();
};
