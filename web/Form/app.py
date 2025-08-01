from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__) # create a flask instance
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///user.db"
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    
    def __repr__(self):
        return "<Task %r>" % self.id
    
    
@app.route("/register", methods=["POST", "GET"])
def register():
    if request.method == "POST":
        get_email = request.form.get("email")
        get_password = request.form.get("password")
        
        
        check_email = User.query.filter_by(email=get_email).first()
        if check_email:
            return "Cannot register with an existing email"
        else:
        # hash password
            hashed_password = generate_password_hash(get_password)
            
            new_user = User(email=get_email, password=hashed_password)
            
            # add datas
            try:
                db.session.add(new_user)
                db.session.commit()
                return redirect('/register')
            except Exception as e:
                return f"Couldn't register. {str(e)}"
        
    else:
        return render_template("register.html")
    
@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        get_email = request.form.get("email")
        get_password = request.form.get("password")
        
        # fetch the table
        user = User.query.filter_by(email=get_email).first()
        
        if user and check_password_hash(user.password, get_password):
            return "User logged in!"
        else:
            return "User couldn't log in."
           
    else:
        return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)