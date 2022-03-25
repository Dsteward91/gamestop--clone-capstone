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

    def __init__(self,product, price):
        self.product = product
        self.price = price
        

class productSchema(ma.Schema):
    class Meta:
        fields = ("id", "product", "price")

product_schema = productSchema()
multiple_product_schema = productSchema(many=True)

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

@app.route("/product/get/ <id>", methods=["GET"])
def get_product_by_id(id):
    record = db.session.querry(Product).filter(Product.id == id).first()
    return jsonify(product_schema.dump(record))

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


     
if __name__ == "__main__":
    app.run(debug=True)