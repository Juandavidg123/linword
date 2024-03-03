#Fichero para visualozar la tabla users de la base de datos linword

import psycopg2
from connection import conn, cur

try:
    cur.execute("SELECT * FROM users")
    print(cur.fetchall())

    conn.close()
    print('Query executed successfully!')

except Exception as e:
    print('I am unable to connect to the database')
    print(e)