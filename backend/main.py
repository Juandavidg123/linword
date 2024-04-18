from flask import Flask
from routes.register import registrobp
from routes.login import loginbp
from routes.user import usersbp

app = Flask(__name__)

app.register_blueprint(registrobp)
app.register_blueprint(loginbp)
app.register_blueprint(usersbp)

if __name__ == '__main__':
    app.run(debug=True)