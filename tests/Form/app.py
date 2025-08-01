from flask import Flask, render_template, request, redirect 
from flask_sqlalchemy import SQLAlchemy
import bcrypt

app = Flask(__name__) # create a flask instance 
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///user.db" # setup which database to use 
db = SQLAlchemy(app) # tells flask which database to use 

class User(db.Model): # set database table | model = table
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    
@app.route('/', methods=["POST", "GET"])
def home():
        if request.method == "POST":
            get_email = request.form.get("email") # get input email
            get_password = request.form.get("password") # get input password
            pw_byte = get_password.encode("utf-8")
            
            hashed_password = bcrypt.hashpw(pw_byte, bcrypt.gensalt())
            
            new_user = User(email=get_email, password=hashed_password)
            
            # add the new data
            try:
                db.session.add(new_user)
                db.session.commit()
                return redirect('/')
            except:
                return "Couldn't register."
        
        else:
            users = User.query.all()
            for user in users:
                print(f"id: {user.id} | email: {user.email} | password: {user.password}")
                
            return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
