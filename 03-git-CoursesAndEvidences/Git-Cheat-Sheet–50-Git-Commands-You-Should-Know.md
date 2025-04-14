## COMANDOS GIT 


### Cómo verificar tu configuración de Git
El comando a continuación devuelve una lista de información sobre tu configuración de Git, incluyendo el nombre de usuario y el correo electrónico configurados:

git config -l

### Cómo configurar tu nombre de usuario en Git
Con el siguiente comando puedes configurar tu nombre de usuario:

git config --global user.name "Fabio"

### Cómo configurar tu correo electrónico en Git
Este comando te permite configurar la dirección de correo electrónico que se usará en tus commits:

git config --global user.email "signups@fabiopacifici.com"

### Cómo guardar tus credenciales de inicio de sesión en Git
Puedes almacenar las credenciales de inicio de sesión en la caché para no tener que ingresarlas cada vez. Usa el siguiente comando:

git config --global credential.helper cache

### Cómo inicializar un repositorio Git
Todo comienza aquí. El primer paso es inicializar un nuevo repositorio Git localmente en la raíz de tu proyecto. Usa el siguiente comando:

git init

### Cómo agregar un archivo al área de preparación en Git
El comando a continuación agregará un archivo al área de preparación. Reemplaza `filename_here` con el nombre del archivo que deseas agregar:

git add filename_here

### Cómo agregar todos los archivos al área de preparación en Git
Si deseas agregar todos los archivos de tu proyecto al área de preparación, puedes usar un comodín `.` y todos los archivos serán añadidos:

git add .

### Cómo agregar solo ciertos archivos al área de preparación en Git
Con el asterisco en el siguiente comando, puedes agregar todos los archivos que comiencen con 'fil' al área de preparación:

git add fil*

### Cómo verificar el estado de un repositorio en Git
Este comando mostrará el estado del repositorio actual, incluyendo archivos en el área de preparación, no preparados y no rastreados:

git status

### Cómo confirmar cambios en el editor en Git
Este comando abrirá un editor de texto en la terminal donde puedes escribir un mensaje de confirmación completo:

git commit

### Cómo confirmar cambios con un mensaje en Git
Puedes agregar un mensaje de confirmación sin abrir el editor:

git commit -m "your commit message here"

### Cómo confirmar cambios (y omitir el área de preparación) en Git
Puedes agregar y confirmar archivos rastreados con un solo comando:

git commit -a -m "your commit message here"

### Cómo ver el historial de confirmaciones en Git
Este comando muestra el historial de confirmaciones del repositorio actual:

git log

### Cómo ver el historial de confirmaciones incluyendo cambios en Git
Este comando muestra el historial de confirmaciones incluyendo todos los archivos y sus cambios:

git log -p

### Cómo ver una confirmación específica en Git
Este comando muestra una confirmación específica. Reemplaza `commit-id` con el ID de la confirmación:

git show commit-id

### Cómo ver estadísticas del historial en Git
Este comando muestra estadísticas sobre los cambios en cada confirmación, incluyendo líneas modificadas y nombres de archivos:

git log --stat

### Cómo ver cambios realizados antes de confirmarlos usando "diff" en Git
Puedes pasar un archivo como parámetro para ver cambios en un archivo específico. Por defecto, `git diff` muestra solo los cambios no preparados:

git diff  
git diff all_checks.py  
git diff --staged

### Cómo ver cambios usando "git add -p"
Este comando abre un prompt y pregunta si deseas preparar cambios o no, incluyendo otras opciones:

git add -p

### Cómo eliminar archivos rastreados del árbol de trabajo en Git
Este comando espera un mensaje de confirmación para explicar por qué se eliminó el archivo:

git rm filename

### Cómo renombrar archivos en Git
Este comando prepara los cambios y luego espera un mensaje de confirmación:

git mv oldfile newfile

### Cómo ignorar archivos en Git
Crea un archivo `.gitignore` y confírmalo.

### Cómo revertir cambios no preparados en Git
git checkout filename

### Cómo revertir cambios preparados en Git
Puedes usar la opción `-p` para especificar los cambios que deseas restablecer:

git reset HEAD filename  
git reset HEAD -p

### Cómo modificar la confirmación más reciente en Git
git commit --amend permite modificar y agregar cambios a la confirmación más reciente:

git commit --amend

### Cómo deshacer la última confirmación en Git
git revert creará una nueva confirmación que es lo opuesto a todo en la confirmación dada. Podemos revertir la última confirmación usando el alias `HEAD`:

git revert HEAD

### Cómo deshacer una confirmación antigua en Git
Puedes revertir una confirmación antigua usando su ID de confirmación:

git revert commit_id_here

### Cómo crear una nueva rama en Git
Por defecto, tienes una rama, la rama principal. Con este comando, puedes crear una nueva rama:

git branch branch_name

### Cómo cambiar a una rama recién creada en Git
Cuando quieras usar una rama diferente o recién creada, puedes usar este comando:

git checkout branch_name

### Cómo listar ramas en Git
Puedes ver todas las ramas creadas usando el comando `git branch`. Mostrará una lista de todas las ramas y marcará la rama actual con un asterisco:

git branch

### Cómo crear una rama en Git y cambiar a ella inmediatamente
En un solo comando, puedes crear y cambiar a una nueva rama de inmediato:

git checkout -b branch_name

### Cómo eliminar una rama en Git
Cuando termines de trabajar con una rama y la hayas fusionado, puedes eliminarla usando el siguiente comando:

git branch -d branch_name

### Cómo fusionar dos ramas en Git
Para fusionar el historial de la rama en la que estás actualmente con `branch_name`, usa el siguiente comando:

git merge branch_name

### Cómo mostrar el historial de confirmaciones como un gráfico en Git
Podemos usar `--graph` para mostrar el historial de confirmaciones como un gráfico. Además, `--oneline` limitará los mensajes de confirmación a una sola línea:

git log --graph --oneline

### Cómo mostrar el historial de confirmaciones como un gráfico de todas las ramas en Git
Hace lo mismo que el comando anterior, pero para todas las ramas:

git log --graph --oneline --all

### Cómo abortar una fusión conflictiva en Git
Si deseas descartar una fusión y comenzar de nuevo, puedes ejecutar el siguiente comando:

git merge --abort

### Cómo agregar un repositorio remoto en Git
Este comando agrega un repositorio remoto a tu repositorio local:

git remote add origin https://repo_here

### Cómo ver URLs remotas en Git
Puedes ver todos los repositorios remotos para tu repositorio local con este comando:

git remote -v

### Cómo obtener más información sobre un repositorio remoto en Git
Reemplaza `origin` con el nombre del remoto obtenido al ejecutar el comando `git remote -v`:

git remote show origin

### Cómo subir cambios a un repositorio remoto en Git
Cuando todo tu trabajo esté listo para guardarse en un repositorio remoto, puedes subir todos los cambios usando el siguiente comando:

git push

### Cómo obtener cambios de un repositorio remoto en Git
Si otros miembros del equipo están trabajando en tu repositorio, puedes recuperar los últimos cambios realizados en el repositorio remoto con el siguiente comando:

git pull

### Cómo verificar las ramas remotas que Git está rastreando
Este comando muestra el nombre de todas las ramas remotas que Git está rastreando para el repositorio actual:

git branch -r

### Cómo obtener cambios de un repositorio remoto en Git
Este comando descargará los cambios de un repositorio remoto pero no realizará una fusión en tu rama local:

git fetch

### Cómo verificar el historial de confirmaciones de un repositorio remoto en Git
Confirmación tras confirmación, Git construye un historial. Puedes encontrar el historial del repositorio remoto usando este comando:

git log origin/main

### Cómo fusionar un repositorio remoto con tu repositorio local en Git
Si el repositorio remoto tiene cambios que deseas fusionar con tu repositorio local, este comando lo hará por ti:

git merge origin/main

### Cómo obtener el contenido de ramas remotas en Git sin fusionar automáticamente
Esto te permite actualizar el remoto sin fusionar ningún contenido en las ramas locales:

git remote update

### Cómo subir una nueva rama a un repositorio remoto en Git
Si deseas subir una rama a un repositorio remoto, puedes usar el siguiente comando. Recuerda agregar `-u` para crear la rama upstream:

git push -u origin branch_name

### Cómo eliminar una rama remota en Git
Si ya no necesitas una rama remota, puedes eliminarla usando el siguiente comando:

git push --delete origin branch_name_here

### Cómo usar Git rebase
Puedes transferir trabajo completado de una rama a otra usando `git rebase`:

git rebase branch_name_here

### Cómo ejecutar rebase de forma interactiva en Git
Puedes ejecutar `git rebase` de forma interactiva usando la opción `-i`. Esto abrirá el editor y presentará un conjunto de comandos que puedes usar:

git rebase -i master

### Cómo forzar una solicitud de push en Git
Este comando forzará una solicitud de push. Esto generalmente está bien para ramas de solicitud de extracción porque nadie más debería haberlas clonado:

git push -f


### Conclusión
Estos comandos pueden mejorar significativamente tu productividad al trabajar con Git. No es necesario memorizarlos todos, ya que puedes consultarlos cuando los necesites. Este documento sirve como una referencia rápida para las operaciones más comunes y avanzadas en Git. ¡Guárdalo o imprímelo para tenerlo siempre a mano!

