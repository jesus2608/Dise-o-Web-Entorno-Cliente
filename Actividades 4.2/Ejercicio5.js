$('#searchInput').on('input',function(){
    let producto = ($('#searchInput').val());
    let producto1;
    let categoria = $('#categoryFilter').val().toLowerCase();
    let categoria1;
  
    $(".product").each(function(){
        producto1 = $(this).find('h3').text().toLowerCase();
        categoria1 = $(this).data('category');
        if(producto1.includes(producto)&&categoria1.includes(categoria)){
            $(this).fadeIn();
        }else 
        $(this).fadeOut()

    })

    // 
})
