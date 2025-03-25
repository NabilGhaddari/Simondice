const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'violet', 'pink'];
let colorsl = [];

async function mostrar_colors(temps) {

    for (let i = 0; i < colors.length; i++) {
        // Generar una nova posició aleatòria per cada color
        let posició = Math.floor(Math.random() * colors.length);

        // Espera el temps especificat
        await esperar(temps);

        // Mostra el color aleatori
        console.log(colors[posició]);
    }
}

if ( colors == colors.push()) {

}

function esperar(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

// Crida a la funció
mostrar_colors(500);

