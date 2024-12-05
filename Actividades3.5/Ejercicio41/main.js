class Reserva{

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
    cancelarReserva(){
        if(this.reservado){
            alert("Reseva cancelada");
            this.reservado= false;
        }else
          alert('error');

    }

    toString(mesas){
    

            if(this.reservado){
                mesas.innerHTML+="<br>La mesa "+this.id+" no esta disponible <br><button onClick='restaurante.cancelarReserva("+this.id+")' >Cancelar reserva</button>";
            }else{
                mesas.innerHTML+="<br>La mesa "+this.id+" esta disponible <br><button onClick='restaurante.reservar("+this.id+")'>Hacer reserva</button>";
            }
    
        }
}
class Restaurante{
    static idReserva = 0;
    reservas=[];
    constructor(){ //Creamos un restaurante con 20 reservas diferentes
        for (let index = 0; index < 20; index++) {
           this.reservas.push(new Reserva(++Restaurante.idReserva)); 
        }
    }

    reservar(id){
        this.reservas[id-1].hacerReserva();
        this.listaraReservas();
    }
    cancelarReserva(id){
        this.reservas[id-1].cancelarReserva();
        this.listaraReservas();
    }
    listaraReservas(){
        const mesas = document.getElementById('mesas')
        mesas.innerHTML= "";
        for (let index = 0; index < this.reservas.length; index++) {
            this.reservas[index].toString(mesas);
            
        }
    }
}


const restaurante = new Restaurante();
restaurante.listaraReservas();