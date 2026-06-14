**Cómo una página html puede presentar aleatoriamente un registro de una tabla en una hoja de Google Sheets?**

Para lograr esto, necesitamos conectar tu página HTML con Google Sheets. La forma más limpia, segura y moderna de hacerlo es usando un Google Apps Script actuando como una API (que devuelve el contenido en formato JSON) y un script en tu HTML (JavaScript) que consuma esos datos y elija una fila al azar.

Aquí tienes el paso a paso y el código listo para usar.

**Paso 1: Configurar Google Sheets y el Apps Script**

Abre tu hoja de Google Sheets y asegúrate de que la primera fila tenga los encabezados (por ejemplo: ID, Frase, Autor).

En el menú superior, ve a Extensiones > Apps Script.

Borra el código que aparece por defecto y pega el siguiente script:

***Código.gs***

**Implementar como Web App:**

Haz clic en el botón Implementar (arriba a la derecha) y selecciona Nueva implementación.

En el tipo de implementación, elige Aplicación web.

Configura los accesos:

Ejecutar como: Tu cuenta (yo).

Quién tiene acceso: Cualquiera (esto es crucial para que tu web pueda leerlo sin autenticarse).

Haz clic en Implementar, autoriza los permisos que te pida Google y copia la URL de la aplicación web que te proporcionará al final.

**Paso 2: Crear la página HTML**

Ahora, en tu archivo HTML, usarás fetch de JavaScript para llamar a esa URL. Cada vez que la página se cargue (o se pulse un botón), el Apps Script calculará una fila aleatoria y te la enviará.

Aquí tienes un ejemplo de diseño limpio usando un botón para cargar nuevos registros sin recargar la página:

_**index.html**_

**¿Por qué esta solución es la mejor?**

💡 Ventaja Clave: Al hacer que el "sorteo" aleatorio ocurra del lado del servidor (en Google Apps Script), tu página web solo descarga un único registro cada vez. Si tuvieras 5,000 filas en tu hoja de cálculo y las descargaras todas en el HTML para elegir una con JavaScript, la página web se volvería muy lenta y pesada.
