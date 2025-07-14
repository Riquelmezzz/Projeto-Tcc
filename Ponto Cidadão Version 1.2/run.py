from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/serviços')
def servicos():
    return render_template('servicos.html')

@app.route('/denuncie')
def denuncie():
    return render_template('denuncie.html')

@app.route('/campanhas')
def campanhas():
    return render_template('campanhas.html')


if __name__ == '__main__':
    app.run(debug=True)
