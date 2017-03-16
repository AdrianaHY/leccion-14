function convertirACelsius (){
  var gradosFahrenheit= parseInt(document.getElementById("fahrenheit").value);
  var resultado = document.getElementById("celsius")
  var celsius = parseFloat((gradosFahrenheit - 32) * (5/9));
    resultado.value = celsius;
}

function convertirFahrenheit (){
  gradosCelsius = getElementById("celsius").value;
    return parseFloat((gradosCelsius * 1.8) + 32);
}
