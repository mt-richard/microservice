const express = require('express');
const app = express();
const port = 3001; 
const cors = require('cors');

function start() {

  app.use(cors());
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

  app.get('/api/', (req, res) => {
    res.json([
      {
        "id": 1,
        "title": "Africa with Good",
        "content": "This is the content of the first news article.",
        "image": "./images/3.jpg",
        "date": "2023-08-14"
      },
      {
        "id": 2,
        "title": "God with Africans",
        "content": "This is the content of the second news article.",
        "image": "./images/1.webp",
        "date": "2023-08-13"
      },
      {
        "id": 3,
        "title": "All lets pray",
        "content": "This is the content of the third news article.",
        "image": "./images/1.jpg",
        "date": "2023-08-12"
      },
        {
          "id": 4,
          "title": "Exciting New Discovery",
          "content": "Scientists have made an exciting new discovery that could revolutionize the field of science.",
          "image": "./images/2.jpg",
          "date": "2023-08-13"
        },
        {
          "id": 5,
          "title": "Local Community Event",
          "content": "The local community is coming together for a special event to celebrate unity and diversity.",
          "image": "./images/3.jpg",
          "date": "2023-08-14"
        },
        {
          "id": 6,
          "title": "Innovative Technology Launch",
          "content": "A groundbreaking new technology is set to launch, promising to reshape industries worldwide.",
          "image": "./images/4.jpg",
          "date": "2023-08-15"
        },
        {
          "id": 7,
          "title": "Art and Culture Festival",
          "content": "Artists and enthusiasts are gearing up for a grand cultural festival showcasing creativity and talent.",
          "image": "./images/5.jpg",
          "date": "2023-08-16"
        },
        {
          "id": 8,
          "title": "Health and Wellness Expo",
          "content": "The city is hosting a health and wellness expo, featuring workshops and activities for a healthier lifestyle.",
          "image": "./images/6.jpg",
          "date": "2023-08-17"
        },
        {
          "id": 9,
          "title": "New Educational Initiative",
          "content": "A new educational initiative aims to provide students with innovative learning opportunities.",
          "image": "./images/7.jpg",
          "date": "2023-08-18"
        },
        {
          "id": 10,
          "title": "Green Energy Summit",
          "content": "Global leaders are gathering for a summit to discuss the future of green energy and sustainability.",
          "image": "./images/8.jpg",
          "date": "2023-08-19"
        },
        {
          "id": 11,
          "title": "Exploring Space's Wonders",
          "content": "Astronomers are embarking on an exciting mission to explore the wonders of deep space.",
          "image": "./images/9.jpg",
          "date": "2023-08-20"
        },
        {
          "id": 12,
          "title": "Culinary Adventure Festival",
          "content": "Food lovers are invited to a culinary adventure festival featuring a diverse range of cuisines.",
          "image": "./images/10.jpg",
          "date": "2023-08-21"
        },
        {
          "id": 13,
          "title": "Empowering Women Symposium",
          "content": "A symposium focused on empowering women in various fields will inspire change and progress.",
          "image": "./images/11.jpg",
          "date": "2023-08-22"
        },
        {
          "id": 14,
          "title": "Enchanting Music Concert",
          "content": "Musicians from around the world will come together for an enchanting and unforgettable music concert.",
          "image": "./images/12.jpg",
          "date": "2023-08-23"
        },
        {
          "id": 15,
          "title": "Tech Innovations Showcase",
          "content": "Innovators and tech enthusiasts will gather to showcase the latest technological advancements.",
          "image": "./images/13.jpg",
          "date": "2023-08-24"
        },
        {
          "id": 16,
          "title": "Sustainable Living Expo",
          "content": "An expo dedicated to sustainable living practices will highlight eco-friendly solutions for everyday life.",
          "image": "./images/14.jpg",
          "date": "2023-08-25"
        },
        {
          "id": 17,
          "title": "Community Volunteer Drive",
          "content": "Residents are joining hands for a community volunteer drive to make a positive impact.",
          "image": "./images/15.jpg",
          "date": "2023-08-26"
        },
        {
          "id": 18,
          "title": "Celebrating Diversity Festival",
          "content": "A festival celebrating cultural diversity will feature performances, food, and art from around the world.",
          "image": "./images/16.jpg",
          "date": "2023-08-27"
        },
        {
          "id": 19,
          "title": "Adventure Travel Symposium",
          "content": "Adventure seekers and travel enthusiasts will gather for a symposium on exploring the world's most thrilling destinations.",
          "image": "./images/17.jpg",
          "date": "2023-08-28"
        },
        {
          "id": 20,
          "title": "Inspirational Speaker Series",
          "content": "Renowned speakers will share their insights and experiences in an inspirational speaker series.",
          "image": "./images/18.jpg",
          "date": "2023-08-29"
        },
        {
          "id": 21,
          "title": "Artificial Intelligence Conference",
          "content": "Experts in artificial intelligence will converge to discuss the future potential and challenges of AI.",
          "image": "./images/19.jpg",
          "date": "2023-08-30"
        },
        {
          "id": 22,
          "title": "Nature Conservation Workshop",
          "content": "A workshop on nature conservation will promote awareness and responsible stewardship of the environment.",
          "image": "./images/20.jpg",
          "date": "2023-08-31"
        }
      
      
    ]
  )
})

  app.listen(port, () => {
    console.log(`Server -Auth is listening on port ${port}.`);
  });
}

module.exports = { start };
