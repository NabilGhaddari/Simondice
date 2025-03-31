const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'violet', 'pink'];
let colorsl = [];
let jugadorpush= [];

function inici(){
    colorsl = [];
    jugadorpush= [];
    document.getElementById("mensaje").textContent = "¡Nou joc! ";
    seguentronda();
}

function seguentronda(){
    jugadorpush= [];
    colorsl.push(colors[Math.floor(Math.random() * colors.length)]);
    document.getElementById("mensaje").textContent = "Simón dice: Memoriza la secuencia.";
    mostrar_colors(1000); // Ahora pasamos un valor para 'temps'
}

function verificar(color) {
    jugadorpush.push(color);

    if (jugadorpush[jugadorpush.length - 1] !== colorsl[jugadorpush.length - 1]) {
        document.getElementById("mensaje").textContent = "¡Fallaste! Reiniciando...";
        setTimeout(inici, 2000);
        return;
    }

    if (jugadorpush.length === colorsl.length) {
        document.getElementById("mensaje").textContent = "¡Bien hecho! Siguiente ronda...";
        setTimeout(seguentronda, 1000);
    }
}

async function mostrar_colors(temps = 1000) { // Asignamos un valor por defecto
    for (let i = 0; i < colorsl.length; i++) {
        document.getElementById("mensaje").textContent = "Mostrando color: " + colorsl[i];
        await esperar(temps);
    }
    document.getElementById("mensaje").textContent = "Tu turno. Haz clic en los colores en el orden correcto.";
}

function esperar(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// Iniciar el juego al cargar
inici();






