from controllers.auth import SignUp
from flask import Blueprint

registrobp = Blueprint("registro", __name__)


@registrobp.post("/register")
def Register():
    return SignUp()
