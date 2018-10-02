// server.js
// SERVER-SIDE JAVASCRIPT
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Seed Data
const wasps = [{
    name: "Tarantula Hawk",
    sting: 4
  },
  {
    name: "Velvet Ant",
    sting: 3
  },
  {
    name: "Yellowjacket",
    sting: 1
  }
];

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: __dirname
  });
});

app.use(express.static('public'));
app.use(express.static('vendor'));

app.get('/api/wasps', (req, res) => {
  console.log("SERVING RESPONSE FOR WASPS");
  res.send(wasps);
});

app.get('/api/megarhyssa', (req, res) => {
  console.log("SERVING RESPONSE FOR MEGARHYSSA");
  res.sendFile('vendor/scripts/megarhyssa.json', {
    root: __dirname
  });
});

app.get('/api/sting', (req, res) => {
  console.log("SERVING RESPONSE FOR STING");
  res.sendFile('public/scripts/sting.json', {
    root: __dirname
  });
});


app.listen(port, () => console.log('Example app listening at http://localhost:3000/'));
