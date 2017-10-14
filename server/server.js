'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g https://prosper.auth0.com
        jwksUri: "https://wuisdom.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'http://wuisdom.com',
    issuer: 'https://wuisdom.auth0.com/',
    algorithms: ['RS256']
});

app.get('/api/aboutme/public', (req, res) => {
  let AboutMe = [
  {
    id: "Education",
    profile: 'University of Southern California, Marshall School of Business',
    detail: '-Executive MBA',
    profile1: 'UCLA Extensions',
    detail1: '-Full Stack Developer',
    profile2: 'Purdue University',
    detail2: '-B.S. Consumer and Family Science'
  },
  {
    id: "Professional Experience",
    profile: 'Cathay Bank Corporate',
    detail: '-Foreign Exchange Trader and Analyst',
    detail1: '-Foreign Exchange Dealer',
    profile2: 'Spetcial',
    detail2: '-Go-To-Market Manager'
  },
  {
    id: "Hobbies",
    profile: 'Traveling',
    profile1: 'Blogging',
    profile2: 'Programming',
    profile3: 'Foodie'
  }
  ];
  res.json(AboutMe);
})

app.listen(3333);
console.log('Listening on localhost:3333');