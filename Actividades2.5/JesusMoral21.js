let tablero = 
[["📦","📦","📦"],
["📦","📦","📦"],
["📦","📦","📦"]];
function enseñarTablero(tablero){
  for (let index = 0; index < tablero.length; index++) {
    console.log(tablero[index]);
    
  }
}
alert("Vamos a jugar al buscaminas");
let puntos=0;
let chivato;
do{
enseñarTablero(tablero);
let x = parseInt(prompt("Ingrese el eje x")-1);
let y = parseInt(prompt("Ingrese el eje y")-1);
if((x==1&& y==0)||(x==2&& y==0)||(x==0&& y==2)){
puntos=6;
tablero[y][x]="💣";
chivato=false;
}else{ tablero[y][x]="⭐"
    puntos++;
    chivato=true;
};
}while(puntos!=6);
console.log(enseñarTablero(tablero)); 
if(chivato){alert("Anti-terrorist wins")}else alert("Terrorist wins")
