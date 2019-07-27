const express = require('express');
const router = express.Router();
const { Tag, Ad, CtaHit } = require('../../models');

// #####################################   GET ALL TAGS
router.get('/tags', async (req, res) => {
    res.send(await Tag.find().sort('title'));
});


// #####################################   CHECK IF CODE IS AVAILABLE
// type: ['city'|'org'|'event']
router.get('/code/:type/:code', async (req, res) => {
   res.send(true);
});


// #####################################   CONTACT FORM
// https://github.com/sendgrid/sendgrid-nodejs
router.post('/contact', async (req, res) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey("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");

  const msg = {
    to: 'contato@sulbaguia.com.br',
    from: req.body.email || 'no-mail@sulbaguia.com.br',
    subject: `[Sul BA Guia] Contato pelo formulário do site.`,
    html: `
      <b>Nome:</b> ${req.body.name}<br><br>
      <b>Telefone:</b> ${req.body.phone}<br><br>
      <b>Email:</b> ${req.body.email}<br><br>
      <b>Mensagem:</b> ${req.body.message}
  `
  };

  sgMail.send(msg).then(() => {
      //Celebrate
      console.log('celebrate');
    })
    .catch(error => {
  
      //Log friendly error
      console.error(error.toString());
  
      //Extract error msg
      const {message, code, response} = error;
  
      //Extract response msg
      const {headers, body} = response;
    });

  res.status(200).send({});
});



// #####################################   TRACK AD CLICK
router.post('/track-ad-click', async (req, res) => {
  console.log('track-ad-click', req.body.adId);
  console.log('isMobile', req.body.isMobile);

  let ad = await Ad.findById(req.body.adId);

  console.log(ad);


  if(!ad.ctaHits) ad.ctaHits = [];
  ad.ctaHits.push({date: new Date(), isMobile: req.body.isMobile});
  
  ad.save();

  res.status(200).send({'status': 'ok'});
});

module.exports = router;
