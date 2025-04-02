import React from "react";
import EnfermeroCard from "../components/EnfermeroCard";

const EnfermeroPage: React.FC = () => {
  const handleAdd = () => alert("Agregar Enfermero");
  const handleModify = () => alert("Modificar Enfermero");
  const handleDelete = () => alert("Eliminar Enfermero");
  const handleConsult = () => alert("Consultar Enfermero");

  return (
    <div className="card-container">
      <div className="card-item">
     <EnfermeroCard 
        onAdd={handleAdd}
        onModify={handleModify}
        onDelete={handleDelete}
        onConsult={handleConsult}
      />
      </div>
      </div>
  );
};
export default EnfermeroPage;