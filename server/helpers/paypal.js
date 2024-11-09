const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AUbFadm79pIJUuhv_ZaNDi_1lLG_z0cmQDMFqCMhFHpNYdRvBsA_tzzVsB0E66pumFtPKcCS65bdQs9-",
  client_secret: "EPhDfCd1agoWm3Gq-WVc5sde5DZ4l3pP8D0fkAdTQYCDglL-fYUTrDt5c9MTNI3D4xuiohJdUugGK03J",
});

module.exports = paypal;
