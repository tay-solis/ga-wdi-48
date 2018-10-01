const express = require('express');
const app = express();


//The data in the API (seed data)
let wasps = [{
    name: "Common Yellowjacket",
    sting: 2
  },
  {
    name: "Tarantula Hawk",
    sting: 4
  },
  {
    name: "Velvet Ant",
    sting: 3
  }
];


//Handler function for GET requests. Logs the request and then returns the Wasp API data.
app.get('/api/wasps', (req, res) => {
  console.log(req);
  console.log("NEW OBJECT BEGINS");
  console.log(res);
  //Response in JSON format
  res.json(wasps)
});

//Creates an app that listens for requests on port 3000
const server = app.listen(3000);
