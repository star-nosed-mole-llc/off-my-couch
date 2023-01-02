const express = require('express');
const path = require('path');
const PORT = 1234;
const bodyParser = require('body-parser');

const app = express();

const assetsRouter = require('./server/assets-router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/src', assetsRouter);

app.get('/login', (req, res) => {
  // console.log('login file');
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/feed', (req, res) => {
  console.log('Feed file');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  console.log('from /login');
  console.log('req.body: ', req.body);
  // res.redirect('/feed');  NEED TO REDIRECT TO FEED PAGE
  // const data = req.body;
  // res.status(200).json('data: ', data);
});

app.get('*', (req, res) => {
  // console.log('catch all file');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`  App running on port ${PORT}`);
});
