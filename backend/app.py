from flask import Flask

app = Flask(__name__)

changeType = {
    'ARS-ARS': 1.0,
    'ARS-EUR': 0.0561269059,
    'ARS-USD': 0.062838,
    'EUR-EUR': 1.0,
    'EUR-ARS': 17.8167669,
    'EUR-USD': 1.11957,
    'USD-USD': 1.0,
    'USD-ARS': 15.92,
    'USD-EUR': 0.893200068
}

@app.route("/convert/<string:currencyFrom>/<string:currencyTo>/<float:value>")
def convertFloat(currencyFrom, currencyTo, value):
    return convert(currencyFrom, currencyTo, value)

@app.route("/convert/<string:currencyFrom>/<string:currencyTo>/<int:value>")
def convertInt(currencyFrom, currencyTo, value):
    return convert(currencyFrom,currencyTo, float(value))

def convert(currencyFrom, currencyTo, value):
    key = currencyFrom + '-' + currencyTo
    change = changeType.get(key)
    if change is None:
        return 'No se encuentra el tipo de cambio solicitado'
    else:
        return currencyTo + ' ' + str(change * value)

if __name__ == "__main__":
    app.run()
