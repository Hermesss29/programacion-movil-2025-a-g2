import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonLabel } from "@ionic/react";
import { Personas } from "./Persona.Type";
import { Enfermeros } from "./Enfermero.type";
import { Medicos } from "./Medico.type";
import { Recepcionistas } from "./Recepcionista.Type";

interface CardPersonalProps {
  title: string;
  data: Personas & Partial<Enfermeros & Medicos & Recepcionistas>; // Permite datos de Personas, Enfermeros y Medicos
  onAdd: () => void;
  onModify: () => void;
  onDelete: () => void;
  onConsult: () => void;
  children?: React.ReactNode;
}

const CardPersonal: React.FC<CardPersonalProps> = ({ title, data, onAdd, onModify, onDelete, onConsult }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonLabel>Nombre: {data.nombre}</IonLabel>
        <br />
        <IonLabel>Apellido: {data.apellido}</IonLabel>
        <br />
        <IonLabel>Edad: {data.edad}</IonLabel>
        <br />
        <IonLabel>Correo: {data.correo}</IonLabel>
        <br />
        {/* Campos adicionales para Enfermeros */}
        {data.Turno && (
          <>
            <IonLabel>Turno: {data.Turno}</IonLabel>
            <br />
          </>
        )}
        {data.AreaAtencion && (
          <>
            <IonLabel>Área de Atención: {data.AreaAtencion}</IonLabel>
            <br />
          </>
        )}
        {/* Campos adicionales para Médicos */}
        {data.Especialidad && (
          <>
            <IonLabel>Especialidad: {data.Especialidad}</IonLabel>
            <br />
          </>
        )}
        {data.Licencia && (
          <>
            <IonLabel>Licencia: {data.Licencia}</IonLabel>
            <br />
          </>
        )}
        {/* Campos adicionales para Recepcionistas */}
        {data.Horariolaboral && (
          <>
            <IonLabel>Horario Laboral: {data.Horariolaboral}</IonLabel>
            <br />
          </>
        )}
        {data.Extensiontelefonica && (
          <>
            <IonLabel>Extensión Telefónica: {data.Extensiontelefonica}</IonLabel>
            <br />
          </>
        )}
        {/* Botones para acciones */}

        
      </IonCardContent>
    </IonCard>
  );
};

export default CardPersonal;

