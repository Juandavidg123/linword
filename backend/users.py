from flask import request, jsonify, Blueprint
from db.connection import cur, conn
import hashlib

usersbp = Blueprint('users', __name__)

@usersbp.delete('/users/<int:cedula>')
def deleteuser(cedula):
    try:
        cur.execute("DELETE FROM users WHERE cedula = %s", (cedula,))
        conn.commit()
        if cur.rowcount == 0:
            return jsonify({'message': 'User not found'}), 404
        return jsonify({'message': 'User deleted successfully'})
    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error deleting user', 'error': str(e)}), 400


@usersbp.put('/users/<int:cedula>')
def updateuser(cedula):
    try:
        data = request.json
        correo = data['correo']
        password = data['password']
        childname = data['childname']

        if password != '':
            hashed = hashlib.sha256(password.encode('utf-8')).hexdigest()
            cur.execute("UPDATE users SET correo = %s, password = %s, childname = %s WHERE cedula = %s", (correo, hashed, childname, cedula))
        else:
            cur.execute("UPDATE users SET correo = %s, childname = %s WHERE cedula = %s", (correo, childname, cedula))

        conn.commit()
        return jsonify({'message': 'User updated successfully'})

    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error updating user', 'error': str(e)}), 400 
    
@usersbp.get('/users/<int:cedula>')
def getuser(cedula):
    try:
        cur.execute("SELECT * FROM users WHERE cedula = %s", (cedula,))
        user = cur.fetchone()
        if user is None:
            return jsonify({'message': 'User not found'}), 404
        return jsonify({'user': user})
    except Exception as e:
        return jsonify({'message': 'Error getting user', 'error': str(e)}), 404
