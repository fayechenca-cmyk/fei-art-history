/* app.js — FEI Art History Journey (Wheel + Tracks, stable, Webflow-friendly)
   - loads tracks from window.FEI_ART_HISTORY_TRACKS (curriculum.js)
   - injects all HTML into #fei-art-history
   - shows ALL lesson themes at once (wheel map, no scroll)
   - saves per-track progress in localStorage
*/
(function () {
  "use strict";

  const ROOT_ID = "fei-art-history";
  const KEY_BASE = "fei_art_history_fresh_2026";
  const KEY_NAME = KEY_BASE + ":name";
  const KEY_TRACK = KEY_BASE + ":track";
  const PASS_SCORE = 4;

  const root = document.getElementById(ROOT_ID);
  if (!root) return;

  if (root.dataset.feiInit === "1") return;
  root.dataset.feiInit = "1";

  // ----- tracks
  const TRACKS =
    (window.FEI_ART_HISTORY_TRACKS && typeof window.FEI_ART_HISTORY_TRACKS === "object")
      ? window.FEI_ART_HISTORY_TRACKS
      : null;

  const trackIds = TRACKS ? Object.keys(TRACKS) : [];
  const defaultTrackId = TRACKS ? (trackIds.includes("western") ? "western" : trackIds[0]) : "default";

  let currentTrackId = localStorage.getItem(KEY_TRACK) || defaultTrackId;

  function stateKeyFor(trackId) { return KEY_BASE + ":" + trackId; }

  function getCurriculumFor(trackId) {
    if (TRACKS && TRACKS[trackId] && Array.isArray(TRACKS[trackId].lessons)) return TRACKS[trackId].lessons;
    // fallback old single mode
    if (Array.isArray(window.FEI_ART_HISTORY_CURRICULUM)) return window.FEI_ART_HISTORY_CURRICULUM;
    return [];
  }

  let CURRICULUM = getCurriculumFor(currentTrackId);
  const total = () => (CURRICULUM.length || 20);

  const trackLabel = (tid) => (TRACKS && TRACKS[tid] && TRACKS[tid].label) ? TRACKS[tid].label : (tid === "china" ? "Chinese Art History" : "Western Art History");
  const trackDesc  = (tid) => (TRACKS && TRACKS[tid] && TRACKS[tid].desc) ? TRACKS[tid].desc : "";

  // ----- state
  let state = { name: "", unlocked: 1, completed: [] };
  let currentLevelId = null;

  function saveName(name){ localStorage.setItem(KEY_NAME, name); }
  function loadName(){ const n = localStorage.getItem(KEY_NAME); return typeof n === "string" ? n : ""; }

  function saveState() {
    localStorage.setItem(stateKeyFor(currentTrackId), JSON.stringify(state));
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(stateKeyFor(currentTrackId));
      const parsed = raw ? JSON.parse(raw) : null;
      const savedName = loadName();

      state = {
        name: (parsed && typeof parsed.name === "string" && parsed.name) || savedName || "",
        unlocked: Math.max(1, Math.min(total(), Number(parsed && parsed.unlocked) || 1)),
        completed: Array.isArray(parsed && parsed.completed)
          ? parsed.completed.map(Number).filter(Number.isFinite).filter(n => n >= 1 && n <= total())
          : [],
      };
    } catch (e) {
      state = { name: loadName() || "", unlocked: 1, completed: [] };
    }
  }

  function resetApp() {
    if (!confirm("Reset your Art History Journey?")) return;
    localStorage.removeItem(KEY_NAME);
    localStorage.removeItem(KEY_TRACK);
    if (TRACKS && trackIds.length) trackIds.forEach(tid => localStorage.removeItem(stateKeyFor(tid)));
    else localStorage.removeItem(stateKeyFor(currentTrackId));
    location.reload();
  }

  // ----- HTML (injected)
  root.innerHTML = `
  <div id="fei-art-system">
    <div id="fei-cover" class="fei-fullscreen">
      <div class="fei-login-card">
        <div class="fei-brand-tag">LFC CLASSICS</div>
        <h1>Art History Journey</h1>
        <p id="fei-subtitle">Choose a track, then enter.</p>

        <div id="fei-track-box">
          <div class="fei-track-grid">
            <button type="button" class="fei-track-card fei-track-btn" data-track="western">
              <div class="t">Western Art History</div>
              <div class="s">Prehistoric → Contemporary</div>
            </button>
            <button type="button" class="fei-track-card fei-track-btn" data-track="china">
              <div class="t">Chinese Art History</div>
              <div class="s">Ritual → Ink → Contemporary</div>
            </button>
          </div>
          <div class="fei-track-hint" id="fei-track-hint"></div>
        </div>

        <div class="fei-login-form">
          <label>Student Name</label>
          <input type="text" id="reg-name" placeholder="Enter name...">
          <button id="btn-start" class="fei-btn-black">ENTER CLASSROOM</button>
        </div>
      </div>
    </div>

    <div id="fei-map-view" class="fei-hidden">
      <div class="fei-header">
        <div class="fei-user-badge">
          <div class="fei-avatar">LFC</div>
          <div class="fei-user-text">
            <span id="display-name">Student</span>
            <span class="fei-progress-pill" id="progress-display">0/${total()} Credits</span>
          </div>
        </div>
        <button id="btn-reset" class="fei-link-reset">Reset</button>
      </div>

      <div class="fei-map-scroll">
        <div class="fei-path-container">
          <div id="map-container">
            <svg id="path-svg"></svg>
          </div>
        </div>
      </div>
    </div>

    <div id="fei-modal" class="fei-overlay fei-hidden">
      <div class="fei-modal-window">
        <button class="fei-close" id="btn-close" aria-label="Close">×</button>
        <div class="fei-modal-top">
          <div class="fei-era-tag" id="m-era">ERA</div>
          <h2 id="m-title">Title</h2>
        </div>

        <div class="fei-tabs">
          <button class="fei-tab active" data-tab="study">Lecture</button>
          <button class="fei-tab" data-tab="gallery">Gallery & Sources</button>
          <button class="fei-tab" data-tab="think">Studio & Thought</button>
          <button class="fei-tab" data-tab="quiz">Challenge</button>
        </div>

        <div class="fei-tab-body">
          <div id="tab-study" class="fei-view active">
            <div class="fei-notebook">
              <div class="fei-video-container" id="m-video-box"></div>
              <div id="m-lecture-content"></div>
            </div>
          </div>

          <div id="tab-gallery" class="fei-view">
            <div class="fei-gallery-grid" id="m-images"></div>
            <h3 class="fei-sub-heading">Academic Resources</h3>
            <div id="m-resources" class="fei-resource-list"></div>
          </div>

          <div id="tab-think" class="fei-view">
            <div class="fei-think-box">
              <h3>🧠 Critical Thinking</h3>
              <p id="m-critical-text"></p>
            </div>
            <div class="fei-mission-paper">
              <h3>🎨 Practical Studio</h3>
              <p id="m-mission-text"></p>
            </div>
          </div>

          <div id="tab-quiz" class="fei-view">
            <div class="fei-quiz-intro">Pass 4/5 to earn credit.</div>
            <div id="m-quiz-list"></div>
            <button id="btn-submit" class="fei-btn-black full">SUBMIT ANSWERS</button>
            <div id="m-feedback"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  const $ = (sel) => root.querySelector(sel);
  const $$ = (sel) => Array.from(root.querySelectorAll(sel));

  function updateTrackUI(){
    const box = $("#fei-track-box");
    if (!box) return;

    // 如果没提供 TRACKS，就隐藏目录（兼容旧模式）
    if (!TRACKS || trackIds.length < 2){
      box.style.display = "none";
      return;
    }

    // 更新按钮文字
    $$(".fei-track-btn").forEach(btn => {
      const tid = btn.dataset.track;
      const t = btn.querySelector(".t");
      const s = btn.querySelector(".s");
      if (t) t.textContent = trackLabel(tid);
      if (s) s.textContent = trackDesc(tid) || (tid === "china" ? "Ritual → Ink → Contemporary" : "Prehistoric → Contemporary");

      btn.classList.toggle("selected", tid === currentTrackId);
    });

    const hint = $("#fei-track-hint");
    if (hint) hint.textContent = `Selected: ${trackLabel(currentTrackId)}`;
  }

  function setTrack(tid){
    if (TRACKS && !TRACKS[tid]) return;
    currentTrackId = tid;
    localStorage.setItem(KEY_TRACK, tid);
    CURRICULUM = getCurriculumFor(currentTrackId);
    loadState();
    updateTrackUI();
  }

  function showMap() {
    $("#fei-cover").classList.add("fei-hidden");
    $("#fei-map-view").classList.remove("fei-hidden");
    $("#display-name").textContent = state.name || "Student";
    renderMap();
  }

  function startApp() {
    const name = ($("#reg-name").value || "").trim();
    if (!name) return alert("Please enter your name.");
    state.name = name;
    saveName(name);
    saveState();
    showMap();
  }

  // ------- WHEEL MAP (no scroll)
  function ringPlan(n){
    if (n <= 20) return [n];
    if (n <= 36) return [20, n - 20];
    // 如果你未来疯到 50+，也能撑一下：三环
    return [20, 16, n - 36];
  }

  function renderMap() {
    const container = $("#map-container");
    const svg = $("#path-svg");

    // 清空旧节点/中心块（保留 svg）
    container.querySelectorAll(".fei-wheel-node, .fei-wheel-center").forEach(el => el.remove());
    svg.innerHTML = "";

    $("#progress-display").textContent = `${state.completed.length}/${total()} Credits`;

    if (!CURRICULUM.length) {
      const c = document.createElement("div");
      c.className = "fei-wheel-center";
      c.innerHTML = `
        <div class="title">Curriculum Not Loaded</div>
        <p class="sub">Please check curriculum.js</p>
        <div class="pill">0/0</div>
      `;
      container.appendChild(c);
      return;
    }

    // center card
    const center = document.createElement("div");
    center.className = "fei-wheel-center";
    center.innerHTML = `
      <div class="title">${trackLabel(currentTrackId)}</div>
      <p class="sub">${trackDesc(currentTrackId) || ""}</p>
      <div class="pill">${state.completed.length}/${total()} Credits</div>
    `;
    container.appendChild(center);

    // layout geometry
    const rect = container.getBoundingClientRect();
    const w = rect.width || 900;
    const h = rect.height || 650;
    const cx = w / 2;
    const cy = h / 2;

    const plan = ringPlan(total());
    const radii = [];

    // outer ring radius
    const outer = Math.min(w, h) * 0.38;
    radii.push(outer);

    if (plan.length >= 2) radii.push(Math.min(w, h) * 0.26);
    if (plan.length >= 3) radii.push(Math.min(w, h) * 0.18);

    // draw ring guides
    radii.forEach((r) => {
      svg.innerHTML += `<circle cx="${cx}" cy="${cy}" r="${r}" stroke="#000" stroke-width="1" stroke-dasharray="4,4" fill="none" opacity="0.10" />`;
    });

    // place nodes
    let idx = 0;
    plan.forEach((count, ringIdx) => {
      const r = radii[ringIdx] || radii[0];
      const startAngle = -90; // start at top

      for (let i = 0; i < count; i++) {
        const lesson = CURRICULUM[idx];
        if (!lesson) break;

        const angle = (startAngle + (360 / count) * i) * (Math.PI / 180);
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);

        const node = document.createElement("div");
        node.className = `fei-wheel-node ring-${ringIdx + 1}`;

        const isUnlocked = lesson.id <= state.unlocked;
        const isDone = state.completed.includes(lesson.id);

        if (isDone) node.classList.add("completed");
        else if (isUnlocked) node.classList.add("unlocked");
        else node.classList.add("locked");

        node.style.left = x + "px";
        node.style.top = y + "px";

        node.innerHTML = `
          <div class="fei-node-num">${lesson.id}</div>
          <h4>${lesson.title || ""}</h4>
          <p>${lesson.era || ""}</p>
        `;

        node.addEventListener("click", () => {
          if (!isUnlocked) return;
          openLevel(lesson);
        });

        container.appendChild(node);
        idx++;
      }
    });
  }

  // ------- modal / tabs (keep your logic)
  function switchTab(tabName) {
    $$(".fei-tab").forEach((t) => t.classList.remove("active"));
    $$(".fei-view").forEach((v) => v.classList.remove("active"));
    root.querySelector(`.fei-tab[data-tab="${tabName}"]`)?.classList.add("active");
    $(`#tab-${tabName}`)?.classList.add("active");
  }

  function closeModal() {
    $("#fei-modal").classList.add("fei-hidden");
    $("#m-video-box").innerHTML = "";
    $("#m-feedback").innerHTML = "";
  }

  function openLevel(level) {
    currentLevelId = level.id;
    $("#fei-modal").classList.remove("fei-hidden");
    switchTab("study");

    $("#m-title").textContent = level.title || "";
    $("#m-era").textContent = level.era || "";

    const videoBox = $("#m-video-box");
    if (level.videoUrl) {
      videoBox.innerHTML = `
        <iframe width="100%" height="100%"
          src="${level.videoUrl}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="border-radius:10px;"></iframe>`;
      videoBox.style.display = "block";
    } else {
      videoBox.innerHTML = "";
      videoBox.style.display = "none";
    }

    $("#m-lecture-content").innerHTML = level.lecture || "";

    $("#m-images").innerHTML = (level.images || [])
      .map((src) => `<div class="fei-img-box">
        <img src="${src}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.opacity='0.2';" />
      </div>`).join("");

    $("#m-resources").innerHTML = (level.resources || [])
      .map((r) => `<a href="${r.url}" target="_blank" rel="noopener" class="fei-resource-link">📚 ${r.name} ➔</a>`)
      .join("");

    $("#m-critical-text").textContent = level.criticalThinking || "";
    $("#m-mission-text").innerHTML = level.mission || "";
    renderQuiz(level);
  }

  function renderQuiz(level) {
    const qList = $("#m-quiz-list");
    qList.innerHTML = "";
    $("#m-feedback").innerHTML = "";

    (level.quiz || []).forEach((q, i) => {
      const item = document.createElement("div");
      item.className = "fei-quiz-item";
      item.innerHTML = `<p>${i + 1}. ${q.q}</p>`;

      q.opts.forEach((opt, oIdx) => {
        const btn = document.createElement("button");
        btn.className = "fei-quiz-opt";
        btn.textContent = opt;
        btn.dataset.idx = String(oIdx);
        btn.addEventListener("click", () => {
          item.querySelectorAll(".fei-quiz-opt").forEach((b) => b.classList.remove("selected"));
          btn.classList.add("selected");
        });
        item.appendChild(btn);
      });

      qList.appendChild(item);
    });
  }

  function handleSubmit() {
    const level = CURRICULUM.find((l) => l.id === currentLevelId);
    if (!level) return;

    const items = $$(".fei-quiz-item");
    let correct = 0;
    let answered = 0;

    items.forEach((item, i) => {
      const selected = item.querySelector(".selected");
      if (!selected) return;
      answered++;

      const picked = Number(selected.dataset.idx);
      if (picked === level.quiz[i].ans) {
        correct++;
        selected.classList.add("correct");
      } else {
        selected.classList.add("wrong");
      }
    });

    if (answered < (level.quiz || []).length) return alert("Please answer all questions.");

    const fb = $("#m-feedback");
    if (correct >= PASS_SCORE) {
      fb.innerHTML = `<div style="background:#E8F8F5; color:#27AE60; padding:15px; border-radius:10px; margin-top:20px; font-weight:900;">Passed! Credit Earned.</div>`;

      if (!state.completed.includes(currentLevelId)) {
        state.completed.push(currentLevelId);
        state.unlocked = Math.max(state.unlocked, Math.min(total(), currentLevelId + 1));
        saveState();
        renderMap();
        setTimeout(closeModal, 700);
      }
    } else {
      fb.innerHTML = `<div style="background:#FDEDEC; color:#C0392B; padding:15px; border-radius:10px; margin-top:20px; font-weight:900;">Score: ${correct}/${(level.quiz || []).length}. Try again.</div>`;
    }
  }

  function bind() {
    $("#btn-start").addEventListener("click", startApp);
    $("#btn-reset").addEventListener("click", resetApp);
    $("#btn-close").addEventListener("click", closeModal);
    $("#btn-submit").addEventListener("click", handleSubmit);
    $$(".fei-tab").forEach((btn) => btn.addEventListener("click", () => switchTab(btn.dataset.tab)));

    // Track selection
    $$(".fei-track-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!TRACKS) return;
        setTrack(btn.dataset.track);
      });
    });

    // click outside modal
    $("#fei-modal").addEventListener("click", (e) => {
      if (e.target === $("#fei-modal")) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const overlay = $("#fei-modal");
        if (!overlay.classList.contains("fei-hidden")) closeModal();
      }
    });

    window.addEventListener("resize", () => setTimeout(renderMap, 120));
  }

  // ----- init
  loadState();
  updateTrackUI();

  const savedName = loadName();
  const nameInput = $("#reg-name");
  if (nameInput && savedName && !nameInput.value) nameInput.value = savedName;

  bind();

  // 如果用户之前选过 track 且有名字，就直接进地图
  const hasTrackSelection = !!localStorage.getItem(KEY_TRACK);
  if (state.name && (!TRACKS || hasTrackSelection)) showMap();
  else renderMap(); // 预渲染一次（不进地图也没事）
})();
