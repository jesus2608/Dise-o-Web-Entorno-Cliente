function temporizador(){
    console.log("Inicio de programa");
    setTimeout(()=>{
        console.log("Han pasado dos segundos");
    },2000);
    console.log("Fin del programa");
}
temporizador();

function temporizador2(){
    console.log("Inicio del programa");
    for (let index = 1; index < 6; index++) {
        setTimeout(()=>{
            console.log("Han pasado "+index+" segundos")
        },index*1000)
        
    }
}
temporizador2();