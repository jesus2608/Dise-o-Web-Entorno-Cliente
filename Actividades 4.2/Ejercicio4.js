$('#loadUsers').on('click',function(){
    $('#loading').show();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function(respuesta) {
            $('#loading').hide();
        const usuarios = respuesta;
        for (let index = 0; index < usuarios.length; index++) {
            let usuario = $("<tr><td>"+usuarios[index].name+"</td><td>"+usuarios[index].email+"</td></tr>")
            $('#usersTable').append(usuario);
            
        }
        },
        error: function(xhr, status, error) {
            $('#loading').hide();
        $('#error').text('ERROR AL CARGAR LOS USUARIOS');
        }
        
        });
})
