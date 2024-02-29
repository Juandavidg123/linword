from flask import request, jsonify, Blueprint
from db.connection import cur, conn

loginbp = Blueprint('login', __name__)

@loginbp.post('/loginparent')
def loginParent():
    try:
        data = request.json
        username = data['username']
        password = data['password']
        cur.execute(f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'")

        user = cur.fetchone()
        if user:
            return jsonify({'message': 'Logged in successfully', 'user': user})
        else:
            return jsonify({'message': 'User not found'}), 404
        
    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error', 'error': str(e)}), 400
    

@loginbp.post('/loginchild')
def loginChild():
    try:
        data = request.json
        codechild = data['codechild']
        cur.execute(f"SELECT * FROM users WHERE codechild = {codechild}")

        user = cur.fetchone()
        if user:
            return jsonify({'message': 'Logged in successfully', 'user': user})
        else:
            return jsonify({'message': 'User not found'}), 404
        
    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error', 'error': str(e)}), 400