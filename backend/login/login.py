from flask import request, jsonify, Blueprint
from register import db


loginbp = Blueprint('login', __name__)

@loginbp.post('/login')
def login():
    data = request.json
    for user in db:
        if user["username"] == data["username"] and user["password"] == data["password"]:
            return jsonify({"status": "success", "message": "Usuario logueado exitosamente", "token": user["token"]})
    return jsonify({"status": "error", "message": "Usuario no encontrado"})