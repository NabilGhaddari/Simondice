const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'violet', 'pink'];
let colorsl = [];
let jugadorpush = [];
let juegoActivo = false; // Ahora el juego empieza inactivo

function inici() {
    colorsl = [];
    jugadorpush = [];
    juegoActivo = true; // Activamos el juego
    seguentronda();
}



function seguentronda() {
    if (!juegoActivo) return; // Si el juego no está activo, no hace nada

    jugadorpush = [];
    colorsl.push(colors[Math.floor(Math.random() * colors.length)]);
    mostrar_colors();
}

function verificar(color) {
    if (!juegoActivo) return; // Si el juego no está activo, no hacer nada

    jugadorpush.push(color);

    if (jugadorpush[jugadorpush.length - 1] !== colorsl[jugadorpush.length - 1]) {
        alert('Has perdut!');
        juegoActivo = false; // Desactivamos el juego hasta que presione "Inici del joc"
        return;
    }

    if (jugadorpush.length === colorsl.length) {
        setTimeout(() => {
            ronda();
            seguentronda();
        }, 100);
    }
}

async function mostrar_colors() {
    for (let i = 0; i < colorsl.length; i++) {
        const color = colorsl[i];
        const cuadrado = document.getElementById(color);
        cuadrado.style.opacity = '0.6';
        await esperar(500);
        cuadrado.style.opacity = '0.9';
        await esperar(300);
    }
}

function esperar(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}





