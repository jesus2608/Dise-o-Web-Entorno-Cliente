let libro = {titulo: "El dia que dejo de de nevar en Alaska", autor:"Allice Kellen", año:2017 }
for (const key in libro) {
    if (Object.prototype.hasOwnProperty.call(libro, key)) {
        const element = libro[key];
        console.log(element)
        
    }
}