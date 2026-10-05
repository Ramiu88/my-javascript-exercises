const convertToCelsius = function(temp) {

    let celsiusValue = (temp - 32) * (5/9)

    let result = Math.round(celsiusValue * 10) / 10

    return result;



};

const convertToFahrenheit = function(temp) {

    let fahrenheitValue = (temp * 9/5) + 32

    let result = Math.round(fahrenheitValue * 10) / 10

    return result;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
