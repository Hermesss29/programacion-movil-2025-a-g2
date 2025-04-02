import React, { useState } from "react";
import { IonButton } from "@ionic/react";
import { Personas } from "./Persona.Type";

const Buttons: React.FC = () => {
  const [personas, setPersonas] = useState<Personas[]>([]); // Lista de personas
  const [formData, setFormData] = useState<Personas>({
    nombre: "",
    apellido: "",
    edad: 0,
    correo: "",
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Índice de edición

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onAdd = () => {
    if (editingIndex !== null) {
      // Actualizar persona existente
      const updatedPersonas = [...personas];
      updatedPersonas[editingIndex] = formData;
      setPersonas(updatedPersonas);
      setEditingIndex(null);
      alert("Persona actualizada correctamente");
    } else {
      // Agregar nueva persona
      setPersonas([...personas, formData]);
      alert("Persona agregada correctamente");
    }
    setFormData({ nombre: "", apellido: "", edad: 0, correo: "" }); // Limpiar formulario
  };

  const onModify = (index: number) => {
    setFormData(personas[index]);
    setEditingIndex(index);
  };

  const onDelete = (index: number) => {
    const updatedPersonas = personas.filter((_, i) => i !== index);
    setPersonas(updatedPersonas);
    alert("Persona eliminada correctamente");
  };

  const onConsult = () => {
    console.log("Lista de personas:", personas);
    alert("Consulta realizada. Revisa la consola para ver los datos.");
  };

  return (
    <div>
      <h2>Gestión de Personas</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
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
          />
        </div>
        <IonButton onClick={onAdd} color="success">
          {editingIndex !== null ? "Actualizar" : "Agregar"}
        </IonButton>
      </form>

      <h3>Lista de Personas</h3>
      {personas.map((persona, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <p>
            <strong>Nombre:</strong> {persona.nombre}
          </p>
          <p>
            <strong>Apellido:</strong> {persona.apellido}
          </p>
          <p>
            <strong>Edad:</strong> {persona.edad}
          </p>
          <p>
            <strong>Correo:</strong> {persona.correo}
          </p>
          <IonButton onClick={() => onModify(index)} color="warning">
            Modificar
          </IonButton>
          <IonButton onClick={() => onDelete(index)} color="danger">
            Eliminar
          </IonButton>
        </div>
      ))}

      <IonButton onClick={onConsult} color="primary">
        Consultar
      </IonButton>
    </div>
  );
};

export default Buttons;