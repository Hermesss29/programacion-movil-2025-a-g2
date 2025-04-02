import React from "react";
import MedicoCard from "../components/MedicoCard";

const MedicoPage: React.FC = () => {
    
    const handleAdd = () => alert("Agregar");
    const handleModify = () => alert("Modificar");
    const handleDelete = () => alert("Eliminar");
    const handleConsult = () => alert("Consultar");

  return (
    <div className="card-container">
    <div className="card-item">
      <MedicoCard
        onAdd={handleAdd}
        onModify={handleModify}
        onDelete={handleDelete}
        onConsult={handleConsult}
      />
    </div>
    </div>


  );
}
export default MedicoPage;