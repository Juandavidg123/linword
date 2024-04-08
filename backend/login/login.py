from flask import request, jsonify, Blueprint
from db.connection import cur, conn
import hashlib

loginbp = Blueprint('login', __name__)

@loginbp.post('/loginparent')
def loginParent():
    try:
        data = request.json
        correo = data['correo']
        password = data['password']
        cur.execute("SELECT * FROM users WHERE correo = %s", (correo,))

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
