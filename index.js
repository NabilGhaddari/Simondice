const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'violet', 'pink'];
let colorsl = [];
let rjugador = [];
let jocActiu = false;  // Variable que controla si el joc esta actiu o no
let ronda = 1;
let repeticionsDisponibles = 2;
let maximaRonda = 1;  // Variable per guardar la maxima ronda assolida

const soVictoria = new Audio('sounds/victory.mp3');
const soDerrota = new Audio('sounds/gameover.mp3');

function inici() {
    colorsl = [];
    rjugador = [];
    ronda = 1;
    repeticionsDisponibles = 2
    jocActiu = true; // Activa el joc
    actualitzarRonda();
    actualitzarRepeticions();
    seguentRonda();
}

function seguentRonda() {
    if (!jocActiu) return; // Si el joc no esta actiu, no fa res

    rjugador = [];
    colorsl.push(colors[Math.floor(Math.random() * colors.length)]);
    actualitzarRonda(); // Actualitza la ronda que es mostra
    mostrarColors(); // Mostra la sequencia de colors al jugador
}

function verificar(color) {
    if (!jocActiu) return;

    rjugador.push(color); // Afegeix el color seleccionat pel jugador a la seva sequencia
    // Compara l'ultim color de la sequencia del jugador amb l'ultim color de la sequencia del joc
    if (rjugador[rjugador.length - 1] !== colorsl[rjugador.length - 1]) {
        soDerrota.play();
        alert(`Has perdut en la Ronda ${ronda}. Intenta de nou.`);
        jocActiu = false; // Desactiva el joc
        return;
    }

    if (rjugador.length === colorsl.length) {
        soVictoria.play();
        ronda++;
        if (ronda > maximaRonda) {
            maximaRonda = ronda; // Actualitza la maxima ronda si s'ha assolit una nova maxima
            actualitzarMaximaRonda(); // Actualitza la maxima ronda a la interfície
        }
        setTimeout(seguentRonda, 500);
    }
}

async function mostrarColors() {
    for (let i = 0; i < colorsl.length; i++) {
        const color = colorsl[i]; // Agafa el color de la sequencia
        const cuadrat = document.getElementById(color); // Agafa el boto del color corresponent

        cuadrat.style.opacity = '0'; // Fa que el color sigui invisible
        await esperar(500); // Espera 500ms abans de mostrar el següent color
        cuadrat.style.opacity = '1'; // Mostra el color
        await esperar(300); // Espera 300ms abans de passar al següent color
    }
}

// Funcio que crea una pausa (espera) durant un temps determinat
function esperar(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function rendir() {
    if (!jocActiu) return;

    jocActiu = false; // Deten el joc
    alert(`T'has rendit en la Ronda ${ronda}. Has abandonat la partida.`);

    colorsl = [];
    document.getElementById("repetir").disabled = true;
    document.getElementById("repeticions").textContent = `Repeticions disponibles: 0`;
}

function repetirSequencia() {
    if (repeticionsDisponibles > 0) {
        mostrarColors();
        repeticionsDisponibles--;
        actualitzarRepeticions();
    } else {
        alert("Ja no pots repetir la sequencia!");
    }
}
// Funcio que actualitza la ronda a la interfície
function actualitzarRonda() {
    document.getElementById("ronda").textContent = `Ronda ${ronda}`;  // Mostra la ronda actual al document HTML
}

function actualitzarRepeticions() {
    document.getElementById("repeticions").textContent = `Repeticions disponibles: ${repeticionsDisponibles}`;
}

// Funció que actualitza la màxima ronda a la interfície
function actualitzarMaximaRonda() {
    document.getElementById("maximaRonda").textContent = `Maxima Ronda: ${maximaRonda}`;
}