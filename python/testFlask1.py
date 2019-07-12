from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def run():
    return 'hello world'

@app.route('/hi/')
def hi():
    return 'hi page'

if __name__ == "__main__":
    app.run()
