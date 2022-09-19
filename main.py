
from server import app, send_contact, views


app.get('/')(views.home)
app.get('/contact/')(views.contact)
app.get('/about/')(views.about)

# apis
app.get('/api/locales_list/')(views.locales_list)
app.get('/api/get_locale/')(views.get_locale)
app.post('/api/send_contact/')(send_contact)


# errors
app.register_error_handler(404, views.errors)
