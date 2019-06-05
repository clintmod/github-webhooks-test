var express = require('express');
var bodyParser = require('body-parser')

const app = express();

app.use(express.json())

app.post('/', function(request, response){
  console.log(request.body);
  response.end()
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}!`),
);
