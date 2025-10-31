// Datos para cada modal
const modalData = {
    'wifi-room': {
        icon: '📶',
        title: 'El Corazón del Castillo: Tu Wi-Fi',
        content: {
            adultos: `
                <p class="mb-4">Tu red Wi-Fi es la puerta principal de tu hogar digital. Asegúrala correctamente.</p>
                <div class="tip tip-green">
                    <span class="tip-icon">🔑</span>
                    <div><strong>Crea una contraseña robusta:</strong> Usa una combinación de letras (mayúsculas y minúsculas), números y símbolos. Evita usar información personal.</div>
                </div>
                <div class="tip tip-green">
                   <span class="tip-icon">🌐</span>
                    <div><strong>Crea una red para invitados:</strong> Si tu router lo permite, activa una red separada para las visitas. Así, sus dispositivos no tendrán acceso a tu red principal.</div>
                </div>
                <div class="tip tip-yellow">
                    <span class="tip-icon">🔄</span>
                    <div><strong>Mantén el router actualizado:</strong> Revisa periódicamente si hay actualizaciones de firmware. Estas corrigen fallos de seguridad.</div>
                </div>
            `,
            adolescentes: `
                <p class="mb-4">Piensa en la clave del Wi-Fi como la contraseña de tu cuenta de streaming. ¡No querrías que cualquiera entrara!</p>
                <div class="tip tip-green">
                    <span class="tip-icon">🎮</span>
                    <div><strong>Wi-Fi lento = Lag en el juego.</strong> Una red segura evita que vecinos se conecten y te roben ancho de banda. ¡Protege tu conexión para ganar!</div>
                </div>
                <div class="tip tip-red">
                    <span class="tip-icon">🚫</span>
                    <div><strong>Nunca compartas la clave en redes sociales</strong> o con gente que no sea de total confianza.</div>
                </div>
            `,
            ninos: `
                <p class="mb-4">¡La clave del Wi-Fi es como el conjuro mágico que protege nuestro castillo!</p>
                <div class="tip tip-green">
                    <span class="tip-icon">✨</span>
                    <div>Solo los magos buenos (la familia) deben saber el conjuro. ¡No se lo cuentes a los extraños!</div>
                </div>
                <div class="tip tip-yellow">
                    <span class="tip-icon">🤖</span>
                    <div>Si un juguete nuevo te pide la clave, pídele ayuda a un adulto para asegurarte de que sea seguro.</div>
                </div>
            `,
            mayores: `
                <p class="mb-4">La contraseña del Wi-Fi es la llave de su casa. Es importante guardarla bien.</p>
                 <div class="tip tip-green">
                    <span class="tip-icon">📝</span>
                    <div><strong>Anótela en un lugar seguro:</strong> Escriba la contraseña en un papel y guárdelo cerca del router, pero fuera de la vista de extraños.</div>
                </div>
                <div class="tip tip-yellow">
                    <span class="tip-icon">❓</span>
                    <div><strong>Desconfíe de visitas inesperadas:</strong> Si alguien que dice ser "técnico" le pide su contraseña sin que usted lo haya llamado, no se la dé. Consulte con un familiar.</div>
                </div>
            `
        }
    },
    'living-room': {
        icon: '🛋️',
        title: 'La Sala: TV y Altavoces Inteligentes',
        content: {
            adultos: `
                <p class="mb-4">Los televisores y altavoces pueden escuchar y ver. Gestiona sus permisos.</p>
                <div class="tip tip-yellow">
                    <span class="tip-icon">🎤</span>
                    <div><strong>Revisa el micrófono:</strong> Muchos dispositivos tienen un botón físico para apagar el micrófono. Úsalo cuando no necesites el asistente de voz.</div>
                </div>
                <div class="tip tip-green">
                   <span class="tip-icon">⚙️</span>
                    <div><strong>Configura la privacidad:</strong> Explora los menús de configuración de tu Smart TV. Desactiva la recopilación de datos de visualización si te preocupa tu privacidad.</div>
                </div>
                 <div class="tip tip-red">
                    <span class="tip-icon">💸</span>
                    <div><strong>Cuidado con las compras por voz:</strong> Si usas un altavoz inteligente, configura un PIN para autorizar compras y evitar gastos accidentales.</div>
                </div>
            `,
            adolescentes: `
                <p class="mb-4">¿Sabías que tu altavoz puede grabar conversaciones? ¡Controla quién te escucha!</p>
                <div class="tip tip-yellow">
                    <span class="tip-icon">🤫</span>
                    <div>Apaga el micro del altavoz cuando tengas amigos en casa. La privacidad es cool.</div>
                </div>
                <div class="tip tip-green">
                   <span class="tip-icon">📺</span>
                    <div>Cierra sesión en tus apps (Netflix, YouTube) en la TV si la compartes con mucha gente.</div>
                </div>
            `,
            ninos: `
                <p class="mb-4">El altavoz es como un lorito que a veces repite lo que oye. ¡Vamos a enseñarle a estar en silencio!</p>
                <div class="tip tip-yellow">
                    <span class="tip-icon">🔇</span>
                    <div>Busca el botoncito con un micrófono dibujado. ¡Púlsalo para que el "lorito" descanse y no escuche tus secretos!</div>
                </div>
            `,
            mayores: `
                 <p class="mb-4">Estos aparatos son muy útiles, pero es bueno saber cómo funcionan.</p>
                <div class="tip tip-green">
                    <span class="tip-icon">🗣️</span>
                    <div><strong>Pida ayuda para configurar:</strong> Pida a un familiar que le ayude a revisar la configuración inicial para que el dispositivo solo haga lo que usted necesita.</div>
                </div>
                 <div class="tip tip-yellow">
                    <span class="tip-icon">🔘</span>
                    <div><strong>Identifique el botón del micrófono:</strong> Es útil saber cuál es para apagarlo si en algún momento no se siente cómodo.</div>
                </div>
            `
        }
    },
    'kitchen-room': {
        icon: '🍳',
        title: 'La Cocina Inteligente',
        content: {
            adultos: `
                <p class="mb-4">Incluso tu refrigerador o cafetera pueden conectarse a internet. La regla principal es la simplicidad.</p>
                <div class="tip tip-green">
                    <span class="tip-icon">🔌</span>
                    <div><strong>Si no usas la función "smart", no la conectes:</strong> Si no necesitas que tu microondas se conecte al Wi-Fi, simplemente no lo configures en la red.</div>
                </div>
                <div class="tip tip-yellow">
                    <span class="tip-icon">🔒</span>
                    <div><strong>Cambia la contraseña por defecto:</strong> Si conectas un electrodoméstico, asegúrate de cambiar la contraseña que viene de fábrica.</div>
                </div>
            `,
            adolescentes:`<p class="text-center text-gray-600 py-8">Los electrodomésticos de la cocina no suelen ser un gran riesgo para ti, ¡pero los principios de contraseñas seguras se aplican a todo!</p>`,
            ninos: `<p class="text-center text-gray-600 py-8">¡Los aparatos de la cocina son para cocinar, no para jugar en internet! Déjaselos a los adultos. 😉</p>`,
            mayores: `<p class="text-center text-gray-600 py-8">La mayoría de las funciones "inteligentes" de estos aparatos no son necesarias. Es más seguro usarlos de la forma tradicional.</p>`,
        }
    },
    'kids-room': {
        icon: '🧸',
        title: 'El Cuarto de los Niños: Juguetes Conectados',
        content: {
             adultos: `
                <p class="mb-4">Los juguetes con conexión a internet, micrófonos o cámaras pueden ser un riesgo para la privacidad de los más pequeños.</p>
                <div class="tip tip-yellow">
                    <span class="tip-icon">🧐</span>
                    <div><strong>Investiga antes de comprar:</strong> Busca reseñas sobre la seguridad del juguete. ¿Otros padres han reportado problemas?</div>
                </div>
                <div class="tip tip-green">
                   <span class="tip-icon">🔒</span>
                    <div><strong>Usa contraseñas fuertes</strong> para la cuenta asociada al juguete.</div>
                </div>
                 <div class="tip tip-red">
                    <span class="tip-icon">🌙</span>
                    <div><strong>Apaga los juguetes por la noche:</strong> Desconéctalos de la corriente o del Wi-Fi cuando no se estén usando, especialmente en el dormitorio.</div>
                </div>
            `,
            adolescentes:`<p class="text-center text-gray-600 py-8">Si tienes hermanos pequeños, ayúdales a entender que no deben dar información personal (su nombre, colegio, etc.) a sus juguetes que hablan.</p>`,
            ninos: `
                <p class="mb-4">¡Tus juguetes son tus amigos! Pero algunos amigos no saben guardar secretos.</p>
                <div class="tip tip-green">
                    <span class="tip-icon">💬</span>
                    <div>Cuéntale tus aventuras, ¡pero no le digas tu nombre completo o dónde vives!</div>
                </div>
                <div class="tip tip-red">
                   <span class="tip-icon">🔌</span>
                    <div>Cuando te vayas a dormir, ¡pon a dormir a tus juguetes también! Apágalos para que descansen.</div>
                </div>
            `,
            mayores: `
                <p class="mb-4">Al regalar un juguete moderno a sus nietos, es bueno tener en cuenta un par de cosas.</p>
                <div class="tip tip-yellow">
                    <span class="tip-icon">🎁</span>
                    <div><strong>Pregunte a los padres:</strong> Antes de comprar un juguete con conexión a internet, es buena idea consultar con los padres si se sienten cómodos con él.</div>
                </div>
                <div class="tip tip-green">
                   <span class="tip-icon">👨‍👩‍👧</span>
                    <div><strong>La seguridad es un buen regalo:</strong> Ayude a configurar el juguete de forma segura junto a los padres y el niño. Es una buena actividad familiar.</div>
                </div>
            `,
        }
    },
    'security-room': {
        icon: '📷',
        title: 'La Torre de Vigilancia: Cámaras de Seguridad',
        content: {
             adultos: `
                <p class="mb-4">Las cámaras nos dan seguridad, pero si no están bien configuradas, pueden ser una ventana para extraños.</p>
                <div class="tip tip-red">
                    <span class="tip-icon">🔑</span>
                    <div><strong>OBLIGATORIO cambiar la contraseña:</strong> Las contraseñas por defecto de las cámaras de seguridad son conocidas y fáciles de encontrar en internet. ¡Es el paso más importante!</div>
                </div>
                <div class="tip tip-green">
                   <span class="tip-icon">🛡️</span>
                    <div><strong>Activa la autenticación de dos factores (2FA):</strong> Si la app de la cámara lo ofrece, actívala. Añade una capa extra de seguridad.</div>
                </div>
                 <div class="tip tip-yellow">
                    <span class="tip-icon">📍</span>
                    <div><strong>Colocación estratégica:</strong> Instala las cámaras para que vigilen el exterior o los accesos, evitando apuntar a zonas privadas como dormitorios o baños.</div>
                </div>
            `,
            adolescentes:`<p class="text-center text-gray-600 py-8">La seguridad de las cámaras es cosa de adultos, pero si ves algo raro en la red o un dispositivo se comporta de forma extraña, avísales.</p>`,
            ninos: `<p class="text-center text-gray-600 py-8">Las cámaras son para ver quién llama a la puerta, ¡como la mirilla mágica del castillo! Son los guardianes de la casa.</p>`,
            mayores: `
                <p class="mb-4">Las cámaras pueden darle mucha tranquilidad, pero deben ser su aliado, no un riesgo.</p>
                <div class="tip tip-red">
                    <span class="tip-icon">👨‍🔧</span>
                    <div><strong>Pida ayuda para la instalación:</strong> Es crucial que una persona de confianza le ayude a instalar la cámara y, sobre todo, a cambiar la contraseña inicial por una segura.</div>
                </div>
                <div class="tip tip-yellow">
                   <span class="tip-icon">💡</span>
                    <div><strong>Cubra las cámaras interiores:</strong> Si tiene una cámara dentro de casa (por ejemplo, para ver a una mascota), considere cubrirla con un paño cuando esté en casa y no la necesite.</div>
                </div>
            `,
        }
    },
};

// --- Selectores del DOM ---
const modal = document.getElementById('modal-template');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalTabsContainer = document.getElementById('modal-tabs');
const closeBtn = document.querySelector('.close-btn');

// --- Asignar Eventos ---

// Evento para cada zona del castillo
document.querySelectorAll('.room').forEach(room => {
    room.addEventListener('click', () => {
        const roomData = modalData[room.id];
        if (roomData) {
            openModal(roomData);
        }
    });
});

// Evento para las pestañas (delegación de eventos)
modalTabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
        const tabName = e.target.getAttribute('data-tab');
        activateTab(tabName);
    }
});

// Evento para el botón de cerrar
closeBtn.onclick = () => {
    modal.style.display = 'none';
};

// Evento para cerrar el modal al hacer clic fuera
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// --- Funciones ---

/**
 * Abre y rellena el modal con los datos correspondientes
 * @param {object} data - El objeto de datos para la zona seleccionada
 */
function openModal(data) {
    modalIcon.textContent = data.icon;
    modalTitle.textContent = data.title;
    
    // Limpiar contenido anterior
    modalBody.innerHTML = '';
    
    // Crear contenido para cada pestaña
    for (const tab in data.content) {
        const contentDiv = document.createElement('div');
        contentDiv.id = `content-${tab}`;
        contentDiv.className = 'tab-content';
        contentDiv.innerHTML = data.content[tab];
        modalBody.appendChild(contentDiv);
    }
    
    modal.style.display = 'block';
    
    // Activar la primera pestaña por defecto
    activateTab('adultos');
}

/**
 * Activa la pestaña seleccionada y muestra su contenido
 * @param {string} tabName - El nombre de la pestaña (ej: 'adultos', 'ninos')
 */
function activateTab(tabName) {
    // Manejar botones
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabName) {
            btn.classList.add('active');
        }
    });
    // Manejar contenido
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === `content-${tabName}`) {
            content.classList.add('active');
        }
    });
}
