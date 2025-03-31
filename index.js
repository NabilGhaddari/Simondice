const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'violet', 'pink'];
let colorsl = [];
let jugadorpush= [];


function inici(){
    colorsl = [];
    jugadorpush= [];
    seguentronda();
}
function seguentronda(){
    jugadorpush= [];
    colorsl[colorsl.length] = colors[Math.floor(Math.random() * colors.length)];
    console.log("Simón dice:", colorsl);
    mostrar_colors();
}
function verificar(color) {

    jugadorpush[jugadorpush.length] = color;

    if (jugadorpush[jugadorpush.length - 1] !== colorsl[jugadorpush.length - 1]) {
        console.log("¡Fallaste! Reiniciando...");
        setTimeout(inici, 2000);
        return;
    }

    if (jugadorpush.length == colorsl.length) {
        console.log("¡Bien hecho! Siguiente ronda...");
        setTimeout(seguentronda, 1000);
    }
}

async function mostrar_colors(temps) {
    for (let i = 0; i < colorsl.length; i++) {
        // Generar una nova posició aleatòria per cada color
        // Mostra el color aleatori
        console.log(colorsl[i]);
        // Espera el temps especificat
        await esperar(temps);

    }
}

function esperar(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
verificar();







