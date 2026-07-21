const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

celsius.addEventListener('input', () => {
  const c = parseFloat(celsius.value);
  if (isNaN(c)) return;
  fahrenheit.value = (c * 9/5 + 32).toFixed(2);
  kelvin.value = (c + 273.15).toFixed(2);
});

fahrenheit.addEventListener('input', () => {
  const f = parseFloat(fahrenheit.value);
  if (isNaN(f)) return;
  const c = (f - 32) * 5/9;
  celsius.value = c.toFixed(2);
  kelvin.value = (c + 273.15).toFixed(2);
});

kelvin.addEventListener('input', () => {
  const k = parseFloat(kelvin.value);
  if (isNaN(k)) return;
  const c = k - 273.15;
  celsius.value = c.toFixed(2);
  fahrenheit.value = (c * 9/5 + 32).toFixed(2);
});
