const express = require('express');
const router = express.Router();
const IncomingForm = require('formidable').IncomingForm;
const storageService = require('../services/storage.service');

router.post('/', async (req, res) => {
  var form = new IncomingForm();
  let srcFilename;
  let fileType;

  form.on('file', (field, file) => {
    file = file;
    srcFilename = file.path;
    fileType = file.type.replace('image/', '');
  });

  form.on('end', () => {
    // TODO: get from env variable
    let bucketName = 'sbg-localhost';
    let destFilename = `images/events/${srcFilename.replace("/tmp/upload_", "")}.${fileType}`;
    storageService.uploadFile(srcFilename, destFilename);

    res.json({'gcsPublicUrl': `https://storage.googleapis.com/${bucketName}/${destFilename}`});
  });

  form.parse(req);
});

router.delete('/', async (req, res) => {
  let fileUrl = req.body.fileUrl;
  fileUrl = fileUrl.replace(`https://storage.googleapis.com/${bucketName}`, '');

  storageService.deleteFile(fileUrl);

  form.on('end', () => {
    // TODO: get from env variable
    let bucketName = 'sbg-localhost';
    let destFilename = `images/events/${srcFilename.replace("/tmp/upload_", "")}.${fileType}`;
    storageService.uploadFile(srcFilename, destFilename);

    res.json({'gcsPublicUrl': `https://storage.googleapis.com/${bucketName}/${destFilename}`});
  });

  form.parse(req);
});

module.exports = router;