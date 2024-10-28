const nombre = prompt("Ingrese un nombre para calcularla nacionalidad");
if (nombre){
    fetch(`https://api.nationalize.io/?name=${nombre}`)
    .then(response=>response.json())
    .then(data => {
       // Comprobar si hay resultados en la respuesta
       if (data.country && data.country.length > 0) {
        // Encontrar el país con mayor probabilidad
        let paisConMayorProbabilidad = data.country.reduce((max, country) => {
            return (country.probability > max.probability) ? country : max;
        });

        // Mostrar el país con mayor probabilidad en la consola
        alert(`El país con mayor probabilidad para el nombre "${nombre}" es: ${paisConMayorProbabilidad.country_id} con una probabilidad de ${(paisConMayorProbabilidad.probability * 100).toFixed(2)}%`);
    } else {
        alert(`No se encontraron resultados para el nombre "${nombre}".`);
    }
            });
}else console.log("No se ingreso ningun nombre");