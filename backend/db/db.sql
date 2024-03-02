CREATE TABLE IF NOT EXISTS users (
  	cedula int NOT NULL,
	correo varchar(255) NOT NULL,
  	password varchar(255) NOT NULL,
  	childName varchar(255) NOT NULL,
  	PRIMARY KEY (cedula)
); 