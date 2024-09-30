let tareas=[];
let opcion; 
do{
    opcion = parseInt(prompt("Aqui tiene lo que puede hacer:\n"+ "1.AGREGAR TAREA\n"+"2.MODIFICAR TAREA\n"+"3. ELIMINAR TAREA\n"+ "4. VER TAREAS\n"+"5. Salir"));
    switch(opcion){
        case 1:
            let tarea = prompt("Ingrese la tarea que quiere hacer")
            tareas.push((tareas.length+1)+"."+tarea) ;
            break;
        case 4: 
            if(tareas.length==0){
                alert("No se han añadido tareas aun");
            }else{
                    alert(tareas); 
            }
        break;
        case 2: 
            if(tareas.length==0){
            alert("No se han añadido tareas aun");
        }else{
            let opcion1 = parseInt(prompt("Que tarea quieres modificar:\n"+ tareas));
            if(tareas[opcion1]==null) alert("Esa tarea no existe");
            else{
                let aux = prompt("Que tarea quieres hacer");
                tareas[opcion1-1]= (tareas.length+1)+"."+aux;
            }
        }
        break;
        case 3: let opcion1 = parseInt(prompt("Que tarea quieres borrar"));
        if(tareas[opcion1]==null){
        alert("No se puede borrar una tarea que no existe");
        }else{
            tareas.splice(opcion1-1);
        }
        break;
        case 5: alert("Hasta pronto");
        default: alert("la opcion introducida no se correponde");


    }


}while(opcion != 5);