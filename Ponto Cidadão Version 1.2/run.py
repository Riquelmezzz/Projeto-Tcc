from flask import Flask, render_template, abort

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/servicos') 
def servicos():
    return render_template('servicos.html')

@app.route('/denuncie')
def denuncie():
    return render_template('denuncie.html')

@app.route('/campanhas')
def campanhas():
    return render_template('campanhas.html')

@app.route('/artigo-1')
def artigo1():
    return render_template('artigo-1.html')

@app.route('/artigo-2')
def artigo2():
    return render_template('artigo-2.html')

@app.route('/artigo-3')
def artigo3():
    return render_template('artigo-3.html')

@app.route('/artigo-4')
def artigo4():
    return render_template('artigo-4.html')

@app.route('/artigo-5')
def artigo5():
    return render_template('artigo-5.html')

if __name__ == '__main__':
    app.run(debug=True)
