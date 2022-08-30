
from flask import Flask

from server import views


app = Flask(__name__, static_folder='static')


app.get('/')(views.home)

# apis
app.get('/api/locales_list/')(views.locales_list)
app.get('/api/get_locale/<locale>/')(views.get_locale)

# errors
app.register_error_handler(404, views.errors)
