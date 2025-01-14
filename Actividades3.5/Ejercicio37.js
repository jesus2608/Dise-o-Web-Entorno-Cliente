function carrera(){
    const coches = ['🚕','🏎','🚒','🚓'];
    coche(coches[0]
    ).then(() => {
        console.log(coches[0]+' terminó la carrera');
    });
    coche(coches[1]
    ).then(() => {
        console.log(coches[1]+' terminó la carrera');
    });
    coche(coches[2]
    ).then(() => {
        console.log(coches[2]+' terminó la carrera');
    });
    coche(coches[3]
    ).then(() => {
        console.log(coches[3]+' terminó la carrera');
    });
    // Llamada a los diferentes coches que me doy cuenta que se podria hacer con un bucles pero bueno

   
}

function coche(coche) {
    return new Promise((bien) => {
        let progreso = 0;
        for (let index = 0; index < 4; index++) {
            const tiempo = Math.floor(Math.random() * 6000) + 1000; // Tiempo entre 1 y 6 segundos 
            let tiempoTotal=+tiempo;
            setTimeout(() => {
                if(tiempo>=3000 && tiempo <=3100){
                    progreso=-25
                    console.log(coche + "Ha sufrido una averia pero ya esta arreglado "+progreso+"% de carrera") //Fallos en la carrera
                }else if (tiempo>=1000 && tiempo <=1100){
                    progreso=-25
                    console.log(coche + "las lluvias lo han retrasado "+progreso+"% de carrera")// Fallos en la carrera
                }
                else{
                progreso += 25;
                console.log(coche +'lleva un '+progreso+' % de carrera');
                }

                if (progreso === 100) {
                    bien(tiempoTotal); // Resuelve la promesa cuando llega al 100%
                }
            }, index * tiempo); // Avance parecido al de la ruleta 
        }
    });
}


carrera();
