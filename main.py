
from flask import Flask

from views import index


app = Flask(__name__, static_folder='static')


app.get('/')(index)
