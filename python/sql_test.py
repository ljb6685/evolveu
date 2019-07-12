import psycopg2 as pg2
conn = pg2.connect(database='dvdrental', user='postgres', password='wonder79')
cur = conn.cursor()
cur.execute('SELECT * FROM payment')
print(cur.fetchmany(5))
