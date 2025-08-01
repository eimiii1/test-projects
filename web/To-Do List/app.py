from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, UTC

# create a flask instance 
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
db = SQLAlchemy(app)

class User(db.Model): # database table | model = table
    id = db.Column(db.Integer, primary_key=True)   
    content = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.now(UTC))
    
    def __repr__(self):
        return "<Task %r" % self.id

@app.route('/', methods=["POST", "GET"])
def home():
    if request.method == "POST":
        task_content = request.form['content'] # get the content id
        new_task = User(content=task_content) # set the variable value to the table
        
        # add content now 
        try:
            db.session.add(new_task) # add the new task to the session
            db.session.commit() # saves the new added task to the database
            return redirect('/') # redirect to the page after the submission
        except:
            return "Issue adding your task." # returns if there is an error adding the new task
        
        
    else:
        tasks = User.query.order_by(User.date_created).all()
        return render_template("index.html", tasks=tasks)
    
    
@app.route("/delete/<int:id>")
def delete(id):
    task_to_delete = User.query.get_or_404(id)
    
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect("/")
    except:
        return "Issue with deleting your task."


@app.route('/update/<int:id>', methods=["POST", "GET"])
def update(id):
    task_to_update = User.query.get_or_404(id)

    if request.method == "POST":
        task_to_update.content = request.form['content']
        
        try:
            db.session.commit()
            return redirect("/")
            
        except:
            return "Issue with updating your task."
    
    else:
        return render_template("update.html", task=task_to_update)
    
# main function to run the app
if __name__ == '__main__':
    app.run(debug=True)