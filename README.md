# 🌐 Servidor Node.js con Express

Este es un servidor básico construido con **Node.js** y **Express**. El proyecto incluye módulos personalizados para manejar funcionalidades específicas y una estructura modular que facilita su mantenimiento y ampliación.

## ✨ Características

- **👋 Mensaje de bienvenida**: Accede a la ruta principal para recibir un mensaje de bienvenida.
- **⏰ Hora actual**: Obtén la hora actual en formato `HH:mm:ss`.
- **📅 Fecha completa**: Obtén la fecha completa: día, fecha, mes y año.

## 🛣️ Rutas

| Ruta                          | Descripción                              |
|-------------------------------|------------------------------------------|
| `http://localhost:3000/`      | 👋 Muestra un mensaje de bienvenida: "¡Hola, y bienvenido a un servidor express con Node!" |
| `http://localhost:3000/hora`  | ⏰ Devuelve la hora actual. |
| `http://localhost:3000/fecha-completa` | 📅 Devuelve la fecha completa. |

## 📂 Estructura del Proyecto

```plaintext
├── modules/
│   ├── app.js         // Lógica relacionada con el mensaje de bienvenida.
│   ├── time.js        // Lógica relacionada con la hora y fecha.
├── index.js           // Punto de entrada principal del servidor.
├── package.json       // Dependencias y configuración del proyecto.
├── README.md          // Documentación del proyecto.
