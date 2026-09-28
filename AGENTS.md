## Proyecto

Tiki Hostel Ometepe es un sitio web informativo y promocional para un hostal ubicado en Playa Santa Cruz, Isla de Ometepe, Nicaragua. Presentará el hostal, sus alojamientos, espacios, servicios, actividades, fotografías e información útil.

Los botones de contacto dirigirán a WhatsApp, redes sociales, Booking y Airbnb según corresponda.

Esta versión no incluye ni implementará un sistema propio de reservas, pagos, autenticación, gestión de usuarios, base de datos, backend ni API.

## Stack aprobado

- Astro.
- TypeScript.
- CSS personalizado.
- JavaScript y TypeScript.
- Astro View Transitions.
- GSAP y ScrollTrigger únicamente cuando exista una necesidad real que no se resuelva adecuadamente con las herramientas existentes.
- Componentes propios.

No introducir React, Tailwind, Bootstrap ni otras tecnologías sin una justificación técnica concreta. Antes de añadir una librería, evaluar si el requisito puede resolverse con las herramientas ya disponibles.

## Diseño

Existe una propuesta visual de Figma aprobada aproximadamente en un 80 %. Su estructura y estética general son la referencia principal del desarrollo.

Priorizar la fidelidad al diseño aprobado, la calidad visual, el diseño responsive y la consistencia entre componentes. No modificar arbitrariamente decisiones visuales aprobadas. Si una limitación técnica exige alterar significativamente el diseño, detenerse y consultarlo antes.

## Contenido

No inventar información comercial, tarifas, servicios, características, políticas, reseñas, contactos ni otros datos del hostal. Si falta información, utilizar un marcador provisional claramente identificable o consultar antes de completar el contenido.

## Implementación

Priorizar:

- Código limpio y mantenible.
- Componentización razonable.
- Diseño responsive real.
- Accesibilidad.
- SEO.
- Rendimiento.
- Simplicidad.

Evitar la sobreingeniería y las dependencias innecesarias. Utilizar CSS para animaciones sencillas y Astro View Transitions cuando corresponda. Recurrir a GSAP y ScrollTrigger solo cuando una animación necesite capacidades que CSS o Astro no proporcionen adecuadamente. Las animaciones deben mejorar la experiencia sin perjudicar el rendimiento, la accesibilidad ni la usabilidad.

## Metodología

Antes de realizar cambios importantes:

1. Inspeccionar el estado actual del proyecto.
2. Comprender cómo encaja el cambio con la arquitectura existente.
3. Proponer un plan cuando la tarea tenga un alcance significativo.
4. Implementar de forma incremental.
5. Verificar que el proyecto siga funcionando.

Si una tarea requiere una decisión de negocio, diseño o arquitectura que no esté definida, no asumirla arbitrariamente: informar y consultar.

## Desarrollo

Al iniciar el servidor de desarrollo, utilizar el modo en segundo plano:

```sh
astro dev --background
```

Gestionar el servidor en segundo plano con `astro dev stop`, `astro dev status` y `astro dev logs`.

## Documentación

Documentación completa: https://docs.astro.build

Consultar estas guías antes de trabajar en las áreas correspondientes:

- [Páginas, rutas dinámicas y middleware](https://docs.astro.build/en/guides/routing/)
- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [Componentes de frameworks](https://docs.astro.build/en/guides/framework-components/)
- [Gestión de contenido](https://docs.astro.build/en/guides/content-collections/)
- [Estilos y Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internacionalización](https://docs.astro.build/en/guides/internationalization/)
