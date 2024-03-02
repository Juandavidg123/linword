CREATE TABLE IF NOT EXISTS users (
  	cedula int NOT NULL,
	correo varchar(255) NOT NULL UNIQUE CHECK (correo ~* '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'),
  	password varchar(255) NOT NULL,
  	childName varchar(255) NOT NULL,
  	PRIMARY KEY (cedula)
); 