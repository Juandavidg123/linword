from controllers.auth import SignIn
from flask import Blueprint

loginbp = Blueprint('login', __name__)

@loginbp.post('/loginparent')
def Login():
    return SignIn()