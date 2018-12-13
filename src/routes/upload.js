const express = require('express');
const router = express.Router();

const { Storage } = require('@google-cloud/storage');
const CLOUD_BUCKET = 'gs://sulbaguia';

const storage = new Storage({
  projectId: 'sulbaguia',
});
const bucket = storage.bucket(CLOUD_BUCKET);

const Multer = require('multer');
const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: 5 * 1024 * 1024 // no larger than 5mb
    }
});

function getPublicUrl(filename) {
    return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`;
}

router.post('/', multer.single('photo'), sendUploadToGCS, (req, res, next) => {
    console.log('ok')
    if (req.file && req.file.cloudStoragePublicUrl) {
        return res.send({'imagePublicUrl': req.file.cloudStoragePublicUrl}); 
    }
});

// router.post('/', multer.single('image'), sendUploadToGCS, (req, res, next) => {
//     if (req.file && req.file.cloudStoragePublicUrl) {
//         return res.send({'imagePublicUrl': req.file.cloudStoragePublicUrl}); 
//     }
// });

// //our file upload function.
// router.post('/', function (req, res, next) {
//      var path = '';
//      upload(req, res, function (err) {
//         if (err) {
//           // An error occurred when uploading
//           console.log(err);
//           return res.status(422).send("an Error occured")
//         }  
//        // No error occured.
//         path = req.file.path;
//         return res.send("Upload Completed for "+path); 
//   });     
// })


function sendUploadToGCS (req, res, next) {
    if (!req.file) {
        return next();
    }
  
    const gcsName = Date.now() + req.file.originalname;
    const file = bucket.file(gcsName);
  
    const stream = file.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        },
        resumable: false
    });
  
    stream.on('error', (err) => {
        req.file.cloudStorageError = err;
        next(err);
    });
  
    stream.on('finish', () => {
        req.file.cloudStorageObject = gcsName;
        file.makePublic().then(() => {
            req.file.cloudStoragePublicUrl = getPublicUrl(gcsName);
            next();
        });
    });
  
    stream.end(req.file.buffer);
  }


module.exports = router;
