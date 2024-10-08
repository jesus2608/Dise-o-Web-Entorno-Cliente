let alumnos=[{
nombre: "Juan", edad: 25, nota:4
},
{
    nombre: "Jesus", edad: 22, nota:9
    },
    {
        nombre: "Alejandro", edad: 27, nota:8
        }]

        for (const element of alumnos) {
            if(element.nota>=8)console.log(element);
        }
