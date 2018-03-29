const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

let serverNumber,
  userNumber;

app.get('/', (req, res) => {
  serverNumber = Math.floor(Math.random() * 10000) + 1;
  res.render('index', {serverNumber, userNumber});
});

app.get('/check', (req, res) => {
  res.redirect('/');
});

app.post('/check', (req, res) => {
  userNumber = req.body.number;
  res.json({status: serverNumber > userNumber ? 'TOO_SMALL' : serverNumber < userNumber ? 'TOO_BIG' : 'EQUAL'});
  res.render('index', {serverNumber, userNumber});

})

app.listen(3000, () => {
  console.log('Server running on port 3000!');
});
