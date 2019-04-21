from app.models import User
from app import app, db


import os

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User}

if __name__ == "__main__":
    if not os.path.exists('app.db'):
        db.create_all()
    app.run(debug=True)