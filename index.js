const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'violet', 'pink'];
let colorsl = [];



function afegir_color(){
    let posició = Math.floor(Math.random() * colors.length);
    console.log(posició);
    colorsl.push(colors[posició]);
    console.log(colorsl);
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

// Crida a la funció
//mostrar_colors(500);

if (colorsl == colorsl.push()){
    afegir_color();
}
afegir_color();
afegir_color();
afegir_color();
afegir_color();
afegir_color();
afegir_color();
afegir_color();
afegir_color();

mostrar_colors(1000);

