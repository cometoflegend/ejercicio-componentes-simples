import React, { useState } from 'react';
import { useRef } from 'react';

function FormularioNombre() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMensaje("¡Hola, "+nombre+"!");
  };
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Ingrese su nombre" />
      <button type="submit">Enviar</button>
      
    </form>
    <h1>{mensaje}</h1>
    </div>
  );
}

  export default FormularioNombre;