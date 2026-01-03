# DECS APPS - Digital Empire Cabrales Silvente

Este proyecto es una tienda de aplicaciones móvil (App Store) minimalista y de alto rendimiento, diseñada para funcionar sin servidores backend tradicionales, utilizando la infraestructura de **GitHub** para el almacenamiento y distribución de binarios.

## 🚀 Estructura del Proyecto

El proyecto está diseñado de forma modular y "serverless":

* `index.html`: Estructura semántica de la tienda y contenedor dinámico.
* `style.css`: Interfaz de usuario (UI) basada en una estética "Premium Dark" con acentos plateados y tipografía *Inter*.
* `script.js`: El "motor" de la tienda. Utiliza la Fetch API para consultar los lanzamientos de GitHub y renderizar las aplicaciones en tiempo real.
* `/assets`: Carpeta destinada a guardar el logo de la marca (`logo-decs.png`) y otros recursos visuales.

## 🛠️ Cómo funciona el sistema

La tienda no utiliza una base de datos externa. En su lugar, utiliza **GitHub Releases** como sistema de gestión de contenidos (CMS):
1.  **Metadatos:** El nombre de la app y la versión se extraen del título y tag de la Release.
2.  **Descripción:** El cuerpo de texto de la Release en GitHub se muestra como la descripción de la app.
3.  **Binarios:** El archivo `.apk` se sirve directamente desde los servidores de GitHub.
4.  **Iconografía:** El script busca un archivo llamado `icon.png` o `icon.jpg` dentro de la Release para usarlo como miniatura.

## 📤 Proceso de Subida de Apps (Workflow)

Para añadir una nueva aplicación a la tienda, sigue estos pasos:

1.  **Preparación:** Compila tu aplicación y genera el archivo `.apk`. Asegúrate de tener una imagen de 512x512px llamada `icon.png`.
2.  **Crear Release:** Ve a la sección **Releases** de tu repositorio en GitHub y haz clic en "Draft a new release".
3.  **Tag y Título:** * Usa un tag de versión (ej: `v1.0.5`).
    * En el título, pon el nombre de la App (ej: "Calculadora DECS").
4.  **Descripción:** Escribe las notas de la versión o descripción en el cuadro de texto.
5.  **Carga de Archivos:** Arrastra y suelta el archivo `.apk` y la imagen `icon.png` al área de "Attach binaries".
6.  **Publicar:** Haz clic en "Publish release". 

La tienda se actualizará automáticamente en pocos segundos reflejando los cambios.

---
© 2025 **Digital Empire Cabrales Silvente** - Innovación en distribución de software.