const convertBtn = document.getElementById('convert');
const inputField = document.getElementById('input');
const outputLabel = document.getElementById('output');
const result = document.getElementById('result');

convertBtn.addEventListener('click', function () {
  const inputValue = parseFloat(inputField.value);
  let outputValue;
  const tempRadio = document.querySelector('input[name="temp"]:checked');
  if (tempRadio.id === 'celsius') {
    outputValue = (inputValue * 9) / 5 + 32;
    outputLabel.textContent = `(9/5 x ${inputValue}°C ) + 32 = ${outputValue.toFixed(1)}°F`;
    result.textContent = `${outputValue.toFixed(1)}°F`;
  } else if (tempRadio.id === 'fahrenheit') {
    outputValue = ((inputValue - 32) * 5) / 9;
    outputLabel.textContent = `5/9 x (${inputValue}°F - 32) = ${outputValue.toFixed(1)}°C`;
    result.textContent = `${outputValue.toFixed(1)}°C`;
  }
});
