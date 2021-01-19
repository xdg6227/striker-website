const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.static('views'))

app.get('/', function (req, res) {
  res.render('index.ejs', { title: 'Home' });
})

app.get('/invite', function (req, res) {
  res.redirect('https://discord.com/api/oauth2/authorize?client_id=682046004077527051&permissions=2147483639&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize&scope=bot')
})

app.get('/support', function (req, res) {
  res.redirect('https://discord.gg/sxWgkxaRdX')
})

app.listen(port, () => console.log(`[Server] Listening now!`))