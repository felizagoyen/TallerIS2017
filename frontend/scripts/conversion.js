var convertButton = document.getElementById("convert"),
    resultsText = document.getElementById("resultsText");

convertButton.addEventListener("click", function() {
  var value = document.getElementById("value").value.replace(',', '.'),
      currencyFrom = document.getElementById("currencyFrom").value,
      currencyTo = document.getElementById("currencyTo").value;

  if(value && !isNaN(value)) {
      _call(value, currencyFrom, currencyTo);
  } else {
      resultsText.innerHTML = "Ingrese un valor numérico";
  }
});

function _call(value, currencyFrom, currencyTo) {
  var url = "/convert?currencyFrom=" + currencyFrom + "&currencyTo=" + currencyTo + "&value=" + value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      resultsText.innerHTML = this.responseText;
    } else if(this.readyState === 4 && this.status === 500) {
      resultsText.innerHTML = "Intenta de nuevo, ha ocurrido un error inesperado";
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
