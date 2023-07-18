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

  app.get('/students', (req, res) => {
    res.json([
  {
    "id": 1,
    "name": "Prince",
    "regno": "20RP088676",
    "marks": 80
  },
  {
    "id": 2,
    "name": "Alice",
    "regno": "20RP088677",
    "marks": 95
  },
  {
    "id": 3,
    "name": "Bob",
    "regno": "20RP088678",
    "marks": 87
  },
  {
    "id": 4,
    "name": "Ella",
    "regno": "20RP088679",
    "marks": 78
  },
  {
    "id": 5,
    "name": "David",
    "regno": "20RP088680",
    "marks": 92
  },
  {
    "id": 6,
    "name": "Grace",
    "regno": "20RP088681",
    "marks": 85
  },
  {
    "id": 7,
    "name": "Henry",
    "regno": "20RP088682",
    "marks": 88
  },
  {
    "id": 8,
    "name": "Isabella",
    "regno": "20RP088683",
    "marks": 90
  },
  {
    "id": 9,
    "name": "Jacob",
    "regno": "20RP088684",
    "marks": 82
  },
  {
    "id": 10,
    "name": "Lily",
    "regno": "20RP088685",
    "marks": 91
  }
]
)
  })

  app.listen(port, () => {
    console.log(`Server -Auth is listening on port ${port}.`);
  });
}

module.exports = { start };
