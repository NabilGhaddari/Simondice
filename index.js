const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'violet', 'pink'];
let colorsl = [];
let jugadorpush = [];
let juegoActivo = false;  // Variable que controla si el joc està actiu o no
let ronda = 1;

function inici() {
    colorsl = [];
    jugadorpush = [];
    ronda = 1;
    juegoActivo = true; // Activa el joc
    actualizarRonda();
    seguentronda();
}

function seguentronda() {
    if (!juegoActivo) return; // Si el joc no està actiu, no fa res

    jugadorpush = [];
    colorsl.push(colors[Math.floor(Math.random() * colors.length)]);
    actualizarRonda(); // Actualitza la ronda que es mostra
    mostrar_colors(); // Mostra la seqüència de colors al jugador
}

function verificar(color) {
    if (!juegoActivo) return;

    jugadorpush.push(color); // Afegeix el color seleccionat pel jugador a la seva seqüència
    // Compara l'últim color de la seqüència del jugador amb l'últim color de la seqüència del joc
    if (jugadorpush[jugadorpush.length - 1] !== colorsl[jugadorpush.length - 1]) {
        alert(`Has perdut en la Ronda ${ronda}. Intenta de nou.`);
        juegoActivo = false; // Desactiva el joc
        return;
    }

    if (jugadorpush.length === colorsl.length) {
        ronda++;
        setTimeout(seguentronda, 2000);
    }
}

async function mostrar_colors() {
    for (let i = 0; i < colorsl.length; i++) {
        const color = colorsl[i]; // Agafa el color de la seqüència
        const cuadrado = document.getElementById(color); // Agafa el botó del color corresponent

        cuadrado.style.opacity = '0'; // Fa que el color sigui invisible
        await esperar(500); // Espera 500ms abans de mostrar el següent color
        cuadrado.style.opacity = '1'; // Mostra el color
        await esperar(300); // Espera 300ms abans de passar al següent color
    }
}

// Funció que crea una pausa (espera) durant un temps determinat
function esperar(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
// Funció que actualitza la ronda a la interfície
function actualizarRonda() {
    document.getElementById("ronda").textContent = `Ronda ${ronda}`;  // Mostra la ronda actual al document HTML
}
