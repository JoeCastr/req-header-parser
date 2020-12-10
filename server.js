const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}))

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/hello', (req, res) => {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", (req, res) => {
  let reqIP = req.header('X-Forwarded-For');
  let reqLanguage = req.header('Accept-Language');
  let userAgent = req.header('User-Agent');

  res.json({
    ipaddress: reqIP,
    language: reqLanguage,
    software: userAgent
  });
});


const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})