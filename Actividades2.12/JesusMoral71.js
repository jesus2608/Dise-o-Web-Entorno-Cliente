class Banco{
#balance
constructor(balance) {
    this.balance= balance;
}
depositar(cantidad){
this.balance+= cantidad;
console.log("Su cuenta ahora tiene "+this.balance);
}
retirar(cantidad){
    if(cantidad>this.balance) console.log("No se puede no tienes tanto dinero en la cuenta");
    else{
    this.balance-= cantidad;
    console.log("Su cuenta ahora tiene "+this.balance);
    }
}
}
let banco= new Banco(0);
banco.depositar(1000);
banco.retirar(1200);
banco.retirar(500);
