from flask import Flask

from server import send_contact, views


app = Flask(__name__, static_folder='static')


app.get('/')(views.home)
app.get('/contact/')(views.contact)

# apis
app.get('/api/locales_list/')(views.locales_list)
app.get('/api/get_locale/')(views.get_locale)
app.post('/api/send_contact/')(send_contact)


# errors
app.register_error_handler(404, views.errors)
