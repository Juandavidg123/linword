#Fichero para crear las tablas de la base de datos, solo ejecutar este fichero en caso de que no este creada la tabla

import psycopg2
from connection import conn, cur

try:
    query = '''
        CREATE TABLE IF NOT EXISTS users (
  	    cedula int NOT NULL,
	    correo varchar(255) NOT NULL,
  	    password varchar(255) NOT NULL,
  	    childName varchar(255) NOT NULL,
  	    PRIMARY KEY (cedula)
    ); 
    '''
    cur.execute(query)
    conn.commit()

    conn.close()
    print('Table created successfully!')

except Exception as e:
    print('I am unable to connect to the database')
    print(e)