
from flask import Flask, url_for

from server import views


app = Flask(__name__, static_folder='static')


app.get('/')(views.home)

# apis
app.get('/api/locales_list/')(views.locales_list)
app.get('/api/get_locale/<locale>/')(views.get_locale)

# errors
app.register_error_handler(400, views.errors)
app.register_error_handler(403, views.errors)
app.register_error_handler(404, views.errors)
