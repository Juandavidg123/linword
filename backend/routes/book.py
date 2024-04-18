from controllers.book import getBook_, getBooks_
from flask import Blueprint


bookBp = Blueprint('login', __name__)

@bookBp.get('/book')
def getBooks():
    return getBooks_()

@bookBp.get('/book/<int:id>')
def getBook(id):
    return getBook_(id)