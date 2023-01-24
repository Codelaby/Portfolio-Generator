# Portfolio Generator
Es una herramienta que permite generar una página web de portafolio personalizada utilizando Python y el sistema de plantillas Jinja2.

## Características
Genera una página web personalizada utilizando plantillas `Jinja2`.
Utiliza un archivo datasource.json para almacenar los datos del usuario.
Ofrece una interfaz de línea de comando para facilitar el uso de la herramienta.

## Requisitos previos
 - Tener instalado Python 3.6 o superior.
 - Tener instaladas las siguientes dependencias:
 - sty
 - inquirer
 
## Instalación
Clonar este repositorio en su máquina local.
Instalar las dependencias necesarias mediante `pip`. Ejecutando en la consola:

```bash
pip install -r requirements.txt
```

## Configuración
Dentro de la carpeta `mainpage` se encuentran los archivos de estilo, recursos gráficos, se pueden customizar de la siguiente manera:

**Imágenes**

Las imágenes del portafolio se encuentran dentro de la carpeta "img" en el proyecto. Esta carpeta contiene todas las imágenes necesarias para el diseño y contenido del portafolio. También se encuentra en esta carpeta el favicon, que es el icono que aparece en la pestaña del navegador, para generarlo se puede usar una herramienta online.

Existen varias herramientas en línea gratuitas que se pueden utilizar para generar un favicon a partir de una imagen. Estas herramientas suelen permitir elegir el tamaño y formato del favicon, y generar los diferentes tamaños necesarios para distintos dispositivos.

https://www.favicon-generator.org/

Una vez generado el favicon, se debe colocar en la carpeta "img" junto con las demás imágenes del portafolio.

**Paleta de colores**

Generar una paleta de colores es esencial para asegurar un diseño coherente y atractivo en un portafolio. Una forma de hacerlo es mediante el uso de una herramienta online llamada Material Theme Builder.

https://m3.material.io/theme-builder#/custom

Esta herramienta permite generar una paleta de colores siguiendo las pautas de Material Design. Una vez generada la paleta, se pueden copiar los colores en las variables dentro del archivo css/styles.css. Esto permitirá aplicar los colores en el diseño del portafolio de manera consistente y fácil de modificar.

Para aplicar los colores del tema claro, se utiliza el bloque `:root`, que es el elemento raíz del documento y se aplica a toda la página. En este bloque se especifican las variables de color para el tema claro.

Para aplicar los colores del tema oscuro, se utiliza el bloque `html[data-theme='dark']`, en este bloque se especifican las variables de color para el tema oscuro.

**Datos para el portfolio**
El usuario debe proporcionar los datos necesarios para generar su página web en un archivo `datasource.json`.
Edite ese archivo con sus datos.

## Generar el portafolio
Dentro de la carpeta `tools` se encuentra la herramienta de generación del portafolio.

Proporcione los datos necesarios para generar su página web en el archivo `datasource.json`.

Ejecute el script `portfolio_generator.py` en su consola.
```bash
python portfolio_generator.py
```
Siga las instrucciones proporcionadas por la interfaz de línea de comando para generar su página web.

## Alojar el portafolio
Para subir el portafolio a producción en un servidor remoto, es necesario subir el archivo generado `index.html' y la carpeta `mainpage` dentro de esta carpeta se encuentra otras carpertas que contienen todos los archivos necesarios para el correcto funcionamiento del portafolio, como hojas de estilo, imágenes, scripts y recursos.

Para subir estos archivos al servidor remoto se puede utilizar herramientas de transferencia de archivos como FTP, SFTP o Git. Es importante tener en cuenta que se debe seguir las instrucciones específicas del servidor remoto para configurar el acceso y subir los archivos correctamente.

## Demostración
Para ver el resultado de la generación de contenido del portafolio, puede consultar mi portafolio generado con esa plantilla en https://codelaby.es

## Sigueme!
Para mantenerse al día con las últimas novedades y recursos de desarrollo, me pueden seguir en Twitter bajo el nombre de usuario [@Codelaby](https://twitter.com/Codelaby "Codelaby in twitter").

Allí publico información relevante y útil para desarrolladores, así como tutoriales y consejos para mejorar sus habilidades de programación. ¡Los espero allí!

## Mis Apps para Android
Si está interesado en ver mis aplicaciones para Android, puede hacerlo en la siguiente url [Google Play](https://play.google.com/store/apps/dev?id=8979891956711794454). Allí encontrará una lista de mis aplicaciones publicadas en la tienda de Google Play.
