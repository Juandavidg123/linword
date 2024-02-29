#Fichero para crear las tablas de la base de datos, solo ejecutar este fichero en caso de que no este creada la tabla


import psycopg2

try:
    conn = psycopg2.connect(
        "postgres://linword_user:mqd4wIWFLQAqI0XSQoEQhBLjDeEtqbQW@dpg-cncijceg1b2c739i83jg-a.oregon-postgres.render.com/linword"
    )
    cur = conn.cursor()
    query = '''
        CREATE TABLE IF NOT EXISTS users (
  	        cedula int NOT NULL,
	        username varchar(255) NOT NULL,
  	        password varchar(255) NOT NULL,
  	        childName varchar(255) NOT NULL,
	        codeChild int NOT NULL UNIQUE,
	        role varchar(255) CHECK(role IN ('parent', 'child')), 
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