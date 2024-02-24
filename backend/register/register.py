from flask import request, jsonify, Blueprint
import random
from db.connection import cur, conn

registrobp = Blueprint('registro', __name__)

@registrobp.post('/register')
def registro():
    try:
        data = request.json
        cedula = data['cedula']
        username = data['username']
        password = data['password']
        childname = data['childname']
        role = data['role']
        codechild = random.randint(10000000, 99999999)

        cur.execute(f"INSERT INTO users (cedula, username, password, childname, codechild, role) VALUES ({cedula}, '{username}', '{password}', '{childname}', {codechild}, '{role}')")  
        conn.commit()
        
        return jsonify({'message': 'User created successfully'})
    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error creating user', 'error': str(e)}), 400