const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const issueRegex = /VR2-[0-9]+/;
const daysRegex = /[0-9]+d/;
const hoursRegex = /[0-9]+h/;
const minsRegex = /[0-9]+m/;

app.use(express.json())

function processMessage(message) {
  message
}

app.post('/', function(request, response){
  if (request.body.commits == null) {
    response.end();
    return;
  }
  console.log(request.body.commits)
  for (var i = 0; i < request.body.commits.length; i++) {
    commit = request.body.commits[i]
    message = commit.message
    lines = message.split('\n')
    for (var j = 0; j < lines.length; j++) {
      line = lines[j]
      issue = line.match(issueRegex)
      if (issue) {
        console.log("issue = " + issue);
        timeParts = line.split("#time")
        if (timeParts.length == 2) {
          timeLogString = timeParts[1]
          days = timeLogString.match(daysRegex)
          hours = timeLogString.match(hoursRegex)
          mins = timeLogString.match(minsRegex)
          console.log(days + ", " + hours + ", " + mins)
        }
      }
    }
  }
  response.end()
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}!`),
);
