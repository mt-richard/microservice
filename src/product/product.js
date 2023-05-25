const express = require('express');
const app = express();
const port = 3002; 

function start() {
  app.get('/', (req, res) => {
    res.send('Product API by Richard');
  });
  app.get('/product', (req, res) => {
    
    const headers = req.headers;
    const authToken = req.headers['apikey'];
    if (authToken && authToken === '1234567890') {
      res.status(200).send('Header verification successful');
    } else {
      res.status(401).send('Header verification failed');
    }
  });

  app.listen(port, () => {
    console.log(`Server-Product is listening on port ${port}.`);
  });
}

module.exports = { start };
