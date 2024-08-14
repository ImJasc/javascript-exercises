const convertToCelsius = function(temperature) {
  let convertedTemperature = (temperature - 32) * (5/9);
  parseFloat(convertedTemperature.toFixed(1));
  return convertedTemperature;
};

const convertToFahrenheit = function(temperature) {
  let convertedTemperature = (temperature * (9/5)) + 32;
  parseFloat(convertedTemperature.toFixed(1));
  return convertedTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
