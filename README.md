📄 Portafolio de Adrián Jiménez

Este es mi portafolio personal, diseñado para mostrar mi experiencia, habilidades, proyectos y formas de contacto.
Incluye animaciones modernas, diseño responsivo y una implementación completamente local de Tailwind CSS, garantizando que funcione incluso si servicios externos fallan.

🚀 Tecnologías utilizadas

HTML5

CSS3 + estilos personalizados

Tailwind CSS 4 (compilado local)

JavaScript Vanilla

Canvas API (animaciones de partículas)

Node.js / npm

Devicon (iconos de tecnologías)

🎯 Objetivos del proyecto

✔ Crear un portafolio moderno y visualmente atractivo
✔ Mantener funcionalidad totalmente offline
✔ Incluir animaciones fluidas y profesionales
✔ Asegurar diseño completamente responsive
✔ Mantener una estética elegante basada en negro + dorado

🛠️ Historial técnico de mejoras
1. Migración total a Tailwind local

Se reemplazó el CDN por una instalación real:

npm install -D tailwindcss postcss autoprefixer


Compilación en tiempo real:

tailwindcss -i ./src/input.css -o ./dist/output.css --watch


✔ El proyecto ahora funciona sin depender de Cloudflare ni servicios externos.

2. Estructura del proyecto organizada
CV_Portafolio/
 ├─ assets/
 ├─ css/
 │   └─ styles.css
 ├─ dist/
 │   └─ output.css
 ├─ js/
 │   └─ app.js
 ├─ src/
 │   └─ input.css
 ├─ index.html
 ├─ package.json
 ├─ tailwind.config.js

3. Tailwind config personalizado

Incluye:

colores extendidos

animaciones (slide-in, card-hover, fade-in)

keyframes personalizados

soporte para scroll-animate

4. Animaciones de scroll

Se usa IntersectionObserver para:

fade-in progresivo

aparecimiento por secciones

animaciones suaves en tarjetas

efectos “stagger” entre elementos

Todo desde app.js.

5. Sistema de partículas

Implementado con Canvas API:

🌌 Partículas de fondo

movimiento vertical

color dorado premium

rendimiento optimizado

✨ Partículas que siguen al cursor

rastro dinámico

desvanecimiento suave

dispersión leve

centrado en la experiencia del usuario

6. Limpieza y refactor del HTML

Actualización a:

clases Tailwind en todo el diseño

sombras, brillos y gradientes unificados

textos con gradient-text

tarjetas con hover-glow

secciones más limpias y mejor organizadas

7. Responsividad garantizada

Gracias a Tailwind (mobile-first):

perfecto en móviles

excelente en tablets

compatible con monitores ultra-wide

canvas adaptado automáticamente al viewport

Tus antiguas media queries personalizadas también siguen funcionando.

📱 Comportamiento en móviles

✔ Diseño responsive
✔ Animaciones suaves
✔ Fondo animado activo
✖ Rastro del cursor no aparece (no hay cursor)
(Se puede activar con touchmove si lo deseas)

💾 Ventajas de Tailwind local

Sin caídas si falla Cloudflare

No depende de internet

GitHub Pages lo sirve sin problemas

Mayor velocidad

Entorno profesional de desarrollo

🧪 Modo desarrollo

Instalar dependencias:

npm install


Compilar Tailwind:

tailwindcss -i ./src/input.css -o ./dist/output.css --watch


Abrir index.html en el navegador.

🌐 Despliegue en GitHub Pages

Subir el repo

Settings → Pages

Source: main branch

Folder: /root

Guardar

👨‍💻 Autor

Adrián Jiménez
Full Stack Web Developer

GitHub: https://github.com/Hunter2801a

Instagram: @jimenez_adrian

LinkedIn: Adrian Jimenez

📌 Nota final

Si deseas agregar:

vistas previas (screenshots)

cambios por versión

un roadmap

badges de tecnologías

una sección “antes vs después”

✨ Te los preparo sin problema.

💡 ¿Sabías que…?

El sistema de partículas que usamos sigue los mismos principios matemáticos que los motores de físicas utilizados en videojuegos AAA, solo que optimizado para la web.