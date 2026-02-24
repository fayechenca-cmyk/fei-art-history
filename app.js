/* app.js — FEI Art History Journey (Fresh, stable, Webflow-friendly)
   - loads curriculum from window.FEI_ART_HISTORY_CURRICULUM (curriculum.js)
   - injects all HTML into #fei-art-history (so Webflow embed stays tiny)
   - uses localStorage (fresh key), no old-version headaches
*/
(function () {
  "use strict";

  const ROOT_ID = "fei-art-history";
  const KEY = "fei_art_history_fresh_2026";
  const PASS_SCORE = 4;

  const root = document.getElementById(ROOT_ID);
  if (!root) return;

  // prevent double init if script injected twice
  if (root.dataset.feiInit === "1") return;
  root.dataset.feiInit = "1";

  const CURRICULUM = Array.isArray(window.FEI_ART_HISTORY_CURRICULUM)
    ? window.FEI_ART_HISTORY_CURRICULUM
    : [];

  const TOTAL = CURRICULUM.length || 20;

  // ----- state
  let state = { name: "", unlocked: 1, completed: [] };
  let currentLevelId = null;

  function saveState() {
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      state = {
        name: typeof parsed.name === "string" ? parsed.name : "",
        unlocked: Math.max(1, Number(parsed.unlocked) || 1),
        completed: Array.isArray(parsed.completed)
          ? parsed.completed.map((n) => Number(n)).filter(Number.isFinite)
          : [],
      };
    } catch (e) {
      state = { name: "", unlocked: 1, completed: [] };
    }
  }

  function resetApp() {
    if (!confirm("Reset your Art History Journey?")) return;
    localStorage.removeItem(KEY);
    location.reload();
  }

  // ----- HTML skeleton (injected)
  root.innerHTML = `
  <div id="fei-art-system">
    <div id="fei-cover" class="fei-fullscreen">
      <div class="fei-login-card">
        <div class="fei-brand-tag">LFC CLASSICS</div>
        <h1>Art History Journey</h1>
        <p>Reference-First Studio • Pre-1945</p>
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
            <span class="fei-progress-pill" id="progress-display">0/${TOTAL} Credits</span>
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
    saveState();
    showMap();
  }

  function renderMap() {
    const container = $("#map-container");
    container.querySelectorAll(".fei-node-row").forEach((n) => n.remove());

    $("#progress-display").textContent = `${state.completed.length}/${TOTAL} Credits`;

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
    $("#m-mission-text").innerHTML = level.mission || ""; // important: keeps <strong>
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
        state.unlocked = Math.max(state.unlocked, Math.min(TOTAL, currentLevelId + 1));
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
  bind();
  if (state.name) showMap();
  renderMap();
})();
