from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://sqwbqnmbswqkwx:01280d1754d0c4beee00a37263302e310b04506d023a64659112b2102bea86a4@ec2-184-73-243-101.compute-1.amazonaws.com:5432/de83iol56vboem"

db = SQLAlchemy(app)
ma = Marshmallow(app)
CORS(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product = db.Column(db.String, nullable=False)
    price = db.Column(db.String, nullable=False)

    def __init__(self, product, price):
        self.product = product
        self.price = price        

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)

    def __init__(self, username, password):
        self.username = username 
        self.password = password 
        

class productSchema(ma.Schema):
    class Meta:
        fields = ("id", "product", "price")

product_schema = productSchema()
multiple_product_schema = productSchema(many=True)

class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "username", "password") #TODO remove sensitive info

user_schema = UserSchema()
multiple_user_schema = UserSchema(many=True)

@app.route("/product/add", methods=["POST"])
def add_product():
    if request.content_type != "application/json":
        return jsonify("ERROR: Data must be sent as JSON")

    post_data = request.get_json() 
    product = post_data.get("product")
    price = post_data.get("price")

    record = Product(product, price)
    db.session.add(record)
    db.session.commit()

    return jsonify(product_schema.dump(record))

@app.route("/product/get", methods=["GET"])
def get_all_users():
    records = db.session.query(Product).all()
    return jsonify(multiple_product_schema.dump(records))

@app.route("/product/update", methods=["PUT"])
def update_product_by_id(id):
    record = db.session.query(Product).first()
    if record is None:
        return jsonify("Error product not found")

    if request.content_type != "application/json":
        return jsonify("ERROR: Data must be sent as json")

    put_data = request.get_json() 
    product = put_data.get("product")

    record.product = product
    db.session.commit()

    return jsonify(product_schema.dump(record))

@app.route("/user/add", methods=["POST"])
def add_user():
    if request.content_type != "application/json":
        return jsonify("Error:Data must be sent as json")

    post_data = request.get_json()
    username = post_data.get("username")
    password = post_data.get("password")

    record_check = db.session.query(User).filter(User.username == username).first()
    if record_check is not None:
        return jsonify("Error: Username already exists.")

    record = User(username,password)
    db.session.add(record)
    db.session.commit()
    
    return jsonify(user_schema.dump(record))

@app.route("/user/get", methods= ["GET"])
def get_user():
    record = db.session.query(User).first()
    return jsonify(user_schema.dump(record))

@app.route("/user/get/<id>", methods=["GET"])
def get_quote_by_id(id):
    record = db.session.query(User).filter(User.id == id).first()
    return jsonify(user_schema.dump(record))

@app.route("/user/login", methods=["POST"])
def login():
    if request.content_type != "application/json":
        return jsonify("Error: Data Must be sent as JSON")

    post_data = request.get_json()
    username = post_data.get("username")
    password = post_data.get("password")

    record = db.session.query(User).filter(User.username == username).first()
    if record is None:
        return jsonify("User NOT verified")
    
    if record.password != password:
        return jsonify("User Not verified")

    return jsonify("User verified")



     
if __name__ == "__main__":
    app.run(debug=True)