fetch(' https://jsonplaceholder.typicode.com/albums')
.then(response=>response.json())
.then(data=>{
    let album = data.filter(album=> album.userId===3);
    for (let index = 0; index < album.length; index++) {
        console.log(album[index].title);
    }
}).catch(error=>console.error('ESTO PETA PORQUE NO HAY SERVIDOR',error))
