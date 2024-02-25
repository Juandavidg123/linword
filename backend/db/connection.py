import psycopg2

try:
    conn = psycopg2.connect(
    host = 'localhost',
    database = 'postgres',
    user = 'postgres',
    password = '0509123654321',
    port = 5432
    )

    cur = conn.cursor()
    print('Connected to the database')
except:
    print('I am unable to connect to the database')
