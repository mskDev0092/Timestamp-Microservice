// index.js
// where your node app starts
// init project
var express = require('express');
var app = express();
app.use(express.json());

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
// your first API endpoint... 

const notValid = (date) => date.toUTCString() === "Invalid Date"

app.get('/api/:date', function(req, res) {

  
  // user date input
  let date = new Date(req.params.date);

  if(notValid(date)){
date = new Date(+req.params.date)
  }
  if(notValid(date)){
res.json({error: "Invalid Date"})
return;  
}
res.status(200).json({ unix: date.getTime(), utc: date.toUTCString() });
    
});

app.get("/api" , (req,res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString()
  })
})




const port = 3003;

// listen for requests :)
var listener = app.listen(port, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
