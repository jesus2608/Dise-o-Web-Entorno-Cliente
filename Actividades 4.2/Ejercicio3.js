$('#addTask').on('click', function(){
    const tarea = $("<li>"+$('#newTask').val()
    +" <input type='checkbox'name='completada'> Completada "+"<button class='borrar'>Borrar</button>"+"</li>");
        tarea.hide();
        $('#taskList').append(tarea);
        tarea.fadeIn();
  
})
$('#taskList').on('click','.borrar',function(){
    const tarea = $(this).closest('li');
    tarea.fadeOut(function(){
        tarea.remove();
    });
   
})

