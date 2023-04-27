let canvasOriginal = document.getElementById("canvasOriginal");
let ctxOriginal = canvasOriginal.getContext("2d");

let canvasModificado = document.getElementById("canvasModificado");
let ctxModificado = canvasModificado.getContext("2d");

let image = new Image();
image.src = "Luffy.jpg";

image.onload = function() {
    canvasOriginal.width = image.width;
    canvasOriginal.height = image.height;
    canvasModificado.width = image.width;
    canvasModificado.height = image.height;
    ctxOriginal.drawImage(image, 0, 0);
};

let cont = 0;

function hor(){

    console.log(cont)

    if (cont == 0) {

        let imageData = ctxOriginal.getImageData(0, 0, canvasOriginal.width, canvasOriginal.height);
        let pixels = imageData.data;
        for (let y = 0; y < canvasOriginal.height; y++) {
            for (let x = 0; x < canvasOriginal.width / 2; x++) {
                let index = (y * canvasOriginal.width + x) * 4;
                let mirrorIndex = (y * canvasOriginal.width + (canvasOriginal.width - x - 1)) * 4;
                let r = pixels[index];
                let g = pixels[index + 1];
                let b = pixels[index + 2];
                let a = pixels[index + 3];
                pixels[index] = pixels[mirrorIndex];
                pixels[index + 1] = pixels[mirrorIndex + 1];
                pixels[index + 2] = pixels[mirrorIndex + 2];
                pixels[index + 3] = pixels[mirrorIndex + 3];
                pixels[mirrorIndex] = r;
                pixels[mirrorIndex + 1] = g;
                pixels[mirrorIndex + 2] = b;
                pixels[mirrorIndex + 3] = a;
            }
        }
        
        ctxModificado.putImageData(imageData, 0, 0);
        cont += 1;

    } else if(cont == 1){
        
        let imageData = ctxModificado.getImageData(0, 0, canvasModificado.width, canvasModificado.height);
        let pixels = imageData.data;
        for (let y = 0; y < canvasModificado.height; y++) {
            for (let x = 0; x < canvasModificado.width / 2; x++) {
                let index = (y * canvasModificado.width + x) * 4;
                let mirrorIndex = (y * canvasModificado.width + (canvasModificado.width - x - 1)) * 4;
                let r = pixels[index];
                let g = pixels[index + 1];
                let b = pixels[index + 2];
                let a = pixels[index + 3];
                pixels[index] = pixels[mirrorIndex];
                pixels[index + 1] = pixels[mirrorIndex + 1];
                pixels[index + 2] = pixels[mirrorIndex + 2];
                pixels[index + 3] = pixels[mirrorIndex + 3];
                pixels[mirrorIndex] = r;
                pixels[mirrorIndex + 1] = g;
                pixels[mirrorIndex + 2] = b;
                pixels[mirrorIndex + 3] = a;
            }
        }
        
        ctxModificado.putImageData(imageData, 0, 0);
    }

};

function ver(){

    console.log(cont)

    if (cont == 0) {
        let imageData = ctxOriginal.getImageData(0, 0, canvasOriginal.width, canvasOriginal.height);
        let pixels = imageData.data;
        for (let y = 0; y < canvasOriginal.height / 2; y++) {
            for (let x = 0; x < canvasOriginal.width; x++) {
                let index = (y * canvasOriginal.width + x) * 4;
                let mirrorIndex = ((canvasOriginal.height - y - 1) * canvasOriginal.width + x) * 4;
                let r = pixels[index];
                let g = pixels[index + 1];
                let b = pixels[index + 2];
                let a = pixels[index + 3];
                pixels[index] = pixels[mirrorIndex];
                pixels[index + 1] = pixels[mirrorIndex + 1];
                pixels[index + 2] = pixels[mirrorIndex + 2];
                pixels[index + 3] = pixels[mirrorIndex + 3];
                pixels[mirrorIndex] = r;
                pixels[mirrorIndex + 1] = g;
                pixels[mirrorIndex + 2] = b;
                pixels[mirrorIndex + 3] = a;
            }
        }
        
        ctxModificado.putImageData(imageData, 0, 0); 
        cont += 1;

    } else if(cont == 1){
        
        let imageData = ctxModificado.getImageData(0, 0, canvasModificado.width, canvasModificado.height);
        let pixels = imageData.data;
        for (let y = 0; y < canvasModificado.height / 2; y++) {
            for (let x = 0; x < canvasModificado.width; x++) {
                let index = (y * canvasModificado.width + x) * 4;
                let mirrorIndex = ((canvasModificado.height - y - 1) * canvasModificado.width + x) * 4;
                let r = pixels[index];
                let g = pixels[index + 1];
                let b = pixels[index + 2];
                let a = pixels[index + 3];
                pixels[index] = pixels[mirrorIndex];
                pixels[index + 1] = pixels[mirrorIndex + 1];
                pixels[index + 2] = pixels[mirrorIndex + 2];
                pixels[index + 3] = pixels[mirrorIndex + 3];
                pixels[mirrorIndex] = r;
                pixels[mirrorIndex + 1] = g;
                pixels[mirrorIndex + 2] = b;
                pixels[mirrorIndex + 3] = a;
            }
        }
        
        ctxModificado.putImageData(imageData, 0, 0);
    }

};

function rot(){

    console.log(cont)

    if (cont == 0) {
        let imageData = ctxOriginal.getImageData(0, 0, canvasOriginal.width, canvasOriginal.height);
        let pixels = imageData.data;
        let newImageData = ctxModificado.createImageData(imageData.height, imageData.width);
        let newPixels = newImageData.data;
        let sourceWidth = imageData.width;
        let sourceHeight = imageData.height;

        for (let i = 0; i < pixels.length; i += 4) {
            let r = pixels[i];
            let g = pixels[i+1];
            let b = pixels[i+2];
            let a = pixels[i+3];

            let x = (i/4) % sourceWidth;
            let y = Math.floor((i/4) / sourceWidth);

            let newX = sourceHeight - y - 1;
            let newY = x;

            let newIndex = ((newX + newY * sourceHeight) * 4);
            newPixels[newIndex] = r;
            newPixels[newIndex+1] = g;
            newPixels[newIndex+2] = b;
            newPixels[newIndex+3] = a;
        }
        
        ctxModificado.putImageData(newImageData, 0, 0); 
        cont += 1;

    } else if(cont == 1){
        
        let imageData = ctxModificado.getImageData(0, 0, canvasModificado.width, canvasModificado.height);
        let pixels = imageData.data;
        let newImageData = ctxModificado.createImageData(imageData.height, imageData.width);
        let newPixels = newImageData.data;
        let sourceWidth = imageData.width;
        let sourceHeight = imageData.height;
    
        for (let i = 0; i < pixels.length; i += 4) {
            let r = pixels[i];
            let g = pixels[i+1];
            let b = pixels[i+2];
            let a = pixels[i+3];
    
            let x = (i/4) % sourceWidth;
            let y = Math.floor((i/4) / sourceWidth);
    
            let newX = sourceHeight - y - 1;
            let newY = x;
    
            let newIndex = ((newX + newY * sourceHeight) * 4);
            newPixels[newIndex] = r;
            newPixels[newIndex+1] = g;
            newPixels[newIndex+2] = b;
            newPixels[newIndex+3] = a;
        }
    
        
        
        ctxModificado.putImageData(newImageData, 0, 0);
    }

};

function red(){

    console.log(cont)

    if (cont == 0) {
        let imageData = ctxOriginal.getImageData(0, 0, canvasOriginal.width, canvasOriginal.height);
        let pixels = imageData.data;
        let newImageData = ctxModificado.createImageData(canvasModificado.width, canvasModificado.height);
        let newPixels = newImageData.data;
        let sourceWidth = imageData.width;
        let sourceHeight = imageData.height;

        for (let x = 0; x < canvasModificado.width/2; x++) {
            for (let y = 0; y < canvasModificado.height/2; y++) {
                let newX = x * 2;
                let newY = y * 2;

                let index = ((newY * sourceWidth) + newX) * 4;
                let newIndex = ((y * canvasModificado.width) + x) * 4;

                newPixels[newIndex] = pixels[index];
                newPixels[newIndex + 1] = pixels[index + 1];
                newPixels[newIndex + 2] = pixels[index + 2];
                newPixels[newIndex + 3] = pixels[index + 3];
            }
        }
        
        ctxModificado.putImageData(newImageData, 0, 0); 
        cont += 1;

    } else if(cont == 1){
        
        let imageData = ctxModificado.getImageData(0, 0, canvasModificado.width, canvasModificado.height);
        let pixels = imageData.data;
        let newImageData = ctxModificado.createImageData(canvasModificado.width, canvasModificado.height);
        let newPixels = newImageData.data;
        let sourceWidth = imageData.width;
        let sourceHeight = imageData.height;
    
        for (let x = 0; x < canvasModificado.width/2; x++) {
            for (let y = 0; y < canvasModificado.height/2; y++) {
                let newX = x * 2;
                let newY = y * 2;
    
                let index = ((newY * sourceWidth) + newX) * 4;
                let newIndex = ((y * canvasModificado.width) + x) * 4;
    
                newPixels[newIndex] = pixels[index];
                newPixels[newIndex + 1] = pixels[index + 1];
                newPixels[newIndex + 2] = pixels[index + 2];
                newPixels[newIndex + 3] = pixels[index + 3];
            }
        }
        
        ctxModificado.putImageData(newImageData, 0, 0);
    }

};

