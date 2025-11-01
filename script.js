// ======= DATOS DEL MODAL (omitido aquí por brevedad) =======

const modal = document.getElementById("modal-template");
const modalIcon = document.getElementById("modal-icon");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalTabsContainer = document.getElementById("modal-tabs");
const closeBtn = document.querySelector(".close-btn");

// 🎵 Mapear sonidos
const sounds = {
  "kids-room": document.getElementById("sound-kids"),
  "security-room": document.getElementById("sound-cameras"),
  "living-room": document.getElementById("sound-living"),
  "kitchen-room": document.getElementById("sound-kitchen"),
  "wifi-room": document.getElementById("sound-wifi"),
  close: document.getElementById("castle-close"),
  ambient: document.getElementById("ambient-sound"),
};

let ambientPlaying = false;

document.querySelectorAll(".room").forEach((room) => {
  room.addEventListener("click", () => {
    const data = modalData[room.id];
    if (data) openModal(data, room.id);
  });
});

function openModal(data, roomId) {
  modalIcon.textContent = data.icon;
  modalTitle.textContent = data.title;
  modalBody.innerHTML = "";

  for (const tab in data.content) {
    const div = document.createElement("div");
    div.id = `content-${tab}`;
    div.className = "tab-content";
    div.innerHTML = data.content[tab];
    modalBody.appendChild(div);
  }

  modal.classList.remove("hide");
  modal.classList.add("show");
  modal.style.display = "block";
  activateTab("adultos");

  // 🎧 Sonido específico
  const sound = sounds[roomId];
  if (sound) {
    sound.currentTime = 0;
    sound.volume = 0.5;
    sound.play().catch(() => {});
  }

  // 🎶 Inicia ambiente si no está activo
  if (!ambientPlaying) {
    const ambient = sounds.ambient;
    ambient.volume = 0;
    ambient.play().then(() => {
      fadeIn(ambient, 0.4, 1500);
      ambientPlaying = true;
      updateSoundBtn("on");
    }).catch(() => {});
  }
}

modalTabsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-btn")) {
    const tab = e.target.getAttribute("data-tab");
    activateTab(tab);
  }
});

function activateTab(tabName) {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
  });
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.toggle("active", content.id === `content-${tabName}`);
  });
}

closeBtn.onclick = () => closeModal();
window.onclick = (e) => {
  if (e.target === modal) closeModal();
};

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");

  const closeSound = sounds.close;
  closeSound.currentTime = 0;
  closeSound.volume = 0.6;
  closeSound.play().catch(() => {});

  const ambient = sounds.ambient;
  fadeOut(ambient, 1000);
  ambientPlaying = false;
  updateSoundBtn("off");

  setTimeout(() => {
    modal.style.display = "none";
  }, 400);
}

// 🎚️ Fade helpers
function fadeIn(audio, targetVolume, duration) {
  let step = targetVolume / (duration / 100);
  let vol = 0;
  let interval = setInterval(() => {
    if (vol < targetVolume) {
      vol += step;
      audio.volume = Math.min(vol, targetVolume);
    } else {
      clearInterval(interval);
    }
  }, 100);
}

function fadeOut(audio, duration) {
  let step = audio.volume / (duration / 100);
  let interval = setInterval(() => {
    if (audio.volume > 0.01) {
      audio.volume -= step;
    } else {
      audio.pause();
      clearInterval(interval);
    }
  }, 100);
}

// 🎚️ Botón ON/OFF
const ambientBtn = document.getElementById("toggle-sound");
const ambient = sounds.ambient;

ambientBtn.addEventListener("click", () => {
  if (ambientPlaying) {
    fadeOut(ambient, 1000);
    ambientPlaying = false;
    updateSoundBtn("off");
  } else {
    ambient.volume = 0;
    ambient.play().then(() => {
      fadeIn(ambient, 0.4, 1500);
      ambientPlaying = true;
      updateSoundBtn("on");
    }).catch(() => {});
  }
});

function updateSoundBtn(state) {
  ambientBtn.textContent = state === "on" ? "Sonido: ON" : "Sonido: OFF";
}

// 🎬 Autoplay tras primer interacción
let userInteracted = false;
document.body.addEventListener("click", () => {
  if (!userInteracted) {
    userInteracted = true;
    if (!ambientPlaying) {
      ambient.volume = 0;
      ambient.play().then(() => {
        fadeIn(ambient, 0.4, 1500);
        ambientPlaying = true;
        updateSoundBtn("on");
      }).catch(() => {});
    }
  }
}, { once: true });
