import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="page-title">Gestión de Personal Médico</IonTitle>
          <IonButtons slot="end">
            {/* Botón para ir a la página de Médicos */}
            <IonButton routerLink="/medicos">Médicos</IonButton>
            {/* Botón para ir a la página de Enfermeros */}
            <IonButton routerLink="/enfermeros">Enfermeros</IonButton>
            {/* Botón para ir a la página de Recepcionistas */}
            <IonButton routerLink="/recepcionistas">Recepcionistas</IonButton>
            {/* Botón para ir a la página de Pacientes */}
            <IonButton routerLink="/pacientes">Pacientes</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="home-content" style={{ textAlign: "center", padding: "20px" }}>
          <h2>Bienvenido a la Gestión de Personal Médico</h2>
          <p>Utiliza los botones del encabezado para navegar entre las páginas de Médicos y Enfermeros.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
