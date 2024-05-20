from flask import Flask
from routes.register import registrobp
from routes.login import loginbp
from routes.user import usersbp
from routes.book import bookBp

app = Flask(__name__)

app.register_blueprint(registrobp)
app.register_blueprint(loginbp)
app.register_blueprint(usersbp)
app.register_blueprint(bookBp)

if __name__ == '__main__':
    app.run(debug=True, host= "0.0.0.0")