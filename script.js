// ====== Modal Data ======
const modalData = {
    'wifi-room': {
        icon: '📶',
        title: 'El Corazón del Castillo: Tu Wi-Fi',
        content: {
            adultos: `
                <p class="mb-4">Tu red Wi-Fi es la puerta principal de tu hogar digital. Asegúrala correctamente.</p>
                <div class="tip tip-green"><span class="tip-icon">🔑</span>
                <div><strong>Crea una contraseña robusta:</strong> Usa una combinación de letras, números y símbolos. Evita usar información personal.</div></div>
                <div class="tip tip-green"><span class="tip-icon">🌐</span>
                <div><strong>Crea una red para invitados:</strong> Así tus visitas no acceden a tu red principal.</div></div>
                <div class="tip tip-yellow"><span class="tip-icon">🔄</span>
                <div><strong>Mantén el router actualizado:</strong> Instala actualizaciones de firmware cuando estén disponibles.</div></div>
            `,
            adolescentes: `
                <p class="mb-4">Piensa en la clave del Wi-Fi como la contraseña de tu cuenta de streaming.</p>
                <div class="tip tip-green"><span class="tip-icon">🎮</span>
                <div><strong>Wi-Fi lento = Lag.</strong> Una red segura evita intrusos.</div></div>
                <div class="tip tip-red"><span class="tip-icon">🚫</span>
                <div><strong>No compartas la clave</strong> en redes sociales.</div></div>
            `,
            ninos: `
                <p class="mb-4">¡La clave del Wi-Fi es como un conjuro mágico que protege el castillo!</p>
                <div class="tip tip-green"><span class="tip-icon">✨</span>
                <div>Solo los magos buenos (la familia) deben saberlo.</div></div>
            `,
            mayores: `
                <p class="mb-4">La contraseña del Wi-Fi es la llave de su casa digital.</p>
                <div class="tip tip-green"><span class="tip-icon">📝</span>
                <div><strong>Anótela en un lugar seguro</strong> cerca del router.</div></div>
            `
        }
    },
    // Puedes añadir aquí los demás bloques (living-room, kitchen-room, etc.)
};

// ====== Modal Logic ======
const modal = document.getElementById('modal-template');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalTabsContainer = document.getElementById('modal-tabs');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.room').forEach(room => {
    room.addEventListener('click', () => {
        const data = modalData[room.id];
        if (data) openModal(data);
    });
});

function openModal(data) {
    modalIcon.textContent = data.icon;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = '';

    for (const tab in data.content) {
        const div = document.createElement('div');
        div.id = `content-${tab}`;
        div.className = 'tab-content';
        div.innerHTML = data.content[tab];
        modalBody.appendChild(div);
    }

    modal.style.display = 'block';
    activateTab('adultos');
}

modalTabsContainer.addEventListener('click', e => {
    if (e.target.classList.contains('tab-btn')) {
        const tab = e.target.getAttribute('data-tab');
        activateTab(tab);
    }
});

function activateTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `content-${tabName}`);
    });
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target == modal) modal.style.display = 'none'; };
