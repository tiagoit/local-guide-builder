const express = require('express');
const router = express.Router();
const IncomingForm = require('formidable').IncomingForm;
const storageService = require('../../services/storage.service');
const config = require('config');
const sharp = require('sharp');
const bucketName = config.get('bucketName');

const DEFAULT_HEIGHT = 320;

router.post('/:folder', (req, res) => {
  var form = new IncomingForm();
  let srcFilePath;

  form.on('file', (field, file) => {
    file = file;
    srcFilePath = file.path;
  });

  form.on('end', async () => {
    const resizedFilePath = srcFilePath + 'res';
    const destFilePath = `images/${req.params.folder}/${resizedFilePath.replace("/tmp/upload_", "")}.jpeg`;

    sharp(srcFilePath).jpeg({
      quality: 75,
      chromaSubsampling: '4:2:0'
    }).resize({
      width: null,
      height: DEFAULT_HEIGHT,
      withoutEnlargement: true
    }).toFile(resizedFilePath).then(info => {
      storageService.uploadFile(resizedFilePath, destFilePath);
      res.json({'gcsPublicUrl': `https://storage.googleapis.com/${bucketName}/${destFilePath}`});
    });
  });

  form.parse(req);
});

router.delete('/', async (req, res) => {
  storageService.deleteFile(req.body.fileUrl);

  form.on('end', () => {
    res.json({});
  });

  form.parse(req);
});

module.exports = router;