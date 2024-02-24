from flask import request, jsonify, Blueprint
from db.connection import cur, conn

usersbp = Blueprint('users', __name__)


@usersbp.delete('/users/<int:cedula>')
def deleteuser(cedula):
    try:
        cur.execute(f"DELETE FROM users WHERE cedula = {cedula}")
        conn.commit()
        return jsonify({'message': 'User deleted successfully'})
    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error deleting user', 'error': str(e)})

@usersbp.put('/users/<int:cedula>')
def updateuser(cedula):
    try:
        data = request.json
        username = data['username']
        password = data['password']
        childname = data['childname']
        role = data['role']
        cur.execute(f"UPDATE users SET username = '{username}', password = '{password}', childname = '{childname}', role = '{role}' WHERE cedula = {cedula}")
        conn.commit()
        return jsonify({'message': 'User updated successfully'})
    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error updating user', 'error': str(e)})
