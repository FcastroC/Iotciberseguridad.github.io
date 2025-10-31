{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Datos para cada modal\
const modalData = \{\
    'wifi-room': \{\
        icon: '\uc0\u55357 \u56566 ',\
        title: 'El Coraz\'f3n del Castillo: Tu Wi-Fi',\
        content: \{\
            adultos: `\
                <p class="mb-4">Tu red Wi-Fi es la puerta principal de tu hogar digital. Aseg\'farala correctamente.</p>\
                <div class="tip tip-green">\
                    <span class="tip-icon">\uc0\u55357 \u56593 </span>\
                    <div><strong>Crea una contrase\'f1a robusta:</strong> Usa una combinaci\'f3n de letras (may\'fasculas y min\'fasculas), n\'fameros y s\'edmbolos. Evita usar informaci\'f3n personal.</div>\
                </div>\
                <div class="tip tip-green">\
                   <span class="tip-icon">\uc0\u55356 \u57104 </span>\
                    <div><strong>Crea una red para invitados:</strong> Si tu router lo permite, activa una red separada para las visitas. As\'ed, sus dispositivos no tendr\'e1n acceso a tu red principal.</div>\
                </div>\
                <div class="tip tip-yellow">\
                    <span class="tip-icon">\uc0\u55357 \u56580 </span>\
                    <div><strong>Mant\'e9n el router actualizado:</strong> Revisa peri\'f3dicamente si hay actualizaciones de firmware. Estas corrigen fallos de seguridad.</div>\
                </div>\
            `,\
            adolescentes: `\
                <p class="mb-4">Piensa en la clave del Wi-Fi como la contrase\'f1a de tu cuenta de streaming. \'a1No querr\'edas que cualquiera entrara!</p>\
                <div class="tip tip-green">\
                    <span class="tip-icon">\uc0\u55356 \u57262 </span>\
                    <div><strong>Wi-Fi lento = Lag en el juego.</strong> Una red segura evita que vecinos se conecten y te roben ancho de banda. \'a1Protege tu conexi\'f3n para ganar!</div>\
                </div>\
                <div class="tip tip-red">\
                    <span class="tip-icon">\uc0\u55357 \u57003 </span>\
                    <div><strong>Nunca compartas la clave en redes sociales</strong> o con gente que no sea de total confianza.</div>\
                </div>\
            `,\
            ninos: `\
                <p class="mb-4">\'a1La clave del Wi-Fi es como el conjuro m\'e1gico que protege nuestro castillo!</p>\
                <div class="tip tip-green">\
                    <span class="tip-icon">\uc0\u10024 </span>\
                    <div>Solo los magos buenos (la familia) deben saber el conjuro. \'a1No se lo cuentes a los extra\'f1os!</div>\
                </div>\
                <div class="tip tip-yellow">\
                    <span class="tip-icon">\uc0\u55358 \u56598 </span>\
                    <div>Si un juguete nuevo te pide la clave, p\'eddele ayuda a un adulto para asegurarte de que sea seguro.</div>\
                </div>\
            `,\
            mayores: `\
                <p class="mb-4">La contrase\'f1a del Wi-Fi es la llave de su casa. Es importante guardarla bien.</p>\
                 <div class="tip tip-green">\
                    <span class="tip-icon">\uc0\u55357 \u56541 </span>\
                    <div><strong>An\'f3tela en un lugar seguro:</strong> Escriba la contrase\'f1a en un papel y gu\'e1rdelo cerca del router, pero fuera de la vista de extra\'f1os.</div>\
                </div>\
                <div class="tip tip-yellow">\
                    <span class="tip-icon">\uc0\u10067 </span>\
                    <div><strong>Desconf\'ede de visitas inesperadas:</strong> Si alguien que dice ser "t\'e9cnico" le pide su contrase\'f1a sin que usted lo haya llamado, no se la d\'e9. Consulte con un familiar.</div>\
                </div>\
            `\
        \}\
    \},\
    'living-room': \{\
        icon: '\uc0\u55357 \u57035 \u65039 ',\
        title: 'La Sala: TV y Altavoces Inteligentes',\
        content: \{\
            adultos: `\
                <p class="mb-4">Los televisores y altavoces pueden escuchar y ver. Gestiona sus permisos.</p>\
                <div class="tip tip-yellow">\
                    <span class="tip-icon">\uc0\u55356 \u57252 </span>\
                    <div><strong>Revisa el micr\'f3fono:</strong> Muchos dispositivos tienen un bot\'f3n f\'edsico para apagar el micr\'f3fono. \'dasalo cuando no necesites el asistente de voz.</div>\
                </div>\
                <div class="tip tip-green">\
                   <span class="tip-icon">\uc0\u9881 \u65039 </span>\
                    <div><strong>Configura la privacidad:</strong> Explora los men\'fas de configuraci\'f3n de tu Smart TV. Desactiva la recopilaci\'f3n de datos de visualizaci\'f3n si te preocupa tu privacidad.</div>\
                </div>\
                 <div class="tip tip-red">\
                    <span class="tip-icon">\uc0\u55357 \u56504 </span>\
                    <div><strong>Cuidado con las compras por voz:</strong> Si usas un altavoz inteligente, configura un PIN para autorizar compras y evitar gastos accidentales.</div>\
                </div>\
            `,\
            adolescentes: `\
                <p class="mb-4">\'bfSab\'edas que tu altavoz puede grabar conversaciones? \'a1Controla qui\'e9n te escucha!</p>\
                <div class="tip tip-yellow">\
                    <span class="tip-icon">\uc0\u55358 \u56619 </span>\
                    <div>Apaga el micro del altavoz cuando tengas amigos en casa. La privacidad es cool.</div>\
                </div>\
                <div class="tip tip-green">\
                   <span class="tip-icon">\uc0\u55357 \u56570 </span>\
                    <div>Cierra sesi\'f3n en tus apps (Netflix, YouTube) en la TV si la compartes con mucha gente.</div>\
                </div>\
            `,\
            ninos: `\
                <p class="mb-4">El altavoz es como un lorito que a veces repite lo que oye. \'a1Vamos a ense\'f1arle a estar en silencio!</p>\
                <div class="tip tip-yellow">\
                    <span class="tip-icon">\uc0\u55357 \u56583 </span>\
                    <div>Busca el botoncito con un micr\'f3fono dibujado. \'a1P\'falsalo para que el "lorito" descanse y no escuche tus secretos!</div>\
                </div>\
            `,\
            mayores: `\
                 <p class="mb-4">Estos aparatos son muy \'fatiles, pero es bueno saber c\'f3mo funcionan.</p>\
                <div class="tip tip-green">\
                    <span class="tip-icon">\uc0\u55357 \u56803 \u65039 </span>\
                    <div><strong>Pida ayuda para configurar:</strong> Pida a un familiar que le ayude a revisar la configuraci\'f3n inicial para que el dispositivo solo haga lo que usted necesita.</div>\
                </div>\
                 <div class="tip tip-yellow">\
                    <span class="tip-icon">\uc0\u55357 \u56600 </span>\
                    <div><strong>Identifique el bot\'f3n del micr\'f3fono:</strong> Es \'fatil saber cu\'e1l es para apagarlo si en alg\'fan momento no se siente c\'f3modo.</div>\
                </div>\
            `\
        \}\
    \},\
    'kitchen-room': \{\
        icon: '\uc0\u55356 \u57203 ',\
        title: 'La Cocina Inteligente',\
        content: \{\
            adultos: `\
                <p class="mb-4">Incluso tu refrigerador o cafetera pueden conectarse a internet. La regla principal es la simplicidad.</p>\
                <div class="tip tip-green">\
                    <span class="tip-icon">\uc0\u55357 \u56588 </span>\
                    <div><strong>Si no usas la funci\'f3n "smart", no la conectes:</strong> Si no necesitas que tu microondas se conecte al Wi-Fi, simplemente no lo configures en la red.</div>\
                </div>\
                <div class="tip tip-yellow">\
                    <span class="tip-icon">\uc0\u55357 \u56594 </span>\
                    <div><strong>Cambia la contrase\'f1a por defecto:</strong> Si conectas un electrodom\'e9stico, aseg\'farate de cambiar la contrase\'f1a que viene de f\'e1brica.</div>\
                </div>\
            `,\
            adolescentes:`<p class="text-center text-gray-600 py-8">Los electrodom\'e9sticos de la cocina no suelen ser un gran riesgo para ti, \'a1pero los principios de contrase\'f1as seguras se aplican a todo!</p>`,\
            ninos: `<p class="text-center text-gray-600 py-8">\'a1Los aparatos de la cocina son para cocinar, no para jugar en internet! D\'e9jaselos a los adultos. \uc0\u55357 \u56841 </p>`,\
            mayores: `<p class="text-center text-gray-600 py-8">La mayor\'eda de las funciones "inteligentes" de estos aparatos no son necesarias. Es m\'e1s seguro usarlos de la forma tradicional.</p>`,\
        \}\
    \},\
    'kids-room': \{\
        icon: '\uc0\u55358 \u56824 ',\
        title: 'El Cuarto de los Ni\'f1os: Juguetes Conectados',\
        content: \{\
             adultos: `\
                <p class="mb-4">Los juguetes con conexi\'f3n a internet, micr\'f3fonos o c\'e1maras pueden ser un riesgo para la privacidad de los m\'e1s peque\'f1os.</p>\
                <div class="tip tip-yellow">\
                    <span class="tip-icon">\uc0\u55358 \u56784 </span>\
                    <div><strong>Investiga antes de comprar:</strong> Busca rese\'f1as sobre la seguridad del juguete. \'bfOtros padres han reportado problemas?</div>\
                </div>\
                <div class="tip tip-green">\
                   <span class="tip-icon">\uc0\u55357 \u56594 </span>\
                    <div><strong>Usa contrase\'f1as fuertes</strong> para la cuenta asociada al juguete.</div>\
                </div>\
                 <div class="tip tip-red">\
                    <span class="tip-icon">\uc0\u55356 \u57113 </span>\
                    <div><strong>Apaga los juguetes por la noche:</strong> Descon\'e9ctalos de la corriente o del Wi-Fi cuando no se est\'e9n usando, especialmente en el dormitorio.</div>\
                </div>\
            `,\
            adolescentes:`<p class="text-center text-gray-600 py-8">Si tienes hermanos peque\'f1os, ay\'fadales a entender que no deben dar informaci\'f3n personal (su nombre, colegio, etc.) a sus juguetes que hablan.</p>`,\
            ninos: `\
                <p class="mb-4">\'a1Tus juguetes son tus amigos! Pero algunos amigos no saben guardar secretos.</p>\
                <div class="tip tip-green">\
                    <span class="tip-icon">\uc0\u55357 \u56492 </span>\
                    <div>Cu\'e9ntale tus aventuras, \'a1pero no le digas tu nombre completo o d\'f3nde vives!</div>\
                </div>\
                <div class="tip tip-red">\
                   <span class="tip-icon">\uc0\u55357 \u56588 </span>\
                    <div>Cuando te vayas a dormir, \'a1pon a dormir a tus juguetes tambi\'e9n! Ap\'e1galos para que descansen.</div>\
                </div>\
            `,\
            mayores: `\
                <p class="mb-4">Al regalar un juguete moderno a sus nietos, es bueno tener en cuenta un par de cosas.</p>\
                <div class="tip tip-yellow">\
                    <span class="tip-icon">\uc0\u55356 \u57217 </span>\
                    <div><strong>Pregunte a los padres:</strong> Antes de comprar un juguete con conexi\'f3n a internet, es buena idea consultar con los padres si se sienten c\'f3modos con \'e9l.</div>\
                </div>\
                <div class="tip tip-green">\
                   <span class="tip-icon">\uc0\u55357 \u56424 \u8205 \u55357 \u56425 \u8205 \u55357 \u56423 </span>\
                    <div><strong>La seguridad es un buen regalo:</strong> Ayude a configurar el juguete de forma segura junto a los padres y el ni\'f1o. Es una buena actividad familiar.</div>\
                </div>\
            `,\
        \}\
    \},\
    'security-room': \{\
        icon: '\uc0\u55357 \u56567 ',\
        title: 'La Torre de Vigilancia: C\'e1maras de Seguridad',\
        content: \{\
             adultos: `\
                <p class="mb-4">Las c\'e1maras nos dan seguridad, pero si no est\'e1n bien configuradas, pueden ser una ventana para extra\'f1os.</p>\
                <div class="tip tip-red">\
                    <span class="tip-icon">\uc0\u55357 \u56593 </span>\
                    <div><strong>OBLIGATORIO cambiar la contrase\'f1a:</strong> Las contrase\'f1as por defecto de las c\'e1maras de seguridad son conocidas y f\'e1ciles de encontrar en internet. \'a1Es el paso m\'e1s importante!</div>\
                </div>\
                <div class="tip tip-green">\
                   <span class="tip-icon">\uc0\u55357 \u57057 \u65039 </span>\
                    <div><strong>Activa la autenticaci\'f3n de dos factores (2FA):</strong> Si la app de la c\'e1mara lo ofrece, act\'edvala. A\'f1ade una capa extra de seguridad.</div>\
                </div>\
                 <div class="tip tip-yellow">\
                    <span class="tip-icon">\uc0\u55357 \u56525 </span>\
                    <div><strong>Colocaci\'f3n estrat\'e9gica:</strong> Instala las c\'e1maras para que vigilen el exterior o los accesos, evitando apuntar a zonas privadas como dormitorios o ba\'f1os.</div>\
                </div>\
            `,\
            adolescentes:`<p class="text-center text-gray-600 py-8">La seguridad de las c\'e1maras es cosa de adultos, pero si ves algo raro en la red o un dispositivo se comporta de forma extra\'f1a, av\'edsales.</p>`,\
            ninos: `<p class="text-center text-gray-600 py-8">Las c\'e1maras son para ver qui\'e9n llama a la puerta, \'a1como la mirilla m\'e1gica del castillo! Son los guardianes de la casa.</p>`,\
            mayores: `\
                <p class="mb-4">Las c\'e1maras pueden darle mucha tranquilidad, pero deben ser su aliado, no un riesgo.</p>\
                <div class="tip tip-red">\
                    <span class="tip-icon">\uc0\u55357 \u56424 \u8205 \u55357 \u56615 </span>\
                    <div><strong>Pida ayuda para la instalaci\'f3n:</strong> Es crucial que una persona de confianza le ayude a instalar la c\'e1mara y, sobre todo, a cambiar la contrase\'f1a inicial por una segura.</div>\
                </div>\
                <div class="tip tip-yellow">\
                   <span class="tip-icon">\uc0\u55357 \u56481 </span>\
                    <div><strong>Cubra las c\'e1maras interiores:</strong> Si tiene una c\'e1mara dentro de casa (por ejemplo, para ver a una mascota), considere cubrirla con un pa\'f1o cuando est\'e9 en casa y no la necesite.</div>\
                </div>\
            `,\
        \}\
    \},\
\};\
\
// --- Selectores del DOM ---\
const modal = document.getElementById('modal-template');\
const modalIcon = document.getElementById('modal-icon');\
const modalTitle = document.getElementById('modal-title');\
const modalBody = document.getElementById('modal-body');\
const modalTabsContainer = document.getElementById('modal-tabs');\
const closeBtn = document.querySelector('.close-btn');\
\
// --- Asignar Eventos ---\
\
// Evento para cada zona del castillo\
document.querySelectorAll('.room').forEach(room => \{\
    room.addEventListener('click', () => \{\
        const roomData = modalData[room.id];\
        if (roomData) \{\
            openModal(roomData);\
        \}\
    \});\
\});\
\
// Evento para las pesta\'f1as (delegaci\'f3n de eventos)\
modalTabsContainer.addEventListener('click', (e) => \{\
    if (e.target.classList.contains('tab-btn')) \{\
        const tabName = e.target.getAttribute('data-tab');\
        activateTab(tabName);\
    \}\
\});\
\
// Evento para el bot\'f3n de cerrar\
closeBtn.onclick = () => \{\
    modal.style.display = 'none';\
\};\
\
// Evento para cerrar el modal al hacer clic fuera\
window.onclick = (event) => \{\
    if (event.target == modal) \{\
        modal.style.display = 'none';\
    \}\
\};\
\
// --- Funciones ---\
\
/**\
 * Abre y rellena el modal con los datos correspondientes\
 * @param \{object\} data - El objeto de datos para la zona seleccionada\
 */\
function openModal(data) \{\
    modalIcon.textContent = data.icon;\
    modalTitle.textContent = data.title;\
    \
    // Limpiar contenido anterior\
    modalBody.innerHTML = '';\
    \
    // Crear contenido para cada pesta\'f1a\
    for (const tab in data.content) \{\
        const contentDiv = document.createElement('div');\
        contentDiv.id = `content-$\{tab\}`;\
        contentDiv.className = 'tab-content';\
        contentDiv.innerHTML = data.content[tab];\
        modalBody.appendChild(contentDiv);\
    \}\
    \
    modal.style.display = 'block';\
    \
    // Activar la primera pesta\'f1a por defecto\
    activateTab('adultos');\
\}\
\
/**\
 * Activa la pesta\'f1a seleccionada y muestra su contenido\
 * @param \{string\} tabName - El nombre de la pesta\'f1a (ej: 'adultos', 'ninos')\
 */\
function activateTab(tabName) \{\
    // Manejar botones\
    document.querySelectorAll('.tab-btn').forEach(btn => \{\
        btn.classList.remove('active');\
        if (btn.getAttribute('data-tab') === tabName) \{\
            btn.classList.add('active');\
        \}\
    \});\
    // Manejar contenido\
    document.querySelectorAll('.tab-content').forEach(content => \{\
        content.classList.remove('active');\
        if (content.id === `content-$\{tabName\}`) \{\
            content.classList.add('active');\
        \}\
    \});\
\}\
}