$('#registroForm').on('submit', function(event){
    const nombre = $('#nombre').val();
    const email = $('#email').val();
    const contraseña= $('#password').val();
    event.preventDefault(); // con esto detenemos el envio del formulario para que no se esconda los errores al momento de salir
//Si el nombre esta vacio pues mostramos el error y si no lo escondemos
    if(nombre==''){
        $("#nombreError").show();
    }else
    $("#nombreError").hide();
    //Si la contraseña es mas chica de 6 que muestre el error
    if(contraseña.length < 6){
        $('#passwordError').show();
    }else $('#passwordError').hide();
    //Si el email no puede pasar este test pues que salte el error
    const emailPrueba = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPrueba.test(email)){
        $('#emailError').show();
    }else 
    $('#emailError').hide();
})

