colors = ['red', 'green', 'blue' , 'orange' , 'yellow' , 'black' , 'violet' , 'pink'];


async function mostrar_colors(temps){
    for (let i=0;i<colors.length;i++){
        //TODO instruccions per mostrar el color. Per exemple

        //Crida al mètode esperar
        await esperar(temps);
        console.log(Math.floor(Math.random() * colors.length));

    }
}

function esperar(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

mostrar_colors(500);

