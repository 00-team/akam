from flask import request


def send_contact():
    data = request.json
    print(request.remote_addr)

    try:
        recaptcha = data['recaptcha']

        first_name = data['first_name']  # 0-50
        last_name = data['last_name']  # 0-50
        email = data['email']  # 0-250
        message = data['message']  # 20-500

        # if (
        #     len(first_name) > 50 or
        #     len(last_name) > 50 or
        #     len(email) > 250 or
        #     len(message) < 20 or
        #     len(message) > 500
        # ):
        #     raise ValueError

    except (KeyError, ValueError):
        return {'error': {'message': 'invalid request data', 'code': 400}}, 400

    return {'ok': 12}
