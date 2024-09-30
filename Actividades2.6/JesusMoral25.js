let gojo=100;
let sukuna=100;
let energiaMaldita=3;
let ataqueGojo = 10;
let ataqueSukuna=10;
let curacionMaxima=10;
alert("ES HORA DE ENFRENTAR AL REY DE LAS MALDICIONES");
let opcion=0;
do{
opcion = parseInt(prompt("1. Atacar.\n2.Curarse.\n 3.Concentrar energia maldita\n4.salir"));
switch(opcion){
    case 1:
        let random = parseInt(Math.floor(Math.random()*ataqueGojo));
        if(random==10){
            alert("Gojo ha tirado un purpura");
            sukuna-=random;
        }else{ alert ("Gojo ha atacado y ha echo "+random+" de daño");
        sukuna-=random;}
        alert("La vida de sukuna es "+sukuna+"\n La vida de gojo es de "+gojo);
        break;
    case 2:
        if(energiaMaldita>0){
            let random = parseInt(Math.floor(Math.random()*curacionMaxima));
            gojo+=random;
            energiaMaldita--
            alert("Gojo se ha curado "+random+" puntos");
        }else alert("No tienes energia maldita");
        alert("La vida de sukuna es "+sukuna+"\n La vida de gojo es de "+gojo);
        break;
    case 3: 
        random = parseInt(Math.floor(Math.random()*4));
        if(random==1){
            alert("Has concentrado energia maldita y ahora puedes curarte");
            energiaMaldita++;
        }else alert("No has podido concentrar energia maldita");
        break;
    case 4: alert("hasta pronto"); break;
    default: alert("esa accion no esta permitida"); break;
}
if(gojo <0 || sukuna <0){
    break;    
}
alert("Sukuna realiza un ataque");
let random = parseInt(Math.floor(Math.random()*ataqueSukuna));
if(random==10){
    alert("Sukuna a lanzado el corte que parte el mundo");
    gojo-=random;
}else{
    alert("Sukuna ataca y hace "+random+" de daño");
    gojo-=random;
}

}while(gojo>0|| sukuna>0|| opcion==4);
if(gojo>0){
    alert("Gojo Satoru ha ganado");
}else if(sukuna >0)
    alert("Perdiste......");