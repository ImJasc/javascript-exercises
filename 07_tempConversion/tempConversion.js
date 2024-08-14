const convertToCelsius = function(temperature) {
  let convertedTemperature = (temperature - 32) * (5/9);
  convertedTemperature = Math.round(convertedTemperature * 10)/10;
  return convertedTemperature;
};

const convertToFahrenheit = function(temperature) {
  let convertedTemperature = (temperature * (9/5)) + 32;
  convertedTemperature = Math.round(convertedTemperature * 10)/10;
  return convertedTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
