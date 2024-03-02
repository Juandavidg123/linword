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


        cur.execute(f"INSERT INTO users (cedula, correo, password, childname) VALUES ({cedula}, '{correo}', '{password}', '{childname}')")  
        conn.commit()
        
        return jsonify({'message': 'User created successfully'})
    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error creating user', 'error': str(e)}), 400