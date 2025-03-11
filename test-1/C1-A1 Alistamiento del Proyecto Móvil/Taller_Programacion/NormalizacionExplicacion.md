# Normalización hasta la 3NF (Tercera Forma Normal) con Justificación

### 🔸 1NF (Primera Forma Normal)
**Requisitos:**
- Eliminar grupos repetitivos y asegurar que cada campo contiene valores atómicos (no listas o conjuntos).
- Cada tabla tiene una clave primaria.

**Situación:**
- Todas las tablas cumplen con la 1NF porque:
   - Cada columna tiene valores indivisibles (no listas).
   - Tienen claves primarias (ejemplo: `id_usuario` en **Usuarios**, `id_vuelo` en **Vuelos**).

---

### 🔸 2NF (Segunda Forma Normal)
**Requisitos:**
- Cumplir con la 1NF.
- Eliminar dependencias parciales: todas las columnas deben depender completamente de la clave primaria.

**Situación:**
- Cumplimos la 2NF porque:
   - No hay claves compuestas.
   - Cada columna depende directamente de su clave primaria.

---

### 🔸 3NF (Tercera Forma Normal)
**Requisitos:**
- Cumplir con la 2NF.
- No debe haber **dependencias transitivas**.

**Situación:**
- Cumplimos la 3NF porque:
   - No hay dependencias transitivas.

---

### 🔸 Conclusión: Normalización hasta la 3NF
El modelo está correctamente normalizado hasta la **3NF** porque:
1. No tiene datos redundantes innecesarios.
2. Cada dato depende **únicamente** de su clave primaria.
3. Se evita la actualización y eliminación anómala.

Esto mejora la eficiencia y mantiene la **integridad de los datos** en la base de datos. 🚀😎
