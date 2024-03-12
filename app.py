from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", defaults={"path": ""}, strict_slashes=False)
@app.route("/<path:path>")
def catch_all(path):
    # Handle the request for the undefined routes here
     return render_template("index.html") 



if __name__ == '__main__':
    app.run(debug=True)
