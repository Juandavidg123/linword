from flask import request, jsonify 
from db.connection import cur, conn

def SignIn():
    try:
        data = request.json
        correo = data['correo']
        password = data['password']
        cur.execute(f"SELECT * FROM users WHERE correo = '{correo}' AND password = '{password}'")
        user =  cur.fetchone()
        if user:
            return jsonify({'message': 'Logged in successfully', 'user': user})
        else:
            return jsonify({'message': 'User not found'}), 404
    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error', 'error': str(e)}), 400

def SignUp():
    try:
        data = request.json
        cedula = data['cedula']
        correo = data['correo']
        password = data['password']
        childname = data['childname']


        cur.execute(f"INSERT INTO users (cedula, correo, password, childname) VALUES ({cedula}, '{correo}', '{password}', '{childname}')")  
        conn.commit()
        
        return jsonify({'message': 'User created successfully'})
    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error creating user', 'error': str(e)}), 400