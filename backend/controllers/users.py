from flask import jsonify, request
from db.connection import cur, conn

def getUser(Identification):
    try:
        cur.execute(f"SELECT * FROM users WHERE cedula = {Identification}")
        user = cur.fetchone()
        if user is None:
            return jsonify({'message': 'User not found'}), 404
        return jsonify({'user': user})
    except Exception as e:
        return jsonify({'message': 'Error getting user', 'error': str(e)}), 404


def updateUser(Identification):
    try:
        data = request.json
        correo = data['correo']
        password = data['password']
        childname = data['childname']

        cur.execute(f"SELECT * FROM users WHERE cedula = {Identification}")
        user = cur.fetchone()

        if user is None:
            return jsonify({'message': 'User not found'}), 404
        
        else:
            cur.execute(f"UPDATE users SET correo = '{correo}', password = '{password}', childname = '{childname}' WHERE cedula = {Identification}")
            conn.commit()
            return jsonify({'message': 'User updated successfully'})

    except Exception as e:
        conn.rollback()
        return jsonify({'message': 'Error updating user', 'error': str(e)}), 400 

def deleteUser(Identification):
    try:
        cur.execute(f"DELETE FROM users WHERE cedula = {Identification}")
        conn.commit()

        if cur.rowcount == 0:
            return jsonify({"message": "User not found"}), 404

        return jsonify({"message": "User deleted successfully"})

    except Exception as e:
        conn.rollback()
        return jsonify({"message": "Error deleting user", "error": str(e)}), 400
