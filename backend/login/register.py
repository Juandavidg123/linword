from flask import request, jsonify, Blueprint
import random

registrobp = Blueprint('registro', __name__)

db = [
    {
        "cedula": 123456789,
        "username": "admin",
        "password": "admin",
        "token": 123456
    
    },
    {
        "cedula": 987654321,
        "username": "admin2",
        "password": "admin2",
        "token": 654321
    }
]

@registrobp.post('/register')
def registro():
    data = request.json
    print(data["cedula"])
    print(data["username"])
    print(data["password"])
    print(random.randint(100000, 999999))
    return jsonify({"status": "success", "message": "Usuario registrado exitosamente"})

@registrobp.get('/register')
def getUsers():
    return jsonify(db)

@registrobp.get('/register/<int:cedula>')
def getUser(cedula):
    for user in db:
        if user["cedula"] == cedula:
            return jsonify(user)
    return jsonify({"status": "error", "message": "Usuario no encontrado"})
          
