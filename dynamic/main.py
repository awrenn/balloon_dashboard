import flask

application = flask.Flask(__name__)

hits = 0

@application.route("/hit", methods=["GET"])
def hit():
    global hits
    hits += 1
    return {"hits": hits}, 200
