/* app.js — FEI Art History Journey (Tracks-enabled, stable, Webflow-friendly)
   - supports Track picker (Western / China) via window.FEI_ART_HISTORY_TRACKS
   - keeps your original UI + modal + map, only adds a tiny catalog on cover
   - saves progress per track (no mixing)
*/
(function () {
  "use strict";

  const ROOT_ID = "fei-art-history";

  // Base storage key (do NOT change unless you want to reset everyone)
  const KEY_BASE = "fei_art_history_fresh_2026";
  const KEY_NAME = KEY_BASE + ":name";
  const KEY_TRACK = KEY_BASE + ":track";
  const PASS_SCORE = 4;

  const root = document.getElementById(ROOT_ID);
  if (!root) return;

  // prevent double init if script injected twice
  if (root.dataset.feiInit === "1") return;
  root.dataset.feiInit = "1";

  // ----- tracks + curriculum source
  const TRACKS =
    (window.FEI_ART_HISTORY_TRACKS && typeof window.FEI_ART_HISTORY_TRACKS === "object")
      ? window.FEI_ART_HISTORY_TRACKS
      : null;

  const trackIds = TRACKS ? Object.keys(TRACKS) : [];

  function getDefaultTrackId() {
    if (TRACKS && trackIds.length) return trackIds.includes("western") ? "western" : trackIds[0];
    return "default";
  }

  let currentTrackId = localStorage.getItem(KEY_TRACK) || getDefaultTrackId();

  function getCurriculumFor(trackId) {
    // New multi-track mode
    if (TRACKS && TRACKS[trackId] && Array.isArray(TRACKS[trackId].lessons)) {
      return TRACKS[trackId].lessons;
    }
    // Fallback old single curriculum mode
    if (Array.isArray(window.FEI_ART_HISTORY_CURRICULUM)) {
      return window.FEI_ART_HISTORY_CURRICULUM;
    }
    return [];
  }

  let CURRICULUM = getCurriculumFor(currentTrackId);

  function total() {
    return CURRICULUM.length || 20;
  }

  function stateKeyFor(trackId) {
    return KEY_BASE + ":" + trackId;
  }

  // ----- state
  let state = { name: "", unlocked: 1, completed: [] };
  let currentLevelId = null;

  function saveName(name) {
    localStorage.setItem(KEY_NAME, name);
  }

  function loadName() {
    const n = localStorage.getItem(KEY_NAME);
    return typeof n === "string" ? n : "";
  }

  function saveState() {
    localStorage.setItem(stateKeyFor(currentTrackId), JSON.stringify(state));
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(stateKeyFor(currentTrackId));
      let parsed = null;
      if (raw) parsed = JSON.parse(raw);

      const savedName = loadName();

      state = {
        name:
          (parsed && typeof parsed.name === "string" && parsed.name) ||
          savedName ||
          "",
        unlocked: Math.max(1, Math.min(total(), Number(parsed && parsed.unlocked) || 1)),
        completed: Array.isArray(parsed && parsed.completed)
          ? parsed.completed
              .map((n) => Number(n))
              .filter(Number.isFinite)
              .filter((n) => n >= 1 && n <= total())
          : [],
      };
    } catch (e) {
      const savedName = loadName();
      state = { name: savedName || "", unlocked: 1, completed: [] };
    }
  }

  function resetApp() {
    if (!confirm("Reset your Art History Journey?")) return;
    // wipe everything (name + track selection + all track states)
    localStorage.removeItem(KEY_NAME);
    localStorage.removeItem(KEY_TRACK);
    if (TRACKS && trackIds.length) {
      trackIds.forEach((tid) => localStorage.removeItem(stateKeyFor(tid)));
    } else {
      localStorage.removeItem(stateKeyFor(currentTrackId));
    }
    location.reload();
  }

  // ----- HTML skeleton (injected)
  // NOTE: we only add a small "Track Picker" block inside the cover card.
  root.innerHTML = `
  <div id="fei-art-system">
    <div id="fei-cover" class="fei-fullscreen">
      <div class="fei-login-card">
        <div class="fei-brand-tag">LFC CLASSICS</div>
        <h1>Art History Journey</h1>
        <p id="fei-subtitle">Reference-First Studio • Pre-1945</p>

        <!-- Track Picker (new, tiny) -->
        <div id="fei-track-box" style="margin:16px 0 10px; text-align:left;">
          <div style="font-size:11px; letter-spacing:2px; color:#666; font-weight:700; margin-bottom:10px;">
            CHOOSE A TRACK
          </div>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <button type="button" class="fei-resource-link fei-track-btn" data-track="western">Western Art History</button>
            <button type="button" class="fei-resource-link fei-track-btn" data-track="china">Chinese Art History</button>
          </div>
          <div id="fei-track-hint" style="margin-top:10px; font-size:11px; color:#666;"></div>
        </div>

        <div class="fei-login-form">
          <label>Student Name</label>
          <input type="text" id="reg-name" placeholder="Enter name...">
          <button id="btn-start" class="fei-btn-black">ENTER CLASSROOM</button>
        </div>

        <style>
          /* small selection highlight, scoped inside this component */
          #${ROOT_ID} .fei-track-btn.fei-track-selected{
            background:#000 !important;
            color:#fff !important;
            border-color:#000 !important;
          }
        </style>
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
        <div class="fei-path-container" id="map-container">
          <svg id="path-svg"></svg>
        </div>
        <div class="fei-footer-spacer"></div>
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

  // ----- helpers scoped inside root
  const $ = (sel) => root.querySelector(sel);
  const $$ = (sel) => Array.from(root.querySelectorAll(sel));

  function trackLabel(tid) {
    if (TRACKS && TRACKS[tid] && TRACKS[tid].label) return TRACKS[tid].label;
    return tid === "western" ? "Western Art History" : tid === "china" ? "Chinese Art History" : "Art History";
  }

  function trackDesc(tid) {
    if (TRACKS && TRACKS[tid] && TRACKS[tid].desc) return TRACKS[tid].desc;
    return "";
  }

  function updateTrackUI() {
    const hint = $("#fei-track-hint");
    const buttons = $$(".fei-track-btn");

    buttons.forEach((b) => {
      b.classList.toggle("fei-track-selected", b.dataset.track === currentTrackId);
      // If labels exist in TRACKS, use them
      const tid = b.dataset.track;
      if (TRACKS && TRACKS[tid] && TRACKS[tid].label) b.textContent = TRACKS[tid].label;
    });

    if (hint) {
      hint.textContent = `Selected: ${trackLabel(currentTrackId)}${trackDesc(currentTrackId) ? " · " + trackDesc(currentTrackId) : ""}`;
    }

    // If no tracks provided, hide the picker entirely
    const box = $("#fei-track-box");
    if (box) {
      const multi = !!(TRACKS && trackIds.length >= 2);
      box.style.display = multi ? "block" : "none";
    }
  }

  function setTrack(tid) {
    if (TRACKS && !TRACKS[tid]) return;
    currentTrackId = tid;
    localStorage.setItem(KEY_TRACK, tid);

    CURRICULUM = getCurriculumFor(currentTrackId);
    loadState(); // load state for this track
    updateTrackUI();

    // Update progress text immediately
    $("#progress-display").textContent = `${state.completed.length}/${total()} Credits`;

    // If already inside map, rerender
    if (!$("#fei-map-view").classList.contains("fei-hidden")) {
      $("#display-name").textContent = state.name || "Student";
      renderMap();
    }
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

  function renderMap() {
    const container = $("#map-container");
    container.querySelectorAll(".fei-node-row").forEach((n) => n.remove());

    $("#progress-display").textContent = `${state.completed.length}/${total()} Credits`;

    if (!CURRICULUM.length) {
      const row = document.createElement("div");
      row.className = "fei-node-row";
      row.innerHTML = `<div class="fei-node-card unlocked">
        <div class="fei-node-num">!</div>
        <h4>Curriculum Not Loaded</h4>
        <p>Please check curriculum.js</p>
      </div>`;
      container.appendChild(row);
      return;
    }

    CURRICULUM.forEach((level) => {
      const row = document.createElement("div");
      row.className = "fei-node-row";

      const card = document.createElement("div");
      card.className = "fei-node-card";

      const isUnlocked = level.id <= state.unlocked;
      const isDone = state.completed.includes(level.id);

      if (isDone) card.classList.add("completed");
      else if (isUnlocked) card.classList.add("unlocked");
      else card.classList.add("locked");

      card.innerHTML = `<div class="fei-node-num">${level.id}</div><h4>${level.title}</h4><p>${level.era}</p>`;
      card.addEventListener("click", () => {
        if (isUnlocked) openLevel(level);
      });

      row.appendChild(card);
      container.appendChild(row);
    });

    setTimeout(drawPath, 120);
  }

  function drawPath() {
    const svg = $("#path-svg");
    const container = $("#map-container");
    const cards = container.querySelectorAll(".fei-node-card");
    if (!cards.length) return;

    const cRect = container.getBoundingClientRect();
    const h = container.scrollHeight || cRect.height;
    svg.setAttribute("height", String(h));
    svg.style.height = h + "px";

    let d = "";
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - cRect.left;
      const y = rect.top + rect.height / 2 - cRect.top + container.scrollTop;
      d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    });

    svg.innerHTML = `<path d="${d}" stroke="#000" stroke-width="1" stroke-dasharray="4,4" fill="none" opacity="0.2" />`;
  }

  function switchTab(tabName) {
    $$(".fei-tab").forEach((t) => t.classList.remove("active"));
    $$(".fei-view").forEach((v) => v.classList.remove("active"));
    root.querySelector(\`.fei-tab[data-tab="\${tabName}"]\`)?.classList.add("active");
    $(\`#tab-\${tabName}\`)?.classList.add("active");
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

    // video
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

    // lecture
    $("#m-lecture-content").innerHTML = level.lecture || "";

    // images
    $("#m-images").innerHTML = (level.images || [])
      .map(
        (src) => `<div class="fei-img-box">
          <img src="${src}" loading="lazy" referrerpolicy="no-referrer"
          onerror="this.style.opacity='0.2';" />
        </div>`
      )
      .join("");

    // resources
    $("#m-resources").innerHTML = (level.resources || [])
      .map(
        (r) =>
          `<a href="${r.url}" target="_blank" rel="noopener" class="fei-resource-link">📚 ${r.name} ➔</a>`
      )
      .join("");

    // critical + mission
    $("#m-critical-text").textContent = level.criticalThinking || "";
    $("#m-mission-text").innerHTML = level.mission || ""; // keeps <strong>
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
      fb.innerHTML = `<div style="background:#E8F8F5; color:#27AE60; padding:15px; border-radius:8px; margin-top:20px; font-weight:bold;">Passed! Credit Earned.</div>`;

      if (!state.completed.includes(currentLevelId)) {
        state.completed.push(currentLevelId);
        state.unlocked = Math.max(state.unlocked, Math.min(total(), currentLevelId + 1));
        saveState();
        renderMap();
        setTimeout(closeModal, 700);
      }
    } else {
      fb.innerHTML = `<div style="background:#FDEDEC; color:#C0392B; padding:15px; border-radius:8px; margin-top:20px; font-weight:bold;">Score: ${correct}/${(level.quiz || []).length}. Try again.</div>`;
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
        const tid = btn.dataset.track;
        // If in single curriculum mode, ignore track switching
        if (!TRACKS) return;
        setTrack(tid);
      });
    });

    // click outside modal to close
    $("#fei-modal").addEventListener("click", (e) => {
      if (e.target === $("#fei-modal")) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const overlay = $("#fei-modal");
        if (!overlay.classList.contains("fei-hidden")) closeModal();
      }
    });

    window.addEventListener("resize", () => setTimeout(drawPath, 120));
    root.querySelector(".fei-map-scroll")?.addEventListener("scroll", () => drawPath(), { passive: true });
  }

  // ----- init
  loadState();

  // preload name into input
  const savedName = loadName();
  const nameInput = $("#reg-name");
  if (nameInput && savedName && !nameInput.value) nameInput.value = savedName;

  // Track UI
  updateTrackUI();

  bind();

  // Only auto-enter map if user has a name AND has previously selected a track (in track mode)
  const hasTrackSelection = !!localStorage.getItem(KEY_TRACK);
  if (state.name && (!TRACKS || hasTrackSelection)) showMap();
  renderMap();
})();
