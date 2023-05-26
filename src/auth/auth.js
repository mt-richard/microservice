const express = require('express');
const app = express();
const port = 3001; 

function start() {
  app.get('/', (req, res) => {
    res.send('Auth API by Richard.');
  });
  app.get('/about', (req, res) => {
    res.json({status: '200', message: "Welcome to my API"});
  });
  app.listen(port, () => {
    console.log(`Server -Auth is listening on port ${port}.`);
  });
}

module.exports = { start };
