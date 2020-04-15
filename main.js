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
    previewFile();
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





// var bucketName = BUCKET_NAME;
// var bucketRegion = BUCKET_REGION;
// var IdentityPoolId = IDENTITY_POOL_ID;

// AWS.config.update({
//   region: bucketRegion,
//   credentials: new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: IdentityPoolId
//   })
// });

// var s3 = new AWS.S3({
//   apiVersion: '2006-03-01',
//   params: {Bucket: bucketName}
// });

// function s3upload() {
//   var files = document.getElementById('fileUpload').files;
//   if (files) 
//   {
//     var file = files[0];
//     var fileName = file.name;
//     var filePath = 'my-first-bucket-path/' + fileName;
//     var fileUrl = 'https://' + bucketRegion + '.amazonaws.com/my-first-bucket/' +  filePath;
//     s3.upload({
//       Key: filePath,
//       Body: file,
//       ACL: 'public-read'
//     }, function(err, data) {
//       if(err) {
//         reject('error');
//       }
//       alert('Successfully Uploaded!');
//     }).on('httpUploadProgress', function (progress) {
//       var uploaded = parseInt((progress.loaded * 100) / progress.total);
//       $("progress").attr('value', uploaded);
//     });
//   }
// };