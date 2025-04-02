import React, { useState } from "react";
import CardPersonal from "./CardPersonal";
import { Personas } from "./Persona.Type";
import { Medicos } from "./Medico.type";

interface MedicoProps {
  onAdd: (data: Personas & Medicos) => void;
  onModify: () => void;
  onDelete: () => void;
  onConsult: () => void;
}

const MedicoCard: React.FC<MedicoProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState<Personas & Medicos>({
    nombre: "",
    apellido: "",
    edad: 0,
    correo: "",
    Especialidad: "",
    Licencia: "",
  });

  const [medicos, setMedicos] = useState<(Personas & Medicos)[]>([]); // Lista de médicos
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Índice del médico en edición

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Actualizar médico existente
      const updatedMedicos = [...medicos];
      updatedMedicos[editingIndex] = formData;
      setMedicos(updatedMedicos);
      setEditingIndex(null);
      alert("Información actualizada correctamente");
    } else {
      // Agregar nuevo médico
      setMedicos([...medicos, formData]);
      onAdd(formData);
      alert("Información agregada correctamente");
    }
    setFormData({
      nombre: "",
      apellido: "",
      edad: 0,
      correo: "",
      Especialidad: "",
      Licencia: "",
    });
  };

  const handleEdit = (index: number) => {
    setFormData(medicos[index]);
    setEditingIndex(index);
  };

  const handleConsult = (index: number) => {
    alert(`Información del médico ${index + 1}: ${JSON.stringify(medicos[index], null, 2)}`);
  };

  const handleDelete = (index: number) => {
    const updatedMedicos = medicos.filter((_, i) => i !== index);
    setMedicos(updatedMedicos);
    alert("Médico eliminado correctamente");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <h2>Gestión de Médicos</h2>
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
          <label>Especialidad:</label>
          <input
            type="text"
            name="Especialidad"
            value={formData.Especialidad}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "80%" }}
          />
        </div>
        <div>
          <label>Licencia:</label>
          <input
            type="text"
            name="Licencia"
            value={formData.Licencia}
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

      <h3>Lista de Médicos</h3>
      {medicos.map((medico, index) => (
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
            title={`Médico ${index + 1}`}
            data={medico}
            onAdd={() => {}}
            onModify={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
            onConsult={() => alert(`Consultando datos de ${medico.nombre}`)}
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

export default MedicoCard;