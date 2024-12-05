function ruleta (){

    return new Promise((bien, mal)=>{
        console.log("La ruleta esta girando");
        //Aqui sacamos el tiempo de uno o 3 segundos y le sumamos mil para que no de 0
        const tiempoEspera = Math.random()*2000 + 1000;
        
        setTimeout(()=>{
            const numeroRandom = Math.floor(Math.random()*10);
            if(numeroRandom== 0){
                mal("La ruleta se ha atascado");
            }else {
                bien(numeroRandom);
            }
        }, tiempoEspera);
 });
}


const numero = prompt("Cuantas tiradas quieres hacer ");
let total = 0;
for (let index = 0; index < numero; index++) {
    ruleta().then((numero)=>{
        setTimeout(()=>{
        console.log("Tenemos un ganador el numero "+numero );
        total+=numero;
        console.log("Tienes "+total+ " Puntos ");
        }
    ),index*1000}).catch((error)=>{
        console.log(error);
    })
    
}
