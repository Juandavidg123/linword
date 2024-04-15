from controllers.users import deleteUser, updateUser, getUser
from flask import Blueprint

usersbp = Blueprint("users", __name__)


@usersbp.delete("/users/<int:cedula>")
def deleteuser(cedula):
    return deleteUser(cedula)


@usersbp.put("/users/<int:cedula>")
def updateuser(cedula):
    return updateUser(cedula)


@usersbp.get("/users/<int:cedula>")
def getuser(cedula):
    return getUser(cedula)
