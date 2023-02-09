const crypto = require('crypto');

crypto.subtle
  .generateKey(
    { 
        name: 'HMAC', 
        hash: { name: 'SHA-256' } 
    }, 
    true, 
    ['sign','verify',]
  )
  .then(key => {
    crypto.subtle.exportKey('jwk', key).then((exportedKey) => {
      console.log(exportedKey.k);
    });
  });