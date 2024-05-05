from flask import request, jsonify 
from db.connection import cur, conn
import hashlib


def SignIn():
    try:
        data = request.json
        correo = data['correo']
        password = data['password']
        cur.execute(f"SELECT * FROM users WHERE correo = '{correo}'")
        user = cur.fetchone()

        if user:
            hashed = hashlib.sha256(password.encode('utf-8')).hexdigest()
            if hashed == user[2]:
                return jsonify({'message': 'Logged in successfully', 'user': user})
            else:
                return jsonify({'message': 'Invalid credentials'}), 401
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

        hashed = hashlib.sha256(password.encode('utf-8')).hexdigest()

        cur.execute("INSERT INTO users (cedula, correo, password, childname) VALUES (%s, %s, %s, %s)", (cedula, correo, hashed, childname))
        conn.commit()

        return jsonify({'message': 'User created successfully'})
    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error creating user', 'error': str(e)}), 400