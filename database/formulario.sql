CREATE DATABASE IF NOT EXISTS Informacion;

USE Informacion;

CREATE TABLE DATOS (
  -- id 		int NOT NULL auto_increment primary key,
  -- DNI 		int NOT NULL primary key,
  full_name	varchar(50) NOT NULL,
  direccion	varchar(250) NULL,
  correo	varchar(150) NULL,
  telefono	int NULL
)

INSERT INTO DATOS (DNI, full_name, direccion, correo, telefono )VALUES ( 12345678, 'Pepito Perez', 'Calle Arica 260 Miraflores Lima', 'pepito_perez@gmail.com', 999995555);

DELETE FROM DATOS WHERE id=0;
