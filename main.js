function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () { // convert image file to base64 string
        preview.src = reader.result;
    }, false);
  
    if (file) {
        reader.readAsDataURL(file);
    }
}

function getResult() {
    var image = document.getElementById("image-select-preview");
    image.src = "https://i.gyazo.com/957c1b7c04a8c542d3845d561c9514ef.png";
}

function getURL() {
    var f = document.getElementById("init-image");
    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // Set width and height
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw the image
    ctx.drawImage(img, 0, 0);
    document.getElementById("file_name").setAttribute(canvas.toDataURL('image/jpeg'));
    console.log("should have worked");
}