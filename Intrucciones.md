# Instrucciones para levantar y utilizar la api.

### Configuraciones iniciales
Primero debemos tener el visual studio code abierto en la carpeta de la api.

Una vez hecho el paso anterior debemos correr el comando `npm i` para instalar las dependencias necesarias para el funcionamiento de la api.

La api está configurada para utilizar Sqlite por defecto, por lo tanto podemos utilizar el comando `npm run dev` para levantar la api en modo "demon" o `npm run app` para levantar la api en modo "normal"

### Variables de entorno
Debemos setear las variables de entorno para configurar la API
Para esto en la carpeta raiz de nuestra app debemos crear un archivo llamado `.env` que contenga las siguientes variables:
    
	NODE_ENV = #Para indicar si deben usarse las configuraciones de desarrollo o de producción
    PORT = #Puerto que usara la api
	DB_DEV_USERNAME = #Usuario de la base de datos que usemos en el desarrollo
	DB_DEV_PASSWORD = #Contraeña de la base de datos que usemos en el desarrollo
	DB_DEV_DATABASE = #Base de datos que usemos en el desarrollo
	DB_DEV_HOST = #Host que usemos en el desarrollo
	DB_DEV_DIALECT = #Dialecto/ Motor de base de datos que usemos en el desarrollo
	DB_DEV_PORT = #Puerto de base de datos que usemos en el desarrollo
	
	DB_PROD_USERNAME =  #Usuario de la base de datos que usemos en producción
	DB_PROD_PASSWORD =  #Contraseña de la base de datos que usemos en en producción
	DB_PROD_DATABASE = #Base de datos que usemos en producción
	DB_PROD_HOST = #Host que usemos en producción
	DB_PROD_DIALECT = #Dialecto/ Motor de base de datos que usemos en el producción
	DB_PROD_PORT = #Puerto de base de datos que usemos en producción


En la carpeta raiz se encuentra un archivo llamado ``.env.example`` como ejemplo de como deberia quedar

### Levantar imágenes en docker
Por otro lado si queremos utilizar otras bases de datos, dejamos configuradas dos *MySql* y *MariaDB*.
Para utilizar estos motores debemos levantar las imágenes de docker correspondientes.

Tenemos la opción de correr el comando ``docker-compose up`` para levantar ambas imágenes. 
O bien, ``docker-compose up node_db1`` para la imagen de MySql o ``docker-compose up node_db2`` para MariaDB si queremos levantar un sólo contenedor.

### Agregar otros motores de bases de datos
Podemos cambiar el archivo *docker-compose.yml*. Sólo debemos cambiar la *image* que utilizaremos y, si es necesario, configurar las variables de entorno.
No debería ser necesario si es similar a MySql y MariaDB. Al utulizar ``docker-compose up`` descargará la imagen, si no la tenemos, y levantará el container.

### Condifuración del motor de base de datos a utilizar
**IMPORTANTE:** Para setear el motor de base de datos a utilizar hay que cambiar el archivo **.env**. 
En dicho archivo debemos especificar el **dialect** que utilizaremos y en **port** debemos poner el correspondiente
La api está configurada para utilizar el ``port:3306`` para MySql y ``port:3307`` para MariaDB

Una vez levantados los containers correspondientes debemos abrir otra terminal para ejecutar ``npm run dev`` o ``npm run app`` y la api estaría en funcionamiento.

### Como usar la API
Para conectar a la base de datos podemos utilizar un cliente como DbEaver donde podremos acceder a la base de datos.
También podemos utilizar postman para utilizar los endpoints solicitados.

## Modelo DER de la API
![DER](Modelo_DER.png)