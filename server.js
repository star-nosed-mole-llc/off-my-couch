const express = require('express');
const path = require('path');

const app = express();

const assetsRouter = require('./server/assets-router');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/src', assetsRouter);

app.get('/login', (_req, res) => {
  console.log('login file');
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/*', (_req, res) => {
  console.log('catch all file');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
