import psycopg2

try:
    conn = psycopg2.connect(
        "postgres://linword_4phq_user:gRpvexxcmqsE1RuHXhklVBI0Iw1vMEOb@dpg-cos46va0si5c739ovba0-a.oregon-postgres.render.com/linword_4phq"
    )

    cur = conn.cursor()
    print('Connected to the database')
except Exception as e:
    print('I am unable to connect to the database')
    print(e)
