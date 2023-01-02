const express = require('express');
const path = require('path');
const PORT = 1234;

const app = express();

const assetsRouter = require('./server/assets-router');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/src', assetsRouter);

app.get('/login', (_req, res) => {
  console.log('login file');
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/feed', (_req, res) => {
  console.log('Feed file');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/*', (_req, res) => {
  console.log('catch all file');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`  App running on port ${PORT}`);
});
