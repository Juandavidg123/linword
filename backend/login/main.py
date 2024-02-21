from flask import Flask
from register import registrobp
from login import loginbp

app = Flask(__name__)

app.register_blueprint(registrobp)
app.register_blueprint(loginbp)

if __name__ == '__main__':
    app.run(debug=True)