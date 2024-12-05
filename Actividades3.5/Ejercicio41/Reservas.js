export class Reserva{

    constructor(id){
        this.id= id;
        this.reservado= false

    }

    hacerReserva(){
        if(this.reservado){
            alert("No puedes reservar esta mesa porque ya esta reservada");
        }else
            alert("Mesa reservada");
            this.reservado= true;
    }

    toString(){
        const mesas = document.getElementById('mesas')
        if(this.reservado){
        mesas.innerHTML(mesas+"\nLa mesa "+id+" no esta disponible");
        }else{
            mesas.innerHTML(mesas+"\nLa mesa "+id+" esta disponible");
        }

    }

}
