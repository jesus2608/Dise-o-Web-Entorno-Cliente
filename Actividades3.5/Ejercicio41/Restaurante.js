export class Restaurante{
    static idReserva = 0;
    reservas=[];
    constructor(){ //Creamos un restaurante con 20 reservas diferentes
        for (let index = 0; index < 20; index++) {
           this.reservas.push(new Reserva(++idReserva)); 
        }
    }

    reservar(reserva){
        this.reserva.hacerReseva();
    }
    listaraReservas(){
        for (let index = 0; index < this.reservas.length; index++) {
            this.reservas[index].toString();
            
        }
    }
}