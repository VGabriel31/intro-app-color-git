document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById('colorPicker');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const colorBox = document.getElementById('colorBox');
    const hexCode = document.getElementById('hexCode');
    
    function updateColor() {
      const colorValue = colorPicker.value.substring(1); // Remove '#' from color value
      const red = parseInt(colorValue.substring(0, 2), 16);
      const green = parseInt(colorValue.substring(2, 4), 16);
      const blue = parseInt(colorValue.substring(4, 6), 16);
      
      redInput.value = red;
      greenInput.value = green;
      blueInput.value = blue;
      redRange.value = red;
      greenRange.value = green;
      blueRange.value = blue;
      
      const rgbColor = `rgb(${red}, ${green}, ${blue})`;
      const hexColor = colorPicker.value;
      
      colorBox.style.backgroundColor = rgbColor;
      hexCode.value = hexColor;
    }
    
    colorPicker.addEventListener('input', updateColor);
    
    redInput.addEventListener('input', function() {
      redRange.value = redInput.value;
      updateColor();
    });
    
    greenInput.addEventListener('input', function() {
      greenRange.value = greenInput.value;
      updateColor();
    });
    
    blueInput.addEventListener('input', function() {
      blueRange.value = blueInput.value;
      updateColor();
    });
    
    redRange.addEventListener('input', function() {
      redInput.value = redRange.value;
      updateColor();
    });
    
    greenRange.addEventListener('input', function() {
      greenInput.value = greenRange.value;
      updateColor();
    });
    
    blueRange.addEventListener('input', function() {
      blueInput.value = blueRange.value;
      updateColor();
    });
    
    updateColor(); // Llama a la función para establecer el color inicial
  });
  