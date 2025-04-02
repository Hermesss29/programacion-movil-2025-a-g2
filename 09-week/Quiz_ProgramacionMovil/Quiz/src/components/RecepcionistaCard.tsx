import React, { useState } from "react";
import CardPersonal from "./CardPersonal";
import { Personas } from "./Persona.Type";
import { Recepcionistas } from "./Recepcionista.Type";// Importamos la interfaz Recepcionistas

interface RecepcionistaProps {
  onAdd: (data: Personas & Recepcionistas) => void;
  onModify: () => void;
  onDelete: () => void;
  onConsult: () => void;
}

const RecepcionistaCard: React.FC<RecepcionistaProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState<Personas & Recepcionistas>({
    nombre: "",
    apellido: "",
    edad: 0,
    correo: "",
    Horariolaboral: "",
    Extensiontelefonica: "",
  });

  const [recepcionistas, setRecepcionistas] = useState<(Personas & Recepcionistas)[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Actualizar recepcionista existente
      const updatedRecepcionistas = [...recepcionistas];
      updatedRecepcionistas[editingIndex] = formData;
      setRecepcionistas(updatedRecepcionistas);
      setEditingIndex(null);
      alert("Información actualizada correctamente");
    } else {
      // Agregar nuevo recepcionista
      setRecepcionistas([...recepcionistas, formData]);
      onAdd(formData);
      alert("Información agregada correctamente");
    }
    setFormData({
      nombre: "",
      apellido: "",
      edad: 0,
      correo: "",
      Horariolaboral: "",
      Extensiontelefonica: "",
    });
  };

  const handleEdit = (index: number) => {
    setFormData(recepcionistas[index]);
    setEditingIndex(index);
  };

  const handleConsult = (index: number) => {
    alert(`Información del recepcionista ${index + 1}: ${JSON.stringify(recepcionistas[index], null, 2)}`);
  };

  const handleDelete = (index: number) => {
    const updatedRecepcionistas = recepcionistas.filter((_, i) => i !== index);
    setRecepcionistas(updatedRecepcionistas);
    alert("Recepcionista eliminado correctamente");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <h2>Gestión de Recepcionistas</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "80%" }}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "80%" }}
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "80%" }}
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "80%" }}
          />
        </div>
        <div>
          <label>Horario Laboral:</label>
          <input
            type="text"
            name="Horariolaboral"
            value={formData.Horariolaboral}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "80%" }}
          />
        </div>
        <div>
          <label>Extension Telefonica:</label>
          <input
            type="text"
            name="Extensiontelefonica"
            value={formData.Extensiontelefonica}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "80%" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {editingIndex !== null ? "Actualizar" : "Agregar"}
        </button>
      </form>

      <h3>Lista de Recepcionistas</h3>
      {recepcionistas.map((recepcionista, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <CardPersonal
            title={`Recepcionista ${index + 1}`}
            data={recepcionista}
            onAdd={() => {}}
            onModify={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
            onConsult={() => alert(`Consultando datos de ${recepcionista.nombre}`)}
          />
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
            <button
              onClick={() => handleEdit(index)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#ffc107",
                color: "black",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Editar
            </button>
            <button
              onClick={() => handleConsult(index)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#17a2b8",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Consultar
            </button>
            <button
              onClick={() => handleDelete(index)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecepcionistaCard;