from flask import Flask
app = Flask(__name__)

def readjson(filename):
    with open('dfjson.json', "w") as file:
        data = flask.json.load(file)
    return data

@app.route('/api/')
def data(name):
    return flask.jsonify(readjson('data/'+name+'.json'))

if __name__ == '__main__':
    app.run()
