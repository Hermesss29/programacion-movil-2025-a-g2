# Gestión de Personal Médico

Este proyecto es una aplicación desarrollada con **React** y **Ionic** que permite gestionar el personal de un centro médico. Incluye funcionalidades para agregar, modificar, eliminar y consultar información de diferentes roles: médicos, enfermeros, recepcionistas y pacientes.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes](#componentes)
  - [CardPersonal](#cardpersonal)
  - [MedicoCard](#medicocard)
  - [EnfermeroCard](#enfermerocard)
  - [RecepcionistaCard](#recepcionistacard)
  - [PacienteCard](#pacientecard)
- [Páginas](#páginas)
  - [Home](#home)
- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Autor](#autor)

---

## Descripción

La aplicación permite gestionar el personal médico de un centro de salud. Cada rol tiene campos específicos y acciones que se pueden realizar, como agregar, modificar, eliminar y consultar información.

### Roles y Campos

| Rol             | Campos Adicionales                     |
|------------------|----------------------------------------|
| **Médico**      | Especialidad, Número de licencia médica |
| **Enfermero**    | Turno asignado, Área de atención        |
| **Recepcionista**| Horario laboral, Extensión telefónica  |
| **Paciente**     | Número de historia clínica, Tipo de afiliación |

---


## Componentes

## CardPersonal

Este componente es reutilizable y sirve como base para los demás roles. Muestra información básica como nombre, apellido, edad y correo, además de botones para realizar acciones.

**Props:**
- `title`: Título de la tarjeta.
- `data`: Información de la persona.
- `onAdd`: Función para agregar.
- `onModify`: Función para modificar.
- `onDelete`: Función para eliminar.
- `onConsult`: Función para consultar.

---

## MedicoCard

Componente específico para los médicos. Extiende `CardPersonal` y añade los campos:
- **Especialidad**
- **Número de licencia médica**

---

### EnfermeroCard

Componente específico para los enfermeros. Extiende `CardPersonal` y añade los campos:
- **Turno asignado**
- **Área de atención**

---

### RecepcionistaCard

Componente específico para los recepcionistas. Extiende `CardPersonal` y añade los campos:
- **Horario laboral**
- **Extensión telefónica**

---

### PacienteCard

Componente específico para los pacientes. Extiende `CardPersonal` y añade los campos:
- **Número de historia clínica**
- **Tipo de afiliación**

---

## Páginas

## Home

La página principal de la aplicación. Muestra las tarjetas de cada rol con datos de ejemplo y botones funcionales.

**Archivo:** `src/pages/Home.tsx`





