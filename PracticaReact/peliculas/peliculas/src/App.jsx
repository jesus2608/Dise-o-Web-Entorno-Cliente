import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// const [peliculas, setPelicula]= useState([
  // {nombre: "Van Helsing", favorito:false},
  // {nombre:"Fue a por trabajo y le comieron lo de abajo", favorito: false}
// ])
const [peliculas, setPelicula]=useState(()=>{
  const peliculasGuardadas = localStorage.getItem("peliculas");
  return peliculasGuardadas?JSON.parse(peliculasGuardadas):[  {nombre: "Van Helsing", favorito:false},
    {nombre:"Fue a por trabajo y le comieron lo de abajo", favorito: false}]
})
const [nuevaPelicula, setNuevaPelicula]=useState("");
useEffect(()=>{
  localStorage.setItem("peliculas", JSON.stringify(peliculas))
}, [peliculas])
const agregarFunction = (event)=>{
  event.preventDefault();
  if(nuevaPelicula.trim()==="") return;
  setPelicula([...peliculas, {nombre: nuevaPelicula, favorito: false}]);
  setNuevaPelicula("");
}
const hakai = (index)=>{
  const peliculaBorrar = peliculas.filter((_,i)=>i!==index);
  setPelicula(peliculaBorrar);
}
const marcaFavoarito= (index)=>{
  const nuevasPeliculas = [...peliculas];
  nuevasPeliculas[index].favorito= !nuevasPeliculas[index].favorito;
  setPelicula(nuevasPeliculas);
}
  return (
    <div>
    <h1>
    Mis peliculas favs</h1>
    <p>Total de peliculas: {peliculas.length }</p>
    <ul>
      {
        peliculas.map((pelicula, index )=>(<li key={index}>{pelicula.nombre} <button onClick={()=>hakai(index)}>Borrar</button>
        <button onClick={()=>marcaFavoarito(index)}>{pelicula.favorito?"💙":'🤍'}</button>
        </li>))
      }
    </ul>
    <form onSubmit={agregarFunction}>
      <input type="text" value={nuevaPelicula}
      onChange={(event)=>setNuevaPelicula(event.target.value)} placeholder='Añade una nueva pelicula' />
   <button type="submit">
      Añadir
    </button>
    
    </form>
  
    </div>)
  }


export default App
