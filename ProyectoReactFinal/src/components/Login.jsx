import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === "toranzo" && password === "churros") {
      login(); 
    } else {
      alert("Credenciales incorrectas. Prueba a meter el nombre de nuestro jefe departamento y la comida que le gusta");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;