import hashlib
from flask import request, jsonify, Blueprint
from db.connection import cur, conn

registrobp = Blueprint('registro', __name__)

@registrobp.post('/register')
def registro():
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
