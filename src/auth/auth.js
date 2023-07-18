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
    "name": "Richard",
    "regno": "20RP08972",
    "tel": "0987968875",
    "email": "gmai@gmail.com"
  },
  {
    "id": 2,
    "name": "Samantha",
    "regno": "20RP08973",
    "tel": "0987564321",
    "email": "samantha@example.com"
  },
  {
    "id": 3,
    "name": "Michael",
    "regno": "20RP08974",
    "tel": "0987456123",
    "email": "michael@gmail.com"
  },
  {
    "id": 4,
    "name": "Emily",
    "regno": "20RP08975",
    "tel": "0987321098",
    "email": "emily@example.com"
  },
  {
    "id": 5,
    "name": "Daniel",
    "regno": "20RP08976",
    "tel": "0987567889",
    "email": "daniel@gmail.com"
  },
  {
    "id": 6,
    "name": "Sophia",
    "regno": "20RP08977",
    "tel": "0987123456",
    "email": "sophia@example.com"
  },
  {
    "id": 7,
    "name": "William",
    "regno": "20RP08978",
    "tel": "0987654321",
    "email": "william@gmail.com"
  },
  {
    "id": 8,
    "name": "Olivia",
    "regno": "20RP08979",
    "tel": "0987456789",
    "email": "olivia@example.com"
  },
  {
    "id": 9,
    "name": "James",
    "regno": "20RP08980",
    "tel": "0987567890",
    "email": "james@gmail.com"
  },
  {
    "id": 10,
    "name": "Ava",
    "regno": "20RP08981",
    "tel": "0987012345",
    "email": "ava@example.com"
  },
  {
    "id": 11,
    "name": "John",
    "regno": "20RP08982",
    "tel": "0987657890",
    "email": "john@gmail.com"
  },
  {
    "id": 12,
    "name": "Emma",
    "regno": "20RP08983",
    "tel": "0987012345",
    "email": "emma@example.com"
  },
  {
    "id": 13,
    "name": "Alexander",
    "regno": "20RP08984",
    "tel": "0987656789",
    "email": "alexander@gmail.com"
  }
    ]
)
  })

  app.listen(port, () => {
    console.log(`Server -Auth is listening on port ${port}.`);
  });
}

module.exports = { start };
