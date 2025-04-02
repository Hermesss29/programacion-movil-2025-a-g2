import React from "react";
import RecepcionistaCard from "../components/RecepcionistaCard";


const RecepcionistaPage: React.FC = () => {
    
    const handleAdd = () => alert("Agregar");
    const handleModify = () => alert("Modificar");
    const handleDelete = () => alert("Eliminar");
    const handleConsult = () => alert("Consultar");

  return (
    <div className="card-container">
    <div className="card-item">
      <RecepcionistaCard
        onAdd={handleAdd}
        onModify={handleModify}
        onDelete={handleDelete}
        onConsult={handleConsult}
      />
    </div>
    </div>


  );
}

export default RecepcionistaPage;
