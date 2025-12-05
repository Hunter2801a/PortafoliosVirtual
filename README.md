#  Portafolio de Adrián Jiménez

Este es mi portafolio personal, diseñado para mostrar mi experiencia, habilidades, proyectos y formas de contacto.

Incluye animaciones modernas, diseño responsivo y una implementación completamente local de **Tailwind CSS**, garantizando que funcione incluso si servicios externos fallan.

---

##  Tecnologías utilizadas

- **HTML5**
- **CSS3** + estilos personalizados
- **Tailwind CSS 4** (compilado local)
- **JavaScript Vanilla**
- **Canvas API** (animaciones de partículas)
- **Node.js / npm**
- **Devicon** (iconos de tecnologías)

---

##  Objetivos del proyecto

-  Crear un portafolio moderno y visualmente atractivo
-  Mantener funcionalidad totalmente offline
-  Incluir animaciones fluidas y profesionales
-  Asegurar diseño completamente responsive
-  Mantener una estática elegante basada en **negro + dorado**

---

##  Historial técnico de mejoras

### 1. Migración total a Tailwind local

Se reemplazó el CDN por una instalación real:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Compilación en tiempo real:

```bash
tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

 El proyecto ahora funciona sin depender de Cloudflare ni servicios externos.

---

### 2. Estructura del proyecto organizada

```
CV_Portafolio/
 assets/
 css/
    styles.css
 dist/
    output.css
 js/
    app.js
 src/
    input.css
 index.html
 package.json
 tailwind.config.js
```

---

### 3. Tailwind config personalizado

Incluye:

- Colores extendidos
- Animaciones (`slide-in`, `card-hover`, `fade-in`)
- Keyframes personalizados
- Soporte para `scroll-animate`

---

### 4. Animaciones de scroll

Se usa `IntersectionObserver` para:

- Fade-in progresivo
- Aparecimiento por secciones
- Animaciones suaves en tarjetas
- Efectos "stagger" entre elementos

> Todo desde `app.js`.

---

### 5. Sistema de partículas

Implementado con **Canvas API**:

####  Partículas de fondo
- Movimiento vertical
- Color dorado premium
- Rendimiento optimizado

####  Partículas que siguen al cursor
- Rastro dinámico
- Desvanecimiento suave
- Dispersión leve
- Centrado en la experiencia del usuario

---

### 6. Limpieza y refactor del HTML

Actualización a:

- Clases Tailwind en todo el diseño
- Sombras, brillos y gradientes unificados
- Textos con `gradient-text`
- Tarjetas con `hover-glow`
- Secciones más limpias y mejor organizadas

---

### 7. Responsividad garantizada

Gracias a Tailwind (mobile-first):

-  Perfecto en móviles
-  Excelente en tablets
-  Compatible con monitores ultra-wide
-  Canvas adaptado automóticamente al viewport

> Tus antiguas media queries personalizadas también siguen funcionando.

---

##  Comportamiento en móviles

| Característica | Estado |
|----------------|--------|
| Diseño responsive |  |
| Animaciones suaves |  |
| Fondo animado activo |  |
| Rastro del cursor |  (no hay cursor) |

> Se puede activar con `touchmove` si lo deseas.

---

##  Ventajas de Tailwind local

-  Sin caídas si falla Cloudflare
-  No depende de internet
-  GitHub Pages lo sirve sin problemas
-  Mayor velocidad
-  Entorno profesional de desarrollo

---

##  Modo desarrollo

1. **Instalar dependencias:**

   ```bash
   npm install
   ```

2. **Compilar Tailwind:**

   ```bash
   tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```

3. **Abrir `index.html` en el navegador.**

---

##  Autor

**Adrián Jiménez**  
*Full Stack Web Developer*

-  **GitHub:** [Hunter2801a](https://github.com/Hunter2801a)
-  **Instagram:** [@jimenez_adrian](https://www.instagram.com/jimenez_adrian/)
-  **LinkedIn:** [Adrian Jimenez](https://www.linkedin.com/in/adrian-jimenez-a6010138a/)

---