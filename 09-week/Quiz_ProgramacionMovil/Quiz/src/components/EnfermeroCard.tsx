import React, { useState } from "react";
import CardPersonal from "./CardPersonal";
import { Personas } from "./Persona.Type";
import { Enfermeros } from "./Enfermero.type";

interface EnfermeroProps {
  onAdd: (data: Personas & Enfermeros) => void;
  onModify: () => void;
  onDelete: () => void;
  onConsult: () => void;
}

const EnfermeroCard: React.FC<EnfermeroProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState<Personas & Enfermeros>({
    nombre: "",
    apellido: "",
    edad: 0,
    correo: "",
    Turno: "",
    AreaAtencion: "",
  });

  const [enfermeros, setEnfermeros] = useState<(Personas & Enfermeros)[]>([]); // Lista de enfermeros
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Índice del enfermero en edición

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Actualizar enfermero existente
      const updatedEnfermeros = [...enfermeros];
      updatedEnfermeros[editingIndex] = formData;
      setEnfermeros(updatedEnfermeros);
      setEditingIndex(null);
      alert("Información actualizada correctamente");
    } else {
      // Agregar nuevo enfermero
      setEnfermeros([...enfermeros, formData]);
      onAdd(formData);
      alert("Información agregada correctamente");
    }
    setFormData({
      nombre: "",
      apellido: "",
      edad: 0,
      correo: "",
      Turno: "",
      AreaAtencion: "",
    });
  };

  const handleEdit = (index: number) => {
    setFormData(enfermeros[index]);
    setEditingIndex(index);
  };

  const handleConsult = (index: number) => {
    alert(`Información del enfermero ${index + 1}: ${JSON.stringify(enfermeros[index], null, 2)}`);
  };

  const handleDelete = (index: number) => {
    const updatedEnfermeros = enfermeros.filter((_, i) => i !== index);
    setEnfermeros(updatedEnfermeros);
    alert("Enfermero eliminado correctamente");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <h2>Gestión de Enfermeros</h2>
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
          <label>Turno:</label>
          <input
            type="text"
            name="Turno"
            value={formData.Turno}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "80%" }}
          />
        </div>
        <div>
          <label>Área-Atención:</label>
          <input
            type="text"
            name="AreaAtencion"
            value={formData.AreaAtencion}
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

      <h3>Lista de Enfermeros</h3>
      {enfermeros.map((enfermero, index) => (
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
            title={`Enfermero ${index + 1}`}
            data={enfermero}
            onAdd={() => {}}
            onModify={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
            onConsult={() => alert(`Consultando datos de ${enfermero.nombre}`)}
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

export default EnfermeroCard;
