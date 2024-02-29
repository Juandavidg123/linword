CREATE TABLE IF NOT EXISTS users (
  	cedula int NOT NULL,
	username varchar(255) NOT NULL,
  	password varchar(255) NOT NULL,
  	childName varchar(255) NOT NULL,
	codeChild int NOT NULL UNIQUE,
	role varchar(255) CHECK(role IN ('parent', 'child')), 
  	PRIMARY KEY (cedula)
); 