// server/server.js
const apiKeys = require("./config.js");
const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Testing API Call to StreamingAvailability

const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/search/basic',
  params: {
    country: 'us',
    service: 'netflix',
    type: 'movie',
    genre: '18',
    page: '1',
    output_language: 'en',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': apiKeys.streamingAvailAPIKey,
    'X-RapidAPI-Host': apiKeys.streamingAvailAPIHost  
  }
};

app.get("/test", (req, res) => {
  // res.json({ message: "This is a test!"});
  console.log("inside app.get")

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

});