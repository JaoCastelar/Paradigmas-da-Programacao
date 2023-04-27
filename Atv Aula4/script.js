// Carregue a imagem em um elemento de imagem HTML
var img = new Image();
img.src = 'dog.jpg';

// Espere a imagem carregar
img.onload = function() {

  // Crie um canvas HTML
  var canvas = document.getElementById('canvas');

  // Defina seu tamanho para o mesmo da imagem
  canvas.width = img.width;
  canvas.height = img.height;

  // Desenhe a imagem no canvas
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  // Obtenha os pixels da imagem no canvas
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var pixels = imageData.data;

  // Percorra os pixels, verificando se eles correspondem à cor do cromaqui
  for (var i = 0; i < pixels.length; i += 4) {
    var red = pixels[i];
    var green = pixels[i + 1];
    var blue = pixels[i + 2];

    // Verifique se o pixel corresponde à cor do cromaqui
    if (red < 0 && green > 255 && blue < 0) {
      // Defina sua transparência como 0
      pixels[i + 3] = 0;
    }
  }

  // Desenhe os pixels modificados de volta no canvas
  ctx.putImageData(imageData, 0, 0);

  // Crie um elemento de imagem a partir do canvas modificado
  var transparentImg = new Image();
  transparentImg.src = canvas.toDataURL();
  document.body.appendChild(transparentImg);
};