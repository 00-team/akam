
from flask import Flask

from server import views


app = Flask(__name__, static_folder='static')


app.get('/')(views.home)
app.get('/contact/')(views.contact)

# apis
app.get('/api/locales_list/')(views.locales_list)
app.get('/api/get_locale/')(views.get_locale)

# errors
app.register_error_handler(404, views.errors)
