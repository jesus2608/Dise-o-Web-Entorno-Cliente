class Configuracion {
    constructor(ajustes) {
        if (Configuracion.instancia) {
            return Configuracion.instancia; // Retornamos la instancia existente
        }

        this.ajustes = ajustes;
        Configuracion.instancia = this; // Guardamos la primera instancia creada
    }

    obtenerAjustes() {
        return this.ajustes;
    }

    actualizarAjustes(nuevosAjustes) {
        this.ajustes = nuevosAjustes;
    }
}

// Crear la primera instancia de Configuracion
const configuracion1 = new Configuracion({ personaje: 'goku', transformacion: 'Super Saiyan' });
console.log(configuracion1.obtenerAjustes());  // { personaje: 'goku', transformacion: 'Super Saiyan' }

// Intentar crear una segunda instancia con diferentes ajustes
const configuracion2 = new Configuracion({ personaje: 'vegeta', transformacion: 'Super Saiyan' });
console.log(configuracion1.obtenerAjustes());  // { personaje: 'vegeta', transformacion: 'Super Saiyan' }

// Comprobamos que ambas instancias son iguales
console.log(configuracion1 === configuracion2);  // true
